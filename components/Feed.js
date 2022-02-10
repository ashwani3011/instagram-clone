import Stories from '../components/Stories'
import Posts from '../components/Posts'
import MiniProfile from '../components/MiniProfile'
import Suggestions from '../components/Suggestions'
function Feed() {
  return (
    <main className="mx-auto grid grid-cols-1  md:max-w-3xl md:grid-cols-2 lg:grid-cols-3 xl:max-w-6xl">
      {/* Section - left */}
      <section className="md:col-span-2 ">
        {/* l - Stories */}
        <Stories />
        {/* l - Posts */}
        <Posts />
      </section>
      {/* section - right*/}
      <section className="sm:hidden md:col-span-1 xl:inline-grid">
        <div className="fixed top-20">
          {/* mini profile - r */}
          <MiniProfile />
          {/* suggestions - r */}
          <Suggestions />
        </div>
      </section>
    </main>
  )
}

export default Feed
