import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import Post from '../components/Post'
import { db } from '../firebase'
import { useState, useEffect } from 'react'

// const posts = [
//   {
//     id: '1',
//     username: 'ashwani_kj',
//     userImg:
//       'https://media-exp1.licdn.com/dms/image/C4D03AQEAOTqaWqmP2w/profile-displayphoto-shrink_800_800/0/1643204478139?e=1649894400&v=beta&t=xIoxPgd4lwRa5P1MjTJOwzuz1S8AhPwIFAvZZMuqF34',
//     img: 'https://media-exp1.licdn.com/dms/image/C4D03AQEAOTqaWqmP2w/profile-displayphoto-shrink_800_800/0/1643204478139?e=1649894400&v=beta&t=xIoxPgd4lwRa5P1MjTJOwzuz1S8AhPwIFAvZZMuqF34',
//     caption: 'Share your feedback!!!',
//   },
//   {
//     id: '2',
//     username: 'kamana_07',
//     userImg:
//       'https://media-exp1.licdn.com/dms/image/C4D03AQEAOTqaWqmP2w/profile-displayphoto-shrink_800_800/0/1643204478139?e=1649894400&v=beta&t=xIoxPgd4lwRa5P1MjTJOwzuz1S8AhPwIFAvZZMuqF34',
//     img: 'https://media-exp1.licdn.com/dms/image/C4D03AQEAOTqaWqmP2w/profile-displayphoto-shrink_800_800/0/1643204478139?e=1649894400&v=beta&t=xIoxPgd4lwRa5P1MjTJOwzuz1S8AhPwIFAvZZMuqF34',
//     caption: 'Share your feedback!!!',
//   },
// ]
function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setPosts(snapshot.docs)
      }
    )
    return () => {
      unsubscribe()
    }
  }, [db])

  // console.log(posts)

  return (
    <div>
      {/* with dummy data */}
      {/* {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))} */}

      {/* with firebase data */}
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts
