import React, {useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { CategoryMiddle, LeftSidebar, RightSidebar } from '../components'
import { usePublicContext } from '../context/publicContext'
const Category = () => {
    const {id} = useParams()
    const {getSingleCategorie, singleCategorie} = usePublicContext()
    useEffect(()=> {
        window.scrollTo(0,0)
        const getData = async () => {
            await getSingleCategorie(id)
        }
        getData()
      },[id])
  return (
    <main className='container flex flex-col space-y-7 px-3 sm:px-2 md:px-3 lg:px-9 xl:px-0 mt-8'>
        <div className='space-y-4'>
            <div className='text-kb text-5xl font-extrabold'>
                { singleCategorie !== undefined ? singleCategorie[0]?.category_name : ""}
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
                <span className='text-text-gray'>
                { singleCategorie !== undefined ? singleCategorie[0]?.category_name : ""}
                </span>
            </div>
        </div>
        <div className='container pt-8 px-2 sm:px-2 md:px-3 lg:px-0 xl:px-0'>
        <div className='flex flex-col sm:flex-row sm:space-x-3 w-full'>
            <LeftSidebar />
            <CategoryMiddle />
            <RightSidebar />
        </div>
    </div>
    </main>
  )
}

export default Category