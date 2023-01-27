import React from 'react'
import { Link } from 'react-router-dom'
import { AuthorMiddle, LeftSidebar, RightSidebar } from '../components'
const Author = () => {
  return (
    <main className='container flex flex-col space-y-7 px-1 sm:px-2 md:px-3 lg:px-9 xl:px-0 mt-8'>
        <div className='space-y-4'>
            <div className='text-kb text-5xl font-extrabold'>
                Farhad Tashiri
            </div>
            <div className='space-x-3 text-sm'>
                <span className='text-text-gray'>
                    Buradasınız:
                </span>
                <Link className='hover:text-kb text-link font-semibold'>
                    Ana Sayfa
                </Link>
                <span>
                    &gt;
                </span>
                <Link className='hover:text-kb text-link font-semibold'>
                    Yazarlar
                </Link>
                <span>
                    &gt;
                </span>
                <span className='text-text-gray'>
                    Farhad Tashiri
                </span>
            </div>
        </div>
        <div className='container pt-8 px-2 sm:px-2 md:px-3 lg:px-0 xl:px-0'>
        <div className='flex flex-col sm:flex-row sm:space-x-3 w-full'>
            <LeftSidebar />
            <AuthorMiddle />
            <RightSidebar />
        </div>
    </div>
    </main>
  )
}

export default Author