import React from 'react'

const Navbar = () => {
  return (
    <div>
      
<nav class="bg-white">
  <div class="flex flex-row items-center px-4 py-5 items-center">
    <div className='text-black font-bold'>
        L O G O
    </div>
      <ul class=" flex-row ml-auto text-slate-600 font-light md:flex hidden">
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
