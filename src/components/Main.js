import React from 'react'
import { LeftSidebar, Middle, RightSidebar } from '../components'
const Main = () => {
  return (
    <div className='container pt-8 px-2 sm:px-2 md:px-3 lg:px-9 xl:px-12'>
        <div className='flex flex-col sm:flex-row w-full space-x-3'>
            <LeftSidebar />
            <Middle />
            <RightSidebar />
        </div>
    </div>
  )
}

export default Main