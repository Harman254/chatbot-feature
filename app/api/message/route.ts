import { chatbotPrompt } from "@/helpers/constants/chatbot-prompt";
import { ChatGPTMessage, OpenAiStream, OpenAiStreampayload } from "@/lib/openai-stream";
import { MessageArraySchema } from "@/lib/validators/Message";


export async function POST(req: Request) {
  const { messages } = (await req.json()) 
  if(!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not defined')
  }

  if(!messages){
    throw new Error('messages is not defined')
  }
  const parsedMessages = MessageArraySchema.parse(messages)

  const outboundMessages: ChatGPTMessage[] = parsedMessages.map((message) => {
    return {
      role: message.isUserMessage ? 'user' : 'system',
      content: message.text,
    }
  })
  

  outboundMessages.unshift({
    role: 'system',
    content: chatbotPrompt,
  })


  const payload: OpenAiStreampayload = {
    model: 'gpt-3.5-turbo',
    messages: outboundMessages,
    temperature: 0.4,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 150,
    stream: true,
    n: 1,
  }

  const stream = await OpenAiStream(payload)

  return new Response(stream)
}

