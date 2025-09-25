import React from 'react'

function Card({data,handleAdded,index}) {
  const { title, artist, album, image,added } = data;
  return (
    <div className='bg-white py-1 px-2 rounded w-64 h-24 flex gap-2 relative mb-4 mx-auto'>
      <div className="bg-gray-200 rounded border-2 border-orange-200">
        <img src={image} className='aspect-square rounded w-full h-full object-cover' alt="" />
      </div>
     <div className="">
       <h3 className='font-semibold text-sm mt-1 line-clamp-1'>{title}</h3>
        <p className='text-xs text-gray-500 line-clamp-1'>{artist}</p>
        <p className='text-xs text-gray-500 line-clamp-1'>{album}</p>
     </div>
      <button onClick={()=>handleAdded(index)} className={` ${added ? "bg-green-200 hover:bg-green-300 text-green-800" : "bg-orange-200 hover:bg-orange-300 text-orange-800"} absolute bottom-0 left-1/2 translate-y-[50%] -translate-x-[50%]  px-4 py-2 rounded-full flex items-center justify-center text-xs cursor-pointer transition`}>+ {added ? "Added" : "Add to Fav"}</button>
    </div>
  )
}

export default Card