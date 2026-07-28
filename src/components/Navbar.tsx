const listItems = [
  'Work',
  'Services',
  'Pricing',
  'Blog',
  'Templates',
  'About'
]

const Navbar = () => {
  return (
    <div className='fixed bg-black/40 flex justify-between
    items-center gap-16 py-3 px-10 left-1/2
    -translate-x-1/2 top-5 rounded-full backdrop-blur-md
    text-white shadow-lg z-10
    border border-white/10
    hover:bg-black/50 transition-all duration-300
    '>
      <ul className='flex gap-8 text-xl'>
        {listItems.map((item) => (
          <li className='relative group cursor-pointer' 
          key={item}>
            {item}
            <span className='absolute left-0
            -bottom-1.25 w-0 h-1 rounded-xl
            bg-linear-to-r from-blue-500
            to-green-500 transition-all
            duration-300 group-hover:w-full'>
            </span>
          </li>
        ))}
      </ul>

      <button className="bg-linear-to-r
      from-blue-500 to-green-500 py-1 px-6
      rounded-3xl shadow-2xl text-white text-lg
      font-semibold hover:from-blue-600 hover:to-green-500
      hover:shadow-green-500 shadow-blue-500">
        Contact
      </button>
    </div>
  )
}

export default Navbar