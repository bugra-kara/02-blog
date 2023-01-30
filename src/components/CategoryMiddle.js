import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillEye, AiFillHeart} from 'react-icons/ai'
import image from '../assets/images/bitcoin-86.jpg'
import {FaComment} from 'react-icons/fa'
import { usePublicContext } from '../context/publicContext'
import moment from 'moment'
import 'moment/locale/tr'
const CategoryMiddle = () => {
    const {singleCategorie} = usePublicContext()
    if(singleCategorie !== undefined) {
        return (
          <div className='flex basis-7/12 sm:basis-10/12 lg:basis-7/12 flex-col py-4 px-0 space-y-8 order-1 sm:order-2'>
              <div className='flex flex-col w-full px-3 pt-3 pb-6 bg-white rounded-xl'>
                  <div className='sm:flex'>
                  <Link to={`/${singleCategorie[0]?.slug}`}>
                      <img src={singleCategorie[0]?.image_url} className="rounded-2xl" alt=""/>
                  </Link>
                  </div>
                  <div className='flex row px-2 pb-2 sm:pb-2 md:pb-4 pt-3 sm:pt-3 md:pt-5 lg:pt-7'>
                  <div className='flex basis-1/2 items-center'>
                      <span className=' rounded-2xl bg-kb bg-opacity-20 text-kb text-xsx font-bold px-2 py-0.5 sm:px-1.5 sm:py-0.5 md:px-2 md:py-0.5'>
                      {singleCategorie[0]?.categories.map((item, index)=>{return index < singleCategorie[0].categories.length -1 ? `${item}, ` : item})}
                      </span>
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
                  <div className='flex w-full text-left pl-2 pr-0.5'>
                      <Link to={`/${singleCategorie[0]?.slug}`} className='font-extrabold hover:text-kb sm:font-bold xl:font-extrabold text-xl sm:text-sm lg:text-xlx'>
                      {singleCategorie[0]?.title}
                      </Link>
                  </div>
                  <div className='flex px-2 pt-3 sm:pt-2 md:pt-2 lg:pt-3 space-x-5 font-semibold mr-auto'>
                      <span className='text-small text-gray-400'>
                          BY <Link className='text-link'>{singleCategorie[0]?.fullname}</Link>
                      </span>
                      <span className='text-small text-gray-400'>
                          {moment(singleCategorie[0]?.created_date).fromNow()}
                      </span>
                  </div>
              </div>
              <section>
                  <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-8'>
                  {
                    singleCategorie?.map((item, index)=> {
                        return index !== 0 
                        ?
                        <article key={index} className='flex flex-col space-y-3 md:space-y-4 lg:space-y-5 rounded-xl bg-white p-2'>
                            <div>
                                <Link to={`/${item.slug}`}>
                                    <img src={item.image_url} className="rounded-2xl" alt=""/>
                                </Link>
                            </div>
                            <div className='text-left px-2 space-x-2 text-ah uppercase font-extrabold text-small sm:text-xs'>
                                {item.categories.map((item, index)=> {
                                    return (
                                        <Link key={index}>
                                            <span className='uppercase'>
                                                {item}
                                            </span>
                                        </Link>
                                    )
                                })}
                            </div>
                            <div className='flex w-full text-left pl-2 pr-0.5'>
                                <Link to={`/${item.slug}`} className='font-bold hover:text-kb sm:font-bold xl:font-extrabold text-xl sm:text-sm lg:text-xlx'>
                                {item.title}
                                </Link>
                            </div>
                            <div className='w-full text-left px-2'>
                                <p className='line-clamp-4 text-card-gray font-semibold text-sm'>
                                {item.subtitle}
                                </p>
                            </div>
                            <div className='flex px-2'>
                                <div className='flex space-x-5 sm:space-x-4 md:space-x-7 text-xs sm:text-xsx md:text-xs font-bold items-center'>
                                    <div className='flex space-x-5 font-semibold mr-auto'>
                                    <span className='text-small text-gray-400'>
                                        BY <Link className=' text-link'>{item.fullname}</Link>
                                    </span>
                                    <span className='text-small text-gray-400'>
                                    {moment(item.created_date).fromNow()}
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </article>
                        : ""
                    })
                  }
                  </div>
              </section>
          </div>
        )
    }
}

export default CategoryMiddle