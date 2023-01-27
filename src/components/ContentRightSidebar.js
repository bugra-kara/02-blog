import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/images/bitcoin-86.jpg'
const ContentRightSidebar = () => {
  return (
    <div className='w-full sticky h-screen top-20 lg:block flex-col pb-4 mb-12 pt-0 px-0 md:px-3 space-y-3 float-left order-2 sm:order-last'>
        <div className=' text-h font-bold text-left'>
            <h5 className=' text-xl'>
            <span className=' font-black'>En Çok</span> Okunanlar
            </h5>
        </div>
        <article className='bg-white rounded-xl p-3'>
            <div className='flex flex-col lg:flex-row'>
                <div className='basis-4/12 sm:basis-4/12 md:basis-5/12 lg:basis-5/12 xl:basis-4/12'>
                    <Link>
                        <img src={image} className="rounded-2xl h-full object-cover" alt=""/>
                    </Link>
                </div>
                <div className='basis-8/12 sm:basis-8/12 md:basis-7/12 lg:basis-7/12 xl:basis-8/12 md:pl-1 lg:pl-4 md:pr-1 sm:pr-4 lg:pr-2 space-y-3 py-1'>
                    <div className='text-left'>
                        <Link className='font-bold sm:font-bold xl:font-extrabold text-base sm:text-xl md:text-base lg:text-base line-clamp-3'>
                        Web3 oyun stüdyosu Mythical Games eski yöneticilerine adsadasdas adasdasdasdas asdasd
                        </Link>
                    </div>
                    <div className='hidden lg:flex space-x-5 font-semibold mr-auto'>
                        <span className='text-small text-gray-400'>
                            BY <Link className=' text-link'>Farhad Tashiri</Link>
                        </span>
                        <span className='text-small text-gray-400'>
                            4 GÜN ÖNCE
                        </span>
                    </div>
                </div>
            </div>
        </article>
        <article className='bg-white rounded-xl p-3'>
            <div className='flex flex-col lg:flex-row'>
                <div className='basis-4/12 sm:basis-4/12 md:basis-5/12 lg:basis-5/12 xl:basis-4/12'>
                    <Link>
                        <img src={image} className="rounded-2xl h-full object-cover" alt=""/>
                    </Link>
                </div>
                <div className='basis-8/12 sm:basis-8/12 md:basis-7/12 lg:basis-7/12 xl:basis-8/12 md:pl-1 lg:pl-4 md:pr-1 sm:pr-4 lg:pr-2 space-y-3 py-1'>
                    <div className='text-left'>
                        <Link className='font-bold sm:font-bold xl:font-extrabold text-base sm:text-xl md:text-base lg:text-base line-clamp-3'>
                        Web3 oyun stüdyosu Mythical Games eski yöneticilerine adsadasdas adasdasdasdas asdasd
                        </Link>
                    </div>
                    <div className='hidden lg:flex space-x-5 font-semibold mr-auto'>
                        <span className='text-small text-gray-400'>
                            BY <Link className=' text-link'>Farhad Tashiri</Link>
                        </span>
                        <span className='text-small text-gray-400'>
                            4 GÜN ÖNCE
                        </span>
                    </div>
                </div>
            </div>
        </article>
        <article className='bg-white rounded-xl p-3'>
            <div className='flex flex-col lg:flex-row'>
                <div className='basis-4/12 sm:basis-4/12 md:basis-5/12 lg:basis-5/12 xl:basis-4/12'>
                    <Link>
                        <img src={image} className="rounded-2xl h-full object-cover" alt=""/>
                    </Link>
                </div>
                <div className='basis-8/12 sm:basis-8/12 md:basis-7/12 lg:basis-7/12 xl:basis-8/12 md:pl-1 lg:pl-4 md:pr-1 sm:pr-4 lg:pr-2 space-y-3 py-1'>
                    <div className='text-left'>
                        <Link className='font-bold sm:font-bold xl:font-extrabold text-base sm:text-xl md:text-base lg:text-base line-clamp-3'>
                        Web3 oyun stüdyosu Mythical Games eski yöneticilerine adsadasdas adasdasdasdas asdasd
                        </Link>
                    </div>
                    <div className='hidden lg:flex space-x-5 font-semibold mr-auto'>
                        <span className='text-small text-gray-400'>
                            BY <Link className=' text-link'>Farhad Tashiri</Link>
                        </span>
                        <span className='text-small text-gray-400'>
                            4 GÜN ÖNCE
                        </span>
                    </div>
                </div>
            </div>
        </article>
        <article className='bg-white rounded-xl p-3'>
            <div className='flex flex-col lg:flex-row'>
                <div className='basis-4/12 sm:basis-4/12 md:basis-5/12 lg:basis-5/12 xl:basis-4/12'>
                    <Link>
                        <img src={image} className="rounded-2xl h-full object-cover" alt=""/>
                    </Link>
                </div>
                <div className='basis-8/12 sm:basis-8/12 md:basis-7/12 lg:basis-7/12 xl:basis-8/12 md:pl-1 lg:pl-4 md:pr-1 sm:pr-4 lg:pr-2 space-y-3 py-1'>
                    <div className='text-left'>
                        <Link className='font-bold sm:font-bold xl:font-extrabold text-base sm:text-xl md:text-base lg:text-base line-clamp-3'>
                        Web3 oyun stüdyosu Mythical Games eski yöneticilerine adsadasdas adasdasdasdas asdasd
                        </Link>
                    </div>
                    <div className='hidden lg:flex space-x-5 font-semibold mr-auto'>
                        <span className='text-small text-gray-400'>
                            BY <Link className=' text-link'>Farhad Tashiri</Link>
                        </span>
                        <span className='text-small text-gray-400'>
                            4 GÜN ÖNCE
                        </span>
                    </div>
                </div>
            </div>
        </article>
    </div>
  )
}

export default ContentRightSidebar