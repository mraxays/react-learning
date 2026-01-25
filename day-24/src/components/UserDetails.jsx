import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function UserDetails() {
  const {username} = useParams();
  const navigate = useNavigate();
  //  U Can use navigate to go back to previous page
  // const goBackHandler = ()=>{
  //   navigate(-1);
  // }
  const goBackHandler = ()=>{
    navigate('/user');
  }
  return (
    <div className="p-4 bg-amber-600">
      <h2 className='text-2xl'>Hey {username}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque repellendus aut, sapiente nesciunt inventore nobis ea ad debitis dolor reiciendis soluta, tenetur optio est quidem a necessitatibus iste accusantium.</p>
        <button className='p-1 text-white bg-black rounded mt-1' onClick={goBackHandler}>Go Back</button>
    </div>
  )
}

export default UserDetails