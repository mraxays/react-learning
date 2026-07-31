// import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementAsync } from './store/reducers/counterSlice'


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center gap-5">
      <p>Count: {count}</p>
      <div className="flex gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => dispatch(increment())}>+</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => dispatch(decrement())}>-</button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded asyncButton" onClick={() => dispatch(incrementAsync(5))}>Increment by 5</button>
      </div>
    </div>
  )
}

export default App