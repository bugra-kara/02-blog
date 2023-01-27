import React from 'react'
import image from '../assets/images/bitcoin-86.jpg'
import { Link } from 'react-router-dom'

const FourCard = ({fourCard}) => {
  const first = fourCard.slice(1,3)
  const second = fourCard.slice(3,5)
  return (
    <div className='flex-col basis-6/12 sm:flex sm:basis-5/12 lg:basis-6/12 xl:basis-6/12 space-y-8 sm:space-y-1 md:space-y-1 lg:space-y-3 xl:space-y-6 sm:py-3 md:py-2 lg:py-4'>
          <div className='flex flex-col sm:flex-row sm:basis-1/2 sm:space-x-6 lg:space-x-6 space-y-8 sm:space-y-0'>
            {
              first.map((item,index)=> {
                return (
                  <div key={index} className='flex flex-col sm:flex-col w-full sm:w-1/2 bg-white rounded-xl py-2 sm:mx-0 xl:mx-2 2xl:mx-4 px-3 sm:px-2 2xl:px-0 space-y-3 sm:space-y-3 md:space-y-2 lg:space-y-3'>
                    <div className='basis-3/12 sm:basis-5/12 md:basis-6/12 lg:basis-8/12'>
                      <Link to={`/${item.slug}`}>
                      <img src={item.image_url} className="rounded-xl h-40 sm:h-auto w-full lg:max-h-44 object-cover object-center" alt=""/>
                      </Link>
                    </div>
                    <div className='basis-9/12 sm:basis-7/12 md:basis-6/12 lg:basis-4/12 place-content-end sm:place-content-baseline text-left font-bold text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base px-2 sm:px-2 lg:px-1 2xl:px-3'>
                      <Link to={`/${item.slug}`} className=' text-base lg:text-sm xl:text-base font-bold leading-5 lg:leading-5 line-clamp-2'>
                      {item.title}
                      </Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='flex flex-col sm:flex-row sm:basis-1/2 sm:space-x-6 lg:space-x-6 space-y-8 sm:space-y-0'>
          {
              second.map((item,index)=> {
                return (
                  <div key={index} className='flex flex-col sm:flex-col w-full sm:w-1/2 bg-white rounded-xl py-2 sm:mx-0 xl:mx-2 2xl:mx-4 px-3 sm:px-2 2xl:px-0 space-y-3 sm:space-y-3 md:space-y-2 lg:space-y-3'>
                    <div className='basis-3/12 sm:basis-5/12 md:basis-6/12 lg:basis-8/12'>
                      <Link to={`/${item.slug}`}>
                      <img src={item.image_url} className="rounded-xl h-40 sm:h-auto w-full lg:max-h-44 object-cover object-center" alt=""/>
                      </Link>
                    </div>
                    <div className='basis-9/12 sm:basis-7/12 md:basis-6/12 lg:basis-4/12 place-content-end sm:place-content-baseline text-left font-bold text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base px-2 sm:px-2 lg:px-1 2xl:px-3'>
                      <Link to={`/${item.slug}`} className=' text-base lg:text-sm xl:text-base font-bold leading-5 lg:leading-5 line-clamp-2'>
                        {item.title}
                      </Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
      </div>
  )
}

export default FourCard