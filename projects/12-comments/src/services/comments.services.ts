export interface Comment {
  title: string
  message: string
  preview: boolean
}

export interface CommentWithId extends Comment {
  id: string
}

// ApiKey public for testing purpose

const apiKey = 'YOUR_API_KEY'
const accountId = 'YOUR_ACCOUNT_ID'

// Utils
// -----

const delay = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// CRUD operations
// ---------------

export const getComments = async (): Promise<CommentWithId[]> => {
  const response = await fetch(`https://api.jsonbin.io/v3/b/${accountId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': apiKey,
    },
  })

  if (!response.ok) throw new Error('Error fetching comments')

  const data = await response.json()

  return data?.record
}

export const createComment = async (comment: Comment): Promise<CommentWithId> => {
  const comments = await getComments()

  const id = crypto.randomUUID()
  const newComment = { ...comment, id }
  const commentToSave = { ...comments, newComment }

  const response = await fetch(`https://api.jsonbin.io/v3/b/${accountId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': apiKey,
    },
    body: JSON.stringify(commentToSave),
  })

  if (!response.ok) throw new Error('Error creating comment')

  return newComment
}
