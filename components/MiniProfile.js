function MiniProfile() {
  return (
    <div className="mt-14 ml-14 flex items-center justify-between">
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D03AQEAOTqaWqmP2w/profile-displayphoto-shrink_800_800/0/1643204478139?e=1649894400&v=beta&t=xIoxPgd4lwRa5P1MjTJOwzuz1S8AhPwIFAvZZMuqF34"
        alt="profile picture"
        className="h-16 w-16  rounded-full border p-[2px]"
      />
      <div className="mx-4 flex-1">
        <h2 className="font-bold">ashwani_kj</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-sm font-semibold text-blue-400">Sign Out</button>
    </div>
  )
}

export default MiniProfile
