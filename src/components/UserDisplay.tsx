import MessageDisplay from "@/components/MessageDisplay"
import { User } from "../../types"

type Props = {
  user: User
}

export default function UserDisplay({ user }: Props) {
  return (
    <div className='flex gap-x-24 justify-center'>
      <div className='rounded-sm flex items-center justify-center drop-shadow-md bg-neutral-700 w-48 h-20'>
        <p className='text-xl text-gray-200 font-bold'>
          {user.name}
        </p>
      </div>
      <div>
        {
          user.messages.map((message, index) => <MessageDisplay key={index} index={index} message={message} />)
        }
      </div>
    </div>
  )
}