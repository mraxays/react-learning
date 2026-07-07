import React from 'react'

function Marquee({ imgsUrl }) {
    return (
        <div className="flex gap-10 whitespace-nowrap py-2">
            {imgsUrl.map((img, index) => (
              <img src={img} alt={`Marquee ${index}`} className="w-32 h-16 object-contain" />
            ))}
            {imgsUrl.map((img, index) => (
              <img src={img} alt={`Marquee ${index}`} className="w-32 h-16 object-contain" />
            ))}
        </div>
    )
}

export default Marquee