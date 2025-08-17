import React from 'react'
import Card from './components/Card' // Props


function App() {
  /*
    <Card /> ------ Props Are Use for Reusable Components
    Props are used to pass data from a parent component to a child component.

    Consider the I Want to create a button for use multiple times in this application that time i will create a reusable component and pass the data using props.
    like <Card text="Batch 1" color="bg-red-500"/>

      and in the Card component, I can access these props like this:

      function Card({ text, color }) {
        return (
          <button className={`${color} text-white px-2 py-1 rounded shadow`}>{text}</button>
        )
      }

  */
  return (
    <div className='p-4 space-x-2'>
      <Card text="Batch 1" color="bg-red-500"/>
      <Card text="Batch 2" color="bg-blue-500"/>
      <Card text="Batch 3" color="bg-green-500"/>
      <Card text="Batch 4" color="bg-yellow-500"/>
    </div>
  )
}

export default App