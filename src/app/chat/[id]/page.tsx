import Chat from "@/app/components/Chat"
import ChatInput from "@/app/components/ChatInput"
import { type } from "os"

type Props = 
{
    params: {
        id:string
    }
}

function ChatPage({params: {id}} : Props) {
  return (
    <div className="flex flex-col h-screen overflow-hidden" >
        <Chat chatId={id} />
        <ChatInput chatId={id} />
    </div>
  )
}

export default ChatPage