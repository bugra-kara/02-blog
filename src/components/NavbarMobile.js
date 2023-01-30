import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/koinbulteni_logo_1.png'
import {TfiFacebook} from 'react-icons/tfi'
import {SiTwitter} from 'react-icons/si'
import {FaTelegramPlane} from 'react-icons/fa'
import {AiFillYoutube, AiFillInstagram} from 'react-icons/ai'
import {MdKeyboardArrowDown, MdClose} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'
const NavbarMobile = ({setMobilNav, mobilNav, categories}) => {
  const [mobilDropdown, setMobilDropdown] = useState(false)
  return (
    <>
        <div className='bg-slate-900 z-50 fixed h-full overflow-y-auto container flex flex-col p-7 space-y-7'>
        <div className='flex-row-reverse flex'>
        <button className='w-max' onClick={()=> setMobilNav(!mobilNav)}>
          <MdClose className='text-white h-5 w-5' />
        </button>
        </div>
        <div className='flex items-center place-content-center'>
        <Link to='/'>
          <img className='h-20 w-auto' src={Logo} alt="logo" />
        </Link>
        </div>
        <ul className='flex flex-col items-start text-white space-y-3 font-medium'>
          <li className='flex flex-row w-full'>
              <span>Haberler</span>
              <div className='w-full flex flex-row-reverse items-center'>
                <button className='flex'><MdKeyboardArrowDown className='h-6 w-6 rounded-md bg-slate-200 text-black' onClick={()=> setMobilDropdown(!mobilDropdown)}/></button>
              </div>
          </li>
          {
                mobilDropdown 
                ? <li className='flex flex-row w-full'>
                    <div className='block items-start float-left text-left ml-4 space-y-2'>
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
                  </li>
                : ""
              }
          <li className='flex w-full'>NFT'ler</li>
          <li className='flex w-full'>Koinler</li>
          <li className='flex w-full'>KOINB Token</li>
        </ul>
        <div className='flex items-center relative w-full '>
          <span className='absolute right-4'><AiOutlineSearch className=' flex-row-reverse'/></span>
          <input type="search" className='w-full rounded-2xl pl-4 py-1 bg-slate-50' placeholder='Ara' name="" id="" />
        </div>
        <div className='flex justify-center w-full'>
          <ul className='flex flex-row text-white space-x-7'>
            <li><SiTwitter/></li>
            <li><FaTelegramPlane/></li>
            <li><AiFillYoutube/></li>
            <li><AiFillInstagram/></li>
            <li><TfiFacebook/></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavbarMobile