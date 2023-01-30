import React from 'react'
import {BiWorld} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/tr'
const LeftSidebar = () => {
  return (
    <div className='basis-2/12 flex-col sticky h-screen top-16 w-full space-y-5 py-4 px-1 order-last sm:order-1'>
        <div className='flex basis-1/12 bg-white rounded-2xl'>
            <div className='flex  p-3'>
                <div className='block text-left -space-y-3'>
                    <p className='text-day'>
                        {moment().format('dddd')}
                    </p>
                    <p className='text-h text-date font-bold'>{moment().format('D')}</p>
                    <p className='text-day'>
                        <strong>{moment().format('MMMM')}</strong>
                    </p>
                </div>
            </div>
            <div className='flex px-3 py-6'>
                <ul className='flex w-full'>
                    <li className='flex flex-col w-full'>
                        <div className='block text-day text-left'>
                            <p className=' text-price'>
                                Bitcoin
                            </p>
                            <p className=''>
                                345.323₺
                            </p>
                            <p className=''>
                                %0.65
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
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