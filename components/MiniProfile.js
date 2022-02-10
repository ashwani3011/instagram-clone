import { signIn, signOut, useSession } from 'next-auth/react'

function MiniProfile() {
  const { data: session } = useSession()
  console.log(session)
  return (
    <div className="mt-14 ml-14 flex items-center justify-between">
      <img
        src={session?.user?.image}
        alt="profile picture"
        className="h-16 w-16  rounded-full border p-[2px]"
      />
      <div className="mx-4 flex-1">
        {/* by usin ? we are protecting session user */}
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button onClick={signOut} className="text-sm font-semibold text-blue-400">
        Sign Out
      </button>
    </div>
  )
}

export default MiniProfile
