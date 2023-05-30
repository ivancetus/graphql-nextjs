import Branch from "@/components/Branch"
import { Message } from "../../types"

type Props = {
  index: number
  message: Message
}

export default function MessageDisplay({ message, index }: Props) {
  return (
    <div className='group mb-2 shrink-0 rounded-lg flex items-center justify-center drop-shadow-md bg-zinc-700 w-48 h-20 relative'>
      <Branch trunk={index === 0} />
      <p className='text-center text-sm text-gray-200 font-bold px-4'>
        {message.body}
      </p>
    </div>
  )
}
