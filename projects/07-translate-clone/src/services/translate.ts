import { ChatCompletionRequestMessageRoleEnum, Configuration, OpenAIApi } from "openai"
import { FromLanguage, Language } from "../types"
import { SUPPORTED_LANGUAGES } from "../constants"

// TODO: Read the new updates in openAI v 4.4.0, ChatCompletionRequestMessageRoleEnum is deprecated.

// Move to a back end service
const apiKey = import.meta.env.VITE_OPENAI_API_KEY

const configuration = new Configuration({ apiKey })
const openai = new OpenAIApi(configuration)

export async function translate({
  fromLanguage,
  toLanguage,
  text
}: {
  fromLanguage: FromLanguage
  toLanguage: Language
  text: string
}) {
  if (fromLanguage === toLanguage) return text;

  const messages = [
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content: 'You are a AI that translate text. You receive a text from the use and you do not answer, just translate the text. The original language is surrounded by `{{` and `}}` and the target language is surrounded by `[[` and `]]`. You can will receive an {{auto}} which means that you have to detect the language.'
    },

    {
      role: ChatCompletionRequestMessageRoleEnum.User,
      content: `Hola mundo {{Español}} [[English]]: ${text}`
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.Assistant,
      content: `Hello world`
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.User,
      content: `How are you? {{auto}} [[Português]]: ${text}`
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.Assistant,
      content: `Como você está?`
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.User,
      content: `Bonjour monsieur, Ca va? {{auto}} [[Deutsche]]: ${text}`
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.Assistant,
      content: `Hallo Herr, wie geht es dir?`
    },
  ]

  const fromCode = fromLanguage === 'auto' ? 'auto' : SUPPORTED_LANGUAGES[fromLanguage]
  const toCode = SUPPORTED_LANGUAGES[toLanguage]

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      ...messages,
      {
        role: ChatCompletionRequestMessageRoleEnum.User,
        content: `${text} {{${fromCode}}} [[${toCode}]]`
      }
    ]
  })

  return completion.data.choices[0]?.messages[0].content
}