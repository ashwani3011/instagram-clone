import faker from '@faker-js/faker'
import { useEffect, useState } from 'react'
import Story from '../components/Story'
import data from '../components/data'
import { useSession } from 'next-auth/react'

function Stories() {
  const { data: session } = useSession()
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    // console.log(suggestions)
    setSuggestions(suggestions)
  }, [])

  return (
    <div className=" mt-8 flex space-x-2 overflow-x-scroll rounded-sm border border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-black">
      {/* when there is user we want to show user story at first */}
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}

export default Stories
