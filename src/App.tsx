import Navbar from "./components/Navbar"

export default function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full relative
      bg-linear-to-r from-green-500-500 via-purple-600
      to-red-400 flex items-center justify-center
      text-center flex-col gap-10 text-white p-52">
        <h1 className="text-7xl">
          Section 1
        </h1>
        <p className="text-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea 
          commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur. Excepteur sint occaecat 
          cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="min-h-screen w-full relative
      bg-linear-to-r from-fuchsia-500 via-red-600
      to-orange-400 flex items-center justify-center
      text-center flex-col gap-10 text-white p-52">
        <h1 className="text-7xl">
          Section 1
        </h1>
        <p className="text-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea 
          commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur. Excepteur sint occaecat 
          cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="min-h-screen w-full relative
      bg-linear-to-r from-sky-500 via-blue-600 to-indigo-400 
      flex items-center justify-center
      text-center flex-col gap-10 text-white p-52">
        <h1 className="text-7xl">
          Section 3
        </h1>
        <p className="text-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea 
          commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur. Excepteur sint occaecat 
          cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  )
}
