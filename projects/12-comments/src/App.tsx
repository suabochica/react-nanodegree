import { useQuery, useQueryClient } from "@tanstack/react-query";
import * as React from "react";

import { Comments } from "./components/Comments";
import { CommentWithId, getComments } from "./services/comments.services";

function App() {
  // React query client
  // const queryClient = useQueryClient();
  const { data } = useQuery<CommentWithId[] | undefined>(
    ["comments"],
    getComments
  );

  console.log(data);

  // State
  // ------

  // Hooks
  // ------

  // Handlers
  // --------
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="grid h-screen grid-cols-2">
      <div className="col-span-1 p-8 bg-white">
        <h1>Comments</h1>
        <Comments data={data} />
      </div>

      <div className="col-span-1 p-8 bg-black">
        <form
          action=""
          className="block max-w-xl px-4 m-auto"
          onSubmit={handleSubmit}
        ></form>
      </div>
    </main>
  );
}

export default App;
