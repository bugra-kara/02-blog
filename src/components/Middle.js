import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/images/bitcoin-86.jpg'
import {AiFillEye, AiFillHeart} from 'react-icons/ai'
import {FaComment} from 'react-icons/fa'
import { usePublicContext } from '../context/publicContext'
import moment from 'moment'
import 'moment/locale/tr'
const Middle = () => {
    const {middleFirst, middleThird, middleFourth} = usePublicContext()
  return (
    <div className='flex basis-7/12 sm:basis-10/12 lg:basis-7/12 flex-col py-4 px-0 space-y-8 order-1 sm:order-2'>
        <section className='space-y-5'>
            <div className=' text-h font-bold text-left'>
                <h5 className=' text-xl'>
                <span className=' font-black'>Son</span> Haberler
                </h5>
            </div>
            <div className='flex flex-col w-full px-3 pt-3 pb-6 bg-white rounded-xl'>
                <div className='sm:flex'>
                <Link to={`/${middleFirst[0].slug}`}>
                    <img src={middleFirst[0]?.image_url} className="rounded-2xl" alt=""/>
                </Link>
                </div>
                <div className='flex row px-2 pb-2 md:pb-3 pt-4 sm:pt-3 md:pt-4 lg:pt-5'>
                <div className='flex basis-1/2 items-center'>
                    <span className=' rounded-2xl bg-kb bg-opacity-20 text-kb text-xsx font-bold px-2 py-0.5 sm:px-1.5 sm:py-0.5 md:px-2 md:py-0.5'>
                    {middleFirst[0]?.categories.map((item, index)=>{return index < middleFirst[0].categories.length - 1 ? `${item}, ` : `${item}`})}
                    </span>
                </div>
                <div className='hidden sm:flex flex-row-reverse basis-1/2'>
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
                    <Link to={middleFirst[0]?.slug} className='font-extrabold hover:text-kb line-clamp-2 sm:line-clamp-none text-lg sm:text-xlg lg:text-xlx'>
                    {middleFirst[0]?.title}
                    </Link>
                </div>
                <div className='flex px-2 pt-3 sm:pt-2 md:pt-2 lg:pt-3 space-x-5 font-semibold mr-auto'>
                    <span className='text-small text-gray-400'>
                        BY <Link className=' text-link'>{middleFirst[0]?.fullname}</Link>
                    </span>
                    <span className='text-small text-gray-400'>
                        {moment(middleFirst[0]?.created_date).fromNow()}
                    </span>
                </div>
            </div>
            {
                middleFirst?.map((item,index)=> {
                    return index !== 0
                    ?
                    <article key={index} className='bg-white rounded-xl p-3 w-full'>
                        <div className='flex flex-row'>
                            <div className='basis-auto w-full sm:w-auto text-left sm:basis-4/12 md:basis-5/12 lg:basis-4/12 xl:basis-3/12'>
                                <Link to={item.slug} className=''>
                                    <img src={item.image_url} className="rounded-2xl h-36 object-cover" alt=""/>
                                </Link>
                            </div>
                            <div className='basis-auto w-full sm:w-auto sm:basis-8/12 md:basis-7/12 lg:basis-9/12 pl-4 pr-2 sm:pr-4 space-y-1 sm:space-y-3 py-3'>
                                <div className='text-left space-x-2 text-ah uppercase font-extrabold text-small sm:text-xs'>
                                {
                                    item.categories.map((item, index2)=> {return (
                                            <Link key={index2} >
                                                <span className='uppercase'>
                                                    {item}
                                                </span>
                                            </Link>
                                    )})
                                }
                                </div>
                                <div className='flex w-full text-left'>
                                    <Link to={item.slug} className='font-bold sm:font-bold line-clamp-3 sm:line-clamp-none xl:font-extrabold text-base sm:text-xl lg:text-lg xl:text-xlx'>
                                    {item.title}
                                    </Link>
                                </div>
                                <div className='hidden sm:flex space-x-5 font-semibold mr-auto'>
                                    <span className='text-small text-gray-400'>
                                        BY <Link className=' text-link'>{item.fullname}</Link>
                                    </span>
                                    <span className='text-small text-gray-400'>
                                        {moment(item?.created_date).fromNow()}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </article>
                    : ""
                })
            }
        </section>
        {/*<section className='space-y-5'>
                    <div className=' text-h font-bold text-left'>
                        <h5 className=' text-xl'>
                        <span className=' font-black'>Öne Çıkanlar</span>
                        </h5>
                    </div>
                    <div className='flex flex-col sm:flex-row space-y-8 sm:space-x-8 sm:space-y-0'>
                        <div className='flex flex-col basis-1/2 space-y-4 rounded-xl bg-white p-2'>
                            <div>
                                <Link>
                                    <img src={image} className="rounded-2xl" alt=""/>
                                </Link>
                            </div>
                            <div className='flex w-full text-left px-2'>
                                <Link className='font-bold hover:text-kb sm:font-bold xl:font-extrabold text-xl sm:text-sm lg:text-xlx'>
                                Web3 oyun stüdyosu Mythical Games’ten eski yöneticilerine...
                                </Link>
                            </div>
                            <div className='flex px-2'>
                                <div className='flex space-x-5 sm:space-x-4 md:space-x-7 text-xs sm:text-xsx md:text-xs font-bold items-center'>
                                <div className='flex text-gray-400 space-x-1 sm:space-x-1 md:space-x-2 items-center'>
                                    <span>
                                    <AiFillEye/>
                                    </span>
                                    <span>
                                    151
                                    </span>
                                </div>
                                <div className='flex text-gray-400 space-x-1 sm:space-x-1 md:space-x-2 items-center'>
                                    <span>
                                    <FaComment/>
                                    </span>
                                    <span>
                                    2
                                    </span>
                                </div>
                                <div className='flex text-gray-400 space-x-1 sm:space-x-1 md:space-x-2 items-center'>
                                    <span>
                                    <AiFillHeart/>
                                    </span>
                                    <span>
                                    5
                                    </span>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col basis-1/2 space-y-4 rounded-xl bg-white p-2'>
                            <div>
                                <Link>
                                    <img src={image} className="rounded-2xl" alt=""/>
                                </Link>
                            </div>
                            <div className='flex w-full text-left px-2'>
                                <Link className='font-bold hover:text-kb sm:font-bold xl:font-extrabold text-xl sm:text-sm lg:text-xlx'>
                                Web3 oyun stüdyosu Mythical Games’ten eski yöneticilerine...
                                </Link>
                            </div>
                            <div className='flex px-2'>
                                <div className='flex space-x-5 sm:space-x-4 md:space-x-7 text-xs sm:text-xsx md:text-xs font-bold items-center'>
                                <div className='flex text-gray-400 space-x-1 sm:space-x-1 md:space-x-2 items-center'>
                                    <span>
                                    <AiFillEye/>
                                    </span>
                                    <span>
                                    151
                                    </span>
                                </div>
                                <div className='flex text-gray-400 space-x-1 sm:space-x-1 md:space-x-2 items-center'>
                                    <span>
                                    <FaComment/>
                                    </span>
                                    <span>
                                    2
                                    </span>
                                </div>
                                <div className='flex text-gray-400 space-x-1 sm:space-x-1 md:space-x-2 items-center'>
                                    <span>
                                    <AiFillHeart/>
                                    </span>
                                    <span>
                                    5
                                    </span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <button className='py-1 px-5 rounded-md border text-link hover:text-kb border-link hover:border-kb font-bold text-sm'>Tümü</button>
                    </div>
        </section>*/}
        <section className='space-y-5'>
            <div className='text-h font-bold text-left'>
                <h5 className='text-xl'>
                <span className='font-black'>Bitcoin</span>
                </h5>
            </div>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 '>
                {
                    middleThird?.map((item, index)=> {
                        return (
                            <div key={index} className='flex flex-col basis-1/2 space-y-4 rounded-xl bg-white p-2'>
                                <div>
                                    <Link to={item.slug}>
                                        <img src={item.image_url} className="rounded-2xl h-40 w-full lg:max-h-44 object-cover object-center" alt=""/>
                                    </Link>
                                </div>
                                <div className='flex w-full text-left px-2'>
                                    <Link to={item.slug} className='font-extrabold hover:text-kb line-clamp-2 lg:line-clamp-none xl:text-lg'>
                                    {item.title}
                                    </Link>
                                </div>
                                <div className='flex px-2'>
                                    <div className='flex space-x-5 sm:space-x-4 md:space-x-7 text-xs sm:text-xsx md:text-xs font-bold items-center'>
                                    <div className='flex text-gray-400 space-x-1 sm:space-x-1 md:space-x-2 items-center'>
                                        <span>
                                        <AiFillEye/>
                                        </span>
                                        <span>
                                        151
                                        </span>
                                    </div>
                                    <div className='flex text-gray-400 space-x-1 sm:space-x-1 md:space-x-2 items-center'>
                                        <span>
                                        <FaComment/>
                                        </span>
                                        <span>
                                        2
                                        </span>
                                    </div>
                                    <div className='flex text-gray-400 space-x-1 sm:space-x-1 md:space-x-2 items-center'>
                                        <span>
                                        <AiFillHeart/>
                                        </span>
                                        <span>
                                        5
                                        </span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex justify-end'>
                <button className='py-1 px-5 rounded-md border text-link hover:text-kb border-link hover:border-kb font-bold text-sm'>Tümü</button>
            </div>
        </section>
        <section className='space-y-5'>
                    <div className=' text-h font-bold text-left'>
                        <h5 className=' text-xl'>
                        <span className=' font-black'>Diğer Haberler</span>
                        </h5>
                    </div>
                     {
                        middleFourth?.map((item, index)=> {
                            return (
                                    <article key={index} className='bg-white rounded-xl p-3 w-full'>
                                        <div className='flex flex-row'>
                                            <div className='basis-auto w-full sm:w-auto text-left sm:basis-4/12 md:basis-5/12 lg:basis-4/12 xl:basis-3/12'>
                                                <Link to={item.slug} className=''>
                                                    <img src={item.image_url} className="rounded-2xl h-36 object-cover" alt=""/>
                                                </Link>
                                            </div>
                                            <div className='basis-auto w-full sm:w-auto sm:basis-8/12 md:basis-7/12 lg:basis-9/12 pl-4 pr-2 sm:pr-4  space-y-3 py-3'>
                                                <div className='text-left space-x-2 text-ah uppercase font-extrabold text-small sm:text-xs'>
                                                {
                                                    item.categories.map((item,index2)=>{return (
                                                        <Link key={index2}>
                                                            <span className='uppercase'>
                                                                {item}
                                                            </span>
                                                        </Link>
                                                    )})
                                                }
                                                </div>
                                                <div className='flex w-full text-left'>
                                                    <Link to={item.slug} className='font-bold sm:font-bold xl:font-extrabold text-base sm:text-xl lg:text-xlx'>
                                                    {item.title}
                                                    </Link>
                                                </div>
                                                <div className='hidden sm:flex space-x-5 font-semibold mr-auto'>
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
                            )
                        })
                     }
        </section>
        {/* 
        <section className='hidden sm:flex lg:hidden flex-col space-y-5 float-left'>
                    <div className=' text-h font-bold text-left'>
                        <h5 className=' text-xl'>
                        <span className=' font-black'>En Çok</span> Okunanlar
                        </h5>
                    </div>
                    <div className='flex flex-col p-5 space-y-3 bg-white rounded-xl items-center text-left'>
                        <div className='flex'>
                        <Link>
                            <img src={image} className="rounded-2xl" alt=""/>
                        </Link>
                        </div>
                        <div className='flex'>
                            <Link className='font-black hover:text-kb text-most sm:font-bold'>
                            FTX Kurucusu SBF İflas Konusunda Binance CEO’su CZ’yi Suçladı: Kimsenin Parasını Çalmadım
                            </Link>
                        </div>
                        <div className='flex space-x-5 font-semibold mr-auto'>
                            <span className='text-small text-gray-400'>
                                BY <Link className=' text-link'>Farhad Tashiri</Link>
                            </span>
                            <span className='text-small text-gray-400'>
                                4 GÜN ÖNCE
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col p-5 space-y-3 bg-white rounded-xl items-center text-left'>
                        <div className='flex'>
                        <Link>
                            <img src={image} className="rounded-2xl" alt=""/>
                        </Link>
                        </div>
                        <div className='flex'>
                            <Link className='font-black hover:text-kb text-most sm:font-bold'>
                            FTX Kurucusu SBF İflas Konusunda Binance CEO’su CZ’yi Suçladı: Kimsenin Parasını Çalmadım
                            </Link>
                        </div>
                        <div className='flex space-x-5 font-semibold mr-auto'>
                            <span className='text-small text-gray-400'>
                                BY <Link className=' text-link'>Farhad Tashiri</Link>
                            </span>
                            <span className='text-small text-gray-400'>
                                4 GÜN ÖNCE
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col p-5 space-y-3 bg-white rounded-xl items-center text-left'>
                        <div className='flex'>
                        <Link>
                            <img src={image} className="rounded-2xl" alt=""/>
                        </Link>
                        </div>
                        <div className='flex'>
                            <Link className='font-black hover:text-kb text-most sm:font-bold'>
                            FTX Kurucusu SBF İflas Konusunda Binance CEO’su CZ’yi Suçladı: Kimsenin Parasını Çalmadım
                            </Link>
                        </div>
                        <div className='flex space-x-5 font-semibold mr-auto'>
                            <span className='text-small text-gray-400'>
                                BY <Link className=' text-link'>Farhad Tashiri</Link>
                            </span>
                            <span className='text-small text-gray-400'>
                                4 GÜN ÖNCE
                            </span>
                        </div>
                    </div>
        </section>
        */}
    </div>
  )
}

export default Middle