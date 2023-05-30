import UserDisplay from "@/components/UserDisplay"

import { GetUsersDocument } from "@/graphql/generated"
import { getClient } from "@/lib/client"


export default async function Home() {
  const query = GetUsersDocument
  const  { data }  = await getClient().query({ query })
  return (
    <main
      className='
        bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll
        '
    >
      {
        data.users.map((user, index) => <UserDisplay user={user} key={index} />)
      }
    </main>
  )
}
