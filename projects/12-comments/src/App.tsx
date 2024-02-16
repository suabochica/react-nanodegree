import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import * as React from "react";

import { type Comment, type CommentWithId, getComments, createComment } from "./services/comments.services"

import { Comments } from "./components/Comments"
import { FormInput, FormTextArea } from "./components/Form"
function App() {
  // React query client
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery<CommentWithId[] | undefined>(
    ["comments"],
    getComments
  );

  // Hooks
  // ------

  const { mutate, isLoading: isLoadingMutation } = useMutation({
    mutationFn: createComment,
    onMutate: async (newComment: Comment) => {
      await queryClient.cancelQueries(['comments'])

      // Snapshot the previous value for optimistic rendering
      const previousComments = queryClient.getQueryData(['comments'])

      queryClient.setQueryData(['comments'], (old?: Comment[]): Comment[] => {
        const newCommentToAdd = structuredClone(newComment)
        newCommentToAdd.preview = true

        if (old === null) return [newCommentToAdd]

        return [...old, newCommentToAdd]
      })
      return { previousComments }
    },
    onError: (error, variables, context) => {
      console.error(error)
      console.log(variables)
      if (context?.previousComments != null) {
        queryClient.setQueryData(['comments'], context.previousComments)
      }
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['comments']
      })
    }
  });

  // Handlers
  // --------

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (isLoadingMutation) return
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const message = data.get("message")?.toString() ?? ''
    const title = data.get("title")?.toString() ?? ''

    if (title !== '' || message !== '') {
      mutate({ title, message })
    }
  };

  return (
    <main className="grid h-screen grid-cols-2">
      <div className="col-span-1 p-8 bg-white">
        <h1>Comments</h1>

        {isLoading && <strong>Cargando...</strong>}
        {error !== null && <strong>Error: Verifica tu api-key de jsonbin.io</strong>}

        <Comments data={data} />
      </div>

      <div className="col-span-1 p-8 bg-black">
        <form
          action=""
          className="block max-w-xl px-4 m-auto"
          onSubmit={handleSubmit}
        >
          <FormInput />
          <FormTextArea />

          <button
            disabled={isLoadingMutation}
            type='submit'
            className='
              mt-4 px-12 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm py-2.5 text-center mr-2 mb-2
            '
          >
            {isLoadingMutation ? 'Enviando comentario...' : 'Enviar comentario'}
          </button>

        </form>
      </div>
    </main>
  );
}

export default App;
