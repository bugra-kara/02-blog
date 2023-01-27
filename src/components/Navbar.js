import React, {useEffect, useState} from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/koinbulteni_logo_1.png'
import {BsNewspaper, BsCurrencyBitcoin} from 'react-icons/bs'
import {TiImage, TiThLargeOutline} from 'react-icons/ti'
import {GiToken} from 'react-icons/gi'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'
import {RxHamburgerMenu} from 'react-icons/rx'
import {NavbarMobile} from '../components'
import { usePublicContext } from '../context/publicContext'
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)
  const [mobilNav, setMobilNav] = useState(false)
  const {getCategories, categories} = usePublicContext()
  useEffect(()=> {
    const getData = async () => {
      await getCategories()
  }
  getData()
  },[])
  return (
    <>
    {
      mobilNav 
      ?
      <NavbarMobile mobilNav={mobilNav} setMobilNav={setMobilNav}/>
      : ""
    }
    <div className='bg-white sticky top-0 z-40'>
      <div className='container w-full sm:justify-center flex flex-row h-16 py-2 px-4 sm:px-3 md:px-3 lg:px-9 xl:px-0 sm:space-x-3 md:space-x-0'>
        <div className='items-center basis-10/12 sm:basis-11/12 md:basis-9/12 xl:basis-8/12'>
          <ul className='content-between float-left flex sm:justify-center sm:items-center text-base sm:text-sm md:text-sm xl:text-base 2xl:text-base space-x-10 sm:space-x-1 md:space-x-3 lg:space-x-3 xl:space-x-10'>
            <li className='flex'>
              <div className='flex-auto'>
                <Link to='/'>
                  <img className='h-12 w-auto sm:h-10 md:h-12 lg:h-12 xl:h-16' src={Logo} alt="logo" />
                </Link>
              </div>
            </li>
            <li className='hidden sm:flex'>
              <div className="relative group p-3 lg:p-1">
                <div className="flex flex-row cursor-pointer  w-full font-bold focus:outline-none">
                  <div className='flex items-center lg:space-x-2 sm:space-x-1'>
                    <span><BsNewspaper/></span>
                    <span>Haberler</span>
                  </div>
                </div>
                <div className="absolute z-10 hidden group-hover:duration-500 group-hover:block bg-slate-900 rounded-md text-white mt-1">
                    <div className="p-5 space-y-4 w-56 lg:space-y-2 lg:p-5 lg:w-44 md:space-y-2 md:p-4 md:w-44 md:text-sm sm:p-2 sm:text-sm sm:space-y-2 sm:w-44">
                      {
                        categories?.map((item,index)=> {
                          return (
                                  <div key={index} className="grid grid-cols-1 gap-4 hover:text-sky-400">
                                    <Link to={`/kategori/${item.category_slug}`}>{item.category_name}</Link>
                                  </div>
                          )
                        })
                      }
                    </div>
                </div>
              </div>  
            </li>
            <li className='hidden sm:flex'>
                <Link to="#" className='flex items-center lg:space-x-2 sm:space-x-1'>
                    <span><TiImage/></span>
                    <span>NFT'ler</span>
                </Link>
            </li>
            <li className='hidden sm:flex'>
                <Link to="#" className='flex items-center lg:space-x-2 sm:space-x-1'>
                    <span><BsCurrencyBitcoin/></span>
                    <span>Koinler</span>
                </Link>
            </li>
            <li className='hidden sm:flex'>
                <Link to="#" className='flex items-center lg:space-x-2 sm:space-x-1'>
                    <span><GiToken/></span>
                    <span className=''>Koinb Token</span>
                </Link>
            </li>          
          </ul>
        </div>
        <div className='flex justify-end items-center place-content-center basis-2/12 sm:basis-1/12 md:basis-3/12 xl:basis-4/12'>
          <ul className='sm:content-between flex space-x-3 sm:space-x-2 md:space-x-3 lg:space-x-6'>
          <li className='hidden sm:hidden'>
            <div className="relative group">
              <button className=' flex items-center py-0.5 pl-8 sm:pl-4 md:pl-4 lg:pl-6 pr-2 rounded-md border-sky-400 border-2 md:border-1 bg-gray-100' onClick={()=>setDropdown(!dropdown)}>
                <span>0x...2619</span>
                <span className=' pl-4'><MdKeyboardArrowDown/></span>
              </button>
                {
                  dropdown ? <div className="absolute z-10 group rounded-md items-center text-sky-500 font-medium text-sm mt-3 w-full">
                    <div className='justify-center bg-gray-100 rounded-md border-2 border-sky-400'>
                      <Link className="py-1 border-b-2 border-b-sky-400 hover:bg-gray-200 cursor-pointer block">
                        <Link to="#">Puan: 2</Link>
                      </Link>
                      <Link className="py-1 border-b-2 border-b-sky-400 hover:bg-gray-200 cursor-pointer block">
                        <Link to="#">Profil</Link>
                      </Link>
                      <div className="py-1 hover:bg-gray-200 cursor-pointer block">
                        <button>Oturumu Kapat</button>
                      </div>
                    </div>
                </div> : ""
                }
              </div>
            </li>
            <li className='hidden lg:flex'>
              <div className='flex items-center relative '>
                <span className=' absolute right-4'><AiOutlineSearch className=' flex-row-reverse'/></span>
                <input type="search" className=' rounded-2xl pl-4 py-1 bg-slate-50' placeholder='Ara' name="" id="" />
              </div>
            </li>
            <li className='flex sm:hidden'>
              <div className='flex items-center relative '>
                <button className=''><RxHamburgerMenu className='h-6 w-6' onClick={()=> setMobilNav(!mobilNav)}/></button>
              </div>
            </li>
            <li className='flex lg:hidden'>
              <div className='flex items-center relative '>
                <button className=''><TiThLargeOutline className='h-6 w-6'/></button>
              </div>
            </li>
            <li className='hidden lg:hidden'>
              <button >
                <TiThLargeOutline/>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
      <Outlet/>
    </>
  )
}

export default Navbar