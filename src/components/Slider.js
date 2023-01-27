import React from 'react'
import image from '../assets/images/bitcoin-86.jpg'
import { Link } from 'react-router-dom'
import {AiFillEye, AiFillHeart} from 'react-icons/ai'
import {FaComment} from 'react-icons/fa'
const Slider = ({caption}) => {
  return (
    <div className='flex basis-6/12 sm:basis-7/12 lg:basis-6/12 xl:basis-6/12 bg-white rounded-md'>
        <div className='flex flex-col px-3 pt-3 pb-6'>
            <div className='sm:flex'>
                <Link to={`/${caption.slug}`}>
                <img src={caption.image_url} className="rounded-2xl" alt=""/>
                </Link>
            </div>
            <div className='flex row px-2 pb-2 sm:pb-2 md:pb-4 pt-3 sm:pt-3 md:pt-5 lg:pt-7'>
                <div className='flex basis-1/2 items-center'>
                  <div className='text-left'>
                    <Link to='/kategori/one-cikanlar' className='uppercase px-3 py-1 rounded-2xl text-white bg-kb text-small font-bold'>öne çıkanlar</Link>
                  </div>
                </div>
            <div className='flex flex-row-reverse basis-1/2'>
              <div className='flex space-x-5 sm:space-x-4 md:space-x-7 text-xs sm:text-xsx md:text-xs font-bold items-center'>
                <div className='flex space-x-1 sm:space-x-1 md:space-x-2 items-center'>
                  <span>
                    <AiFillEye className='text-gray-500'/>
                  </span>
                  <span>
                    5.8k
                  </span>
                </div>
                <div className='flex space-x-1 sm:space-x-1 md:space-x-2 items-center'>
                  <span>
                    <FaComment className='text-gray-500'/>
                  </span>
                  <span>
                    2.5k
                  </span>
                </div>
                <div className='flex space-x-1 sm:space-x-1 md:space-x-2 items-center'>
                  <span>
                    <AiFillHeart className='text-gray-500'/>
                  </span>
                  <span>
                    125k
                  </span>
                </div>
              </div>
            </div>
            </div>
            <div className='flex w-full text-left px-2'>
                <Link to={`/${caption.slug}`} className='font-bold sm:font-bold xl:font-extrabold text-xl sm:text-sm lg:text-2xl'>
                    {caption.title}
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Slider