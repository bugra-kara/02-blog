import React from 'react'
import {BiWorld} from 'react-icons/bi'
import { Link } from 'react-router-dom'
const LeftSidebar = () => {
  return (
    <div className='basis-2/12 flex-col sticky h-screen top-16 w-full space-y-5 py-4 px-1 order-last sm:order-1'>
        <div className='flex basis-1/12 bg-white rounded-2xl'>
            <div className='flex  p-3'>
                <div className='block text-left -space-y-3'>
                    <p className='text-day'>
                        Pazartesi
                    </p>
                    <p className='text-h text-date font-bold'>16</p>
                    <p className='text-day'>
                        <strong>Ocak</strong>
                    </p>
                </div>
            </div>
            <div className='flex px-3 py-6'>
                <ul className='flex w-full'>
                    <li className='flex flex-col w-full'>
                        <div className='block text-day text-left'>
                            <p className=' text-price'>
                                KOINB
                            </p>
                            <p className=''>
                                12.02₺
                            </p>
                            <p className=''>
                                %0.65
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className='flex basis-5/12 bg-white rounded-2xl p-3 items-center'>
            <ul className='flex flex-col text-day text-left w-full space-y-5'>
                <li className='flex group'>
                <Link to="#" className='flex w-full items-center left-0 space-x-2'>
                    <div className='flex'>
                        <span className='flex bg-slate-400 bg-opacity-20 group-hover:bg-icon-bg group-hover:text-white duration-200 self-center p-1 rounded-md text-gray-500'>
                            <BiWorld/>
                        </span>
                    </div>
                    <div className='flex text-sm'>
                        Öne Çıkanlar
                    </div>
                </Link>
                </li>
                <li className='flex group'>
                <Link to="#" className='flex w-full items-center left-0 space-x-2'>
                    <div className='flex'>
                        <span className='flex bg-slate-400 bg-opacity-20 group-hover:bg-icon-bg group-hover:text-white duration-200 self-center p-1 rounded-md text-gray-500'>
                            <BiWorld/>
                        </span>
                    </div>
                    <div className='flex text-sm'>
                        Bicoin
                    </div>
                </Link>
                </li>
                <li className='flex group'>
                <Link to="#" className='flex w-full items-center left-0 space-x-2'>
                    <div className='flex'>
                        <span className='flex bg-slate-400 bg-opacity-20 group-hover:bg-icon-bg group-hover:text-white duration-200 self-center p-1 rounded-md text-gray-500'>
                            <BiWorld/>
                        </span>
                    </div>
                    <div className='flex text-sm'>
                        Ethereum
                    </div>
                </Link>
                </li>
                <li className='flex group'>
                <Link to="#" className='flex w-full items-center left-0 space-x-2'>
                    <div className='flex'>
                        <span className='flex bg-slate-400 bg-opacity-20 group-hover:bg-icon-bg group-hover:text-white duration-200 self-center p-1 rounded-md text-gray-500'>
                            <BiWorld/>
                        </span>
                    </div>
                    <div className='flex text-sm'>
                        Dogecoin
                    </div>
                </Link>
                </li>
                <li className='flex group'>
                <Link to="#" className='flex w-full items-center left-0 space-x-2'>
                    <div className='flex'>
                        <span className='flex bg-slate-400 bg-opacity-20 group-hover:bg-icon-bg group-hover:text-white duration-200 self-center p-1 rounded-md text-gray-500'>
                            <BiWorld/>
                        </span>
                    </div>
                    <div className='flex text-sm'>
                        Altcoin
                    </div>
                </Link>
                </li>
                <li className='flex group'>
                <Link to="#" className='flex w-full items-center left-0 space-x-2'>
                    <div className='flex'>
                        <span className='flex bg-slate-400 bg-opacity-20 group-hover:bg-icon-bg group-hover:text-white duration-200 self-center p-1 rounded-md text-gray-500'>
                            <BiWorld/>
                        </span>
                    </div>
                    <div className='flex text-sm'>
                        Blockchain
                    </div>
                </Link>
                </li>
                <li className='flex group'>
                <Link to="#" className='flex w-full items-center left-0 space-x-2'>
                    <div className='flex'>
                        <span className='flex bg-slate-400 bg-opacity-20 group-hover:bg-icon-bg group-hover:text-white duration-200 self-center p-1 rounded-md text-gray-500'>
                            <BiWorld/>
                        </span>
                    </div>
                    <div className='flex text-sm'>
                        NFT
                    </div>
                </Link>
                </li>
                <li className='flex group'>
                <Link to="#" className='flex w-full items-center left-0 space-x-2'>
                    <div className='flex'>
                        <span className='flex bg-slate-400 bg-opacity-20 group-hover:bg-icon-bg group-hover:text-white duration-200 self-center p-1 rounded-md text-gray-500'>
                            <BiWorld/>
                        </span>
                    </div>
                    <div className='flex text-sm'>
                        Metaverse
                    </div>
                </Link>
                </li>
                <li className='flex group'>
                <Link to="#" className='flex w-full items-center left-0 space-x-2'>
                    <div className='flex'>
                        <span className='flex bg-slate-400 bg-opacity-20 group-hover:bg-icon-bg group-hover:text-white duration-200 self-center p-1 rounded-md text-gray-500'>
                            <BiWorld/>
                        </span>
                    </div>
                    <div className='flex text-sm'>
                        DeFi
                    </div>
                </Link>
                </li>
            </ul>
        </div>
        <div className='block basis-4/12 bg-white rounded-2xl p-3 space-y-3'>
            <div className='w-full text-left'>
                <h5 className='text-h text-lg font-extrabold'>Piyasa</h5>
            </div>
            <ul className='space-y-3 cursor-default'>
                <li className='flex flex-row group text-day items-center'>
                    <div className='flex basis-1/2 font-semibold'>
                        <span className='group-hover:text-ah'>KOINB</span>
                    </div>
                    <div className='flex flex-col basis-1/2 place-items-end'>
                        <span className='flex font-extrabold group-hover:text-ah'>
                        11.86₺    
                        </span>
                        <span className='flex text-price'>
                        %0.41
                        </span>
                    </div>
                </li>
                <li className='flex flex-row group text-day items-center'>
                    <div className='flex basis-1/2 font-semibold'>
                        <span className='group-hover:text-ah'>LTC</span>
                    </div>
                    <div className='flex flex-col basis-1/2 place-items-end'>
                        <span className='flex font-extrabold group-hover:text-ah'>
                        1647.99₺    
                        </span>
                        <span className='flex text-danger'>
                        %-0.41
                        </span>
                    </div>
                </li>
                <li className='flex flex-row group text-day items-center'>
                    <div className='flex basis-1/2 font-semibold'>
                        <span className='group-hover:text-ah'>XRP</span>
                    </div>
                    <div className='flex flex-col basis-1/2 place-items-end'>
                        <span className='flex font-extrabold group-hover:text-ah'>
                        11.86₺    
                        </span>
                        <span className='flex text-price'>
                        %-0.41
                        </span>
                    </div>
                </li>
                <li className='flex flex-row group text-day items-center'>
                    <div className='flex basis-1/2 font-semibold'>
                        <span className='group-hover:text-ah'>LINK</span>
                    </div>
                    <div className='flex flex-col basis-1/2 place-items-end'>
                        <span className='flex font-extrabold group-hover:text-ah'>
                        11.86₺    
                        </span>
                        <span className='flex text-price'>
                        %-0.41
                        </span>
                    </div>
                </li>
                <li className='flex flex-row group text-day items-center'>
                    <div className='flex basis-1/2 font-semibold'>
                        <span className='group-hover:text-ah'>NEO</span>
                    </div>
                    <div className='flex flex-col basis-1/2 place-items-end'>
                        <span className='flex font-extrabold group-hover:text-ah'>
                        11.86₺    
                        </span>
                        <span className='flex text-price'>
                        %-0.41
                        </span>
                    </div>
                </li>
                <li className='flex flex-row group text-day items-center'>
                    <div className='flex basis-1/2 font-semibold'>
                        <span className='group-hover:text-ah'>GOLDP</span>
                    </div>
                    <div className='flex flex-col basis-1/2 place-items-end'>
                        <span className='flex font-extrabold group-hover:text-ah'>
                        11.86₺    
                        </span>
                        <span className='flex text-price'>
                        %-0.41
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default LeftSidebar