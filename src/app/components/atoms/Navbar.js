import React from 'react'

const Navbar = () => {
  return (
    <div>
      
<nav class="bg-white">
  <div class="flex flex-row items-center px-4 py-3">
    <div className='text-black'>
        LOGO
    </div>
      <ul class="font-medium flex flex-row ml-auto text-slate-600 font-thin">
        <li>
          <a href="#" class="px-4" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="px-4" aria-current="page">FAQ</a>
        </li>
        <li>
          <a href="#" class="px-4" aria-current="page">How it Works</a>
        </li>
        <li>
          <a href="#" class="px-4" aria-current="page">Pre-requirements & Exam Rules</a>
        </li>
      </ul>
  </div>
</nav>

    </div>
  )
}

export default Navbar
