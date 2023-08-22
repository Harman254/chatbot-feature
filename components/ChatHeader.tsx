import { FC } from "react";

const ChatHeader: FC = () => {
  return <div className="w-full flex justify-start items-center text-zinc-800 gap-3" >
    <div className="flex flex-col items-start text-sm">
      <p className="text-ss">Chat With</p>
      <div className="flex gap-1.5 items-center">
        <p className="w-2 h-2 rounded-full bg-green-500"></p>
        <p className="font-medium">BookBuddy support</p>
      </div>

    </div>
  </div>
}

export default ChatHeader