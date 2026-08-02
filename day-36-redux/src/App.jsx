// import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userSlice } from './store/reducers/userReducers'


function App() {
  const users = useSelector((state) => state.userReducer.users)
  const dispatch = useDispatch()

  const DeleteHandler = (userIndex) => {
    // console.log(userId);
    dispatch(userSlice.actions.userdelete(userIndex))
  }

  return (
  <div className="min-h-screen bg-neutral-950 text-neutral-100 py-14 px-6">
  <div className="max-w-5xl mx-auto">
    <h1 className="text-5xl font-bold tracking-tight mb-10">
      Users
    </h1>

    <div className="grid gap-6 md:grid-cols-2">
      {users.map((user, index) => (
        <div
          key={user.id}
          className="group rounded-2xl border border-neutral-800 bg-neutral-900/70 backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 hover:bg-neutral-900"
        >
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                {user.name}
              </h2>

              <p className="mt-1 text-sm text-neutral-500">
                @{user.username}
              </p>
            </div>

            <div className="h-12 w-12 rounded-full bg-neutral-800 flex items-center justify-center text-lg font-semibold">
              {user.name.charAt(0)}
            </div>
          </div>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between border-b border-neutral-800 pb-2">
              <span className="text-neutral-500">Email</span>
              <span>{user.email}</span>
            </div>

            <div className="flex justify-between border-b border-neutral-800 pb-2">
              <span className="text-neutral-500">Phone</span>
              <span>{user.phone}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-neutral-500">Website</span>
              <span className="text-neutral-300">{user.website}</span>
            </div>
          </div>

          <div className="mt-7 flex justify-end">
            <button
              onClick={() => DeleteHandler(index)}
              className="rounded-xl border border-red-500/40 px-4 py-2 text-sm text-red-400 transition-all duration-300 hover:bg-red-500 hover:text-white opacity-0 group-hover:opacity-100"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  )
}

export default App