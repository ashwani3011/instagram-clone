import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
//renaming icon
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession()
  return (
    <div>
      {/* header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          className="mr-3 h-12 w-12 rounded-full border object-contain p-1"
          alt="user image"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* img */}
      <img src={img} className="w-full object-cover" alt="post image" />
      {/* buttons */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn rotate-45" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}
      {/* caption */}
      <p className="truncate p-5">
        <span className="mr-1 font-bold">{username}</span>
        {caption}
      </p>
      {/* comments */}
      {/* input box */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 border-none outline-none focus:ring-0"
          />
          <button className="font-semibold text-blue-600">Post</button>
        </form>
      )}
    </div>
  )
}

export default Post
