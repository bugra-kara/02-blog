import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillEye, AiFillHeart} from 'react-icons/ai'
import image from '../assets/images/bitcoin-86.jpg'
import {FaComment} from 'react-icons/fa'

const AuthorMiddle = () => {
  return (
    <div className='flex basis-7/12 sm:basis-10/12 lg:basis-7/12 flex-col py-4 px-0 space-y-8 order-1 sm:order-2'>
        <div className='flex flex-col w-full px-3 pt-3 pb-6 bg-white rounded-xl'>
            <div className='sm:flex'>
            <Link>
                <img src={image} className="rounded-2xl" alt=""/>
            </Link>
            </div>
            <div className='flex row px-2 pb-2 sm:pb-2 md:pb-4 pt-3 sm:pt-3 md:pt-5 lg:pt-7'>
            <div className='flex basis-1/2 items-center'>
                <span className=' rounded-2xl bg-kb bg-opacity-20 text-kb text-xsx font-bold px-2 py-0.5 sm:px-1.5 sm:py-0.5 md:px-2 md:py-0.5'>
                DOGECOIN, METAVERSE
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
                <Link className='font-extrabold hover:text-kb sm:font-bold xl:font-extrabold text-xl sm:text-sm lg:text-xlx'>
                Bitcoin ve Altcoinler Ne Durumda: Piyasalara Genel Bakış (7 Kasım)
                </Link>
            </div>
            <div className='flex px-2 pt-3 sm:pt-2 md:pt-2 lg:pt-3 space-x-5 font-semibold mr-auto'>
                <span className='text-small text-gray-400'>
                    BY <Link className=' text-link'>Farhad Tashiri</Link>
                </span>
                <span className='text-small text-gray-400'>
                    4 GÜN ÖNCE
                </span>
            </div>
        </div>
        <aside>
            <div className='grid grid-flow-row grid-row-1 gap-8'>
                <article className='flex flex-row space-x-1 md:space-x-3 items-center rounded-xl bg-white p-2'>
                    <div className=' basis-4/12'>
                        <Link>
                            <img src={image} className="rounded-2xl h-32 md:h-56 object-cover" alt=""/>
                        </Link>
                    </div>
                    <div className='basis-8/12 space-y-3 md:space-y-4'>
                        <div className='text-left px-2 space-x-2 text-ah uppercase font-extrabold text-small sm:text-xs'>
                            <Link>
                                <span className=' '>
                                    nft
                                </span>
                            </Link>
                            <Link>
                                <span className=' '>
                                    BLOCKCHAIN
                                </span>
                            </Link>
                            <Link>
                                <span className=' '>
                                    bitcoin
                                </span>
                            </Link>
                        </div>
                        <div className='flex w-full text-left pl-2 pr-0.5'>
                            <Link className='font-bold hover:text-kb sm:font-bold xl:font-extrabold text-lg md:text-xlx'>
                            Web3 oyun stüdyosu Mythical Games’ten eski yöneticilerine...
                            </Link>
                        </div>
                        <div className='hidden md:block w-full text-left px-2'>
                            <p className='line-clamp-4 text-card-gray font-semibold text-sm'>
                            ABD Menkul Kıymetler ve Borsa Komisyonu (SEC) İnternet Uygulama Ofisi'nin eski başkanı John Reed Stark, Bitcoin'in (BTC) henüz SEC'ye kaydedilmemiş bir menkul kıymet olduğunu öne sürdü.
                            </p>
                        </div>
                        <div className='flex px-2'>
                            <div className='flex space-x-5 sm:space-x-4 md:space-x-7 text-xs sm:text-xsx md:text-xs font-bold items-center'>
                                <div className='flex md:hidden space-x-5 font-semibold mr-auto'>
                                <span className='text-small text-gray-400'>
                                    BY <Link className=' text-link'>Farhad Tashiri</Link>
                                </span>
                                <span className='text-small text-gray-400'>
                                    4 GÜN ÖNCE
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className='flex flex-row space-x-1 md:space-x-3 items-center rounded-xl bg-white p-2'>
                    <div className=' basis-4/12'>
                        <Link>
                            <img src={image} className="rounded-2xl h-32 md:h-56 object-cover" alt=""/>
                        </Link>
                    </div>
                    <div className='basis-8/12 space-y-3 md:space-y-4'>
                        <div className='text-left px-2 space-x-2 text-ah uppercase font-extrabold text-small sm:text-xs'>
                            <Link>
                                <span className=' '>
                                    nft
                                </span>
                            </Link>
                            <Link>
                                <span className=' '>
                                    BLOCKCHAIN
                                </span>
                            </Link>
                            <Link>
                                <span className=' '>
                                    bitcoin
                                </span>
                            </Link>
                        </div>
                        <div className='flex w-full text-left pl-2 pr-0.5'>
                            <Link className='font-bold hover:text-kb sm:font-bold xl:font-extrabold text-lg md:text-xlx'>
                            Web3 oyun stüdyosu Mythical Games’ten eski yöneticilerine...
                            </Link>
                        </div>
                        <div className='hidden md:block w-full text-left px-2'>
                            <p className='line-clamp-4 text-card-gray font-semibold text-sm'>
                            ABD Menkul Kıymetler ve Borsa Komisyonu (SEC) İnternet Uygulama Ofisi'nin eski başkanı John Reed Stark, Bitcoin'in (BTC) henüz SEC'ye kaydedilmemiş bir menkul kıymet olduğunu öne sürdü.
                            </p>
                        </div>
                        <div className='flex px-2'>
                            <div className='flex space-x-5 sm:space-x-4 md:space-x-7 text-xs sm:text-xsx md:text-xs font-bold items-center'>
                                <div className='flex md:hidden space-x-5 font-semibold mr-auto'>
                                <span className='text-small text-gray-400'>
                                    BY <Link className=' text-link'>Farhad Tashiri</Link>
                                </span>
                                <span className='text-small text-gray-400'>
                                    4 GÜN ÖNCE
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className='flex flex-row space-x-1 md:space-x-3 items-center rounded-xl bg-white p-2'>
                    <div className=' basis-4/12'>
                        <Link>
                            <img src={image} className="rounded-2xl h-32 md:h-56 object-cover" alt=""/>
                        </Link>
                    </div>
                    <div className='basis-8/12 space-y-3 md:space-y-4'>
                        <div className='text-left px-2 space-x-2 text-ah uppercase font-extrabold text-small sm:text-xs'>
                            <Link>
                                <span className=' '>
                                    nft
                                </span>
                            </Link>
                            <Link>
                                <span className=' '>
                                    BLOCKCHAIN
                                </span>
                            </Link>
                            <Link>
                                <span className=' '>
                                    bitcoin
                                </span>
                            </Link>
                        </div>
                        <div className='flex w-full text-left pl-2 pr-0.5'>
                            <Link className='font-bold hover:text-kb sm:font-bold xl:font-extrabold text-lg md:text-xlx'>
                            Web3 oyun stüdyosu Mythical Games’ten eski yöneticilerine...
                            </Link>
                        </div>
                        <div className='hidden md:block w-full text-left px-2'>
                            <p className='line-clamp-4 text-card-gray font-semibold text-sm'>
                            ABD Menkul Kıymetler ve Borsa Komisyonu (SEC) İnternet Uygulama Ofisi'nin eski başkanı John Reed Stark, Bitcoin'in (BTC) henüz SEC'ye kaydedilmemiş bir menkul kıymet olduğunu öne sürdü.
                            </p>
                        </div>
                        <div className='flex px-2'>
                            <div className='flex space-x-5 sm:space-x-4 md:space-x-7 text-xs sm:text-xsx md:text-xs font-bold items-center'>
                                <div className='flex md:hidden space-x-5 font-semibold mr-auto'>
                                <span className='text-small text-gray-400'>
                                    BY <Link className=' text-link'>Farhad Tashiri</Link>
                                </span>
                                <span className='text-small text-gray-400'>
                                    4 GÜN ÖNCE
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </aside>
    </div>
  )
}

export default AuthorMiddle