import Stories from '../components/Stories'
import Posts from '../components/Posts'
import MiniProfile from '../components/MiniProfile'
import Suggestions from '../components/Suggestions'
import { useSession } from 'next-auth/react'

function Feed() {
  const { data: session } = useSession()
  return (
    //applying style based on if use logs in or logs out by using important
    // important overwrite previously written anything
    <main
      className={`mx-auto grid grid-cols-1 
     md:max-w-3xl md:grid-cols-2 
     xl:max-w-6xl xl:grid-cols-3 ${!session && '!max-w-3xl !grid-cols-1'}`}
    >
      {/* Section - left */}
      <section className="col-span-2">
        {/* l - Stories */}
        <Stories />
        {/* l - Posts */}
        <Posts />
      </section>
      {/* section - right*/}
      {session && (
        <section className="hidden md:col-span-1 xl:inline-grid">
          <div className="fixed top-20">
            {/* mini profile - r */}
            <MiniProfile />
            {/* suggestions - r */}
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  )
}

export default Feed
