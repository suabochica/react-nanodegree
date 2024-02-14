import { CommentWithId } from "../services/comments.services";

export const Comments = ({ data }: { data?: CommentWithId[] }) => {
  return (
    <ul>
      <li>
        {data?.map((comment) => (
          <article
            key={comment.id}
            className={`${
              comment.preview ? "bg-gray-100" : "bg-white"
            } p-4 border border-gray-200 rounded-lg shadow-md mb-4`}
          >
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {comment.title}
            </h2>
            <p className="font-normal text-gray-700">{comment.message}</p>
          </article>
        ))}
      </li>
    </ul>
  );
};
