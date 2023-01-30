import React from 'react'
import { Link } from 'react-router-dom'

const FourCard = ({fourCard}) => {
  const upperSection = fourCard.slice(1,5)
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-8 basis-6/12 sm:px-1 lg:px-0 sm:basis-5/12 lg:basis-6/12 xl:basis-6/12 sm:py-3 md:py-2 lg:py-4'>
      {
        upperSection.map((item,index)=> {
          return (
            <div key={index} className='w-full bg-white rounded-xl py-2 sm:mx-0 xl:mx-2 2xl:mx-4 px-3 sm:px-2 space-y-3 sm:space-y-3 md:space-y-2 lg:space-y-3'>
              <div className='basis-3/12 sm:basis-5/12 md:basis-6/12 lg:basis-8/12'>
                <Link to={`/${item.slug}`}>
                <img src={item.image_url} className="rounded-xl h-40 sm:h-auto w-full lg:max-h-44 object-cover object-center" alt={item.title}/>
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
  )
}

export default FourCard