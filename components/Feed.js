import Stories from '../components/Stories'
import Posts from '../components/Posts'
function Feed() {
  return (
    <main className="mx-auto grid grid-cols-1  md:max-w-3xl md:grid-cols-2 xl:max-w-6xl">
      {/* Section - left */}
      <section className="col-span-1">
        {/* l - Stories */}
        <Stories />
        {/* l - Posts */}
        <Posts />
      </section>
      {/* section - right*/}
      <section>
        {/* mini profile - r */}
        {/* suggestions - r */}
      </section>
    </main>
  )
}

export default Feed
