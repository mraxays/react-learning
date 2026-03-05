import React from 'react'

function Navbar() {
  return (
    <div className='max-w-6xl mx-auto h-16 bg-zinc-800 border-b border-zinc-600 text-white px-4 flex items-center gap-4'>
      <div className='tracking-wider uppercase'>My App</div>
      <div className='flex space-x-5 ml-10 '>
       {['Home', 'Work', 'Culture'].map((item, index) => (
        <a key={index} href="#" className='hover:text-zinc-400 transition text-sm flex items-center'>
          {index === 1 ? (<span className='inline-block w-1.5 h-1.5 bg-green-500 shadow shadow-green-500 animate-pulse rounded-full mr-2 '></span>) : null}
          {item}</a>
       ))}
      </div>
    </div>
  )
}

export default Navbar