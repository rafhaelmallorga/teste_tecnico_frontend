import React from 'react'
import Home from './page/Home'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <Toaster 
        position='top-center'
        reverseOrder={false}
      />
      <div className='bg-[#F5F7FA] flex justify-center items-center w-full h-[100vh]'>
        <Home/>
      </div>
    </>
  )
}

export default App