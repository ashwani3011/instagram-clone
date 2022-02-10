import Image from 'next/image'
import {
  SearchIcon,
  PlusSearchIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  PlusCircleIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
function Header() {
  return (
    <div className="sticky top-0 z-10 border-b bg-white shadow-sm">
      <div className="mx-5 flex max-w-6xl justify-between lg:mx-auto">
        {/* Left - Logo*/}
        <div className="relative hidden w-24 cursor-pointer lg:inline-grid">
          <Image
            src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* logo for mobile */}
        <div className="relative w-10 flex-shrink-0 cursor-pointer lg:hidden">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* middle - search-bar */}
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="absolute h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="search"
              className="border-gray block w-full rounded-md 
            bg-gray-50 pl-10 focus:border-black focus:ring-black sm:text-sm"
            />
          </div>
        </div>

        {/* Right - icons */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 cursor-pointer md:hidden" />
          <div className="navBtn relative">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-1 -right-2 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEAOTqaWqmP2w/profile-displayphoto-shrink_800_800/0/1643204478139?e=1649894400&v=beta&t=xIoxPgd4lwRa5P1MjTJOwzuz1S8AhPwIFAvZZMuqF34"
            alt="profile pic"
            className="h-10 cursor-pointer rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
