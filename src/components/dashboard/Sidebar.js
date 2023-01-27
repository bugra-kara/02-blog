import React from 'react'
import { Outlet } from 'react-router'
import Logo from '../../assets/images/koinbulteni_logo_1.png'
import ProfilePhoto from '../../assets//images/IMG_0583.JPG'
import { BsPlusLg, BsFilePost} from 'react-icons/bs'
import { AiOutlineDashboard, AiFillTag } from 'react-icons/ai'
import { BiCategory } from 'react-icons/bi'
import { FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className='flex flex-row'>
      <div className='basis-3/12 xl:basis-2/12 sticky bg-slate-800 float-left'>
      <div className='flex flex-col h-screen space-y-3'>
        {/* first section */}
        <div className='flex basis-1/12 justify-center shadow-lg px-4 py-2 w-full'>
          <img src={Logo} className="h-10 self-center" alt="" />
        </div>
        {/* second section */}
        <div className='float-left basis-1/12 h-full px-4 py-2 space-y-2 w-full cursor-default'>
          <div className='text-left'>
            <span className=' text-gray-500 font-semibold text-day'>Profil</span>
          </div>
          <div className='flex flex-row space-x-3 items-center'>
            <img className=' rounded-full h-10 w-10 object-cover shadow-sm' src={ProfilePhoto} alt="" />
            <span className='text-left text-day text-slate-200 font-extrabold'>
              Ahmet Buğra Kara
            </span>
          </div>
          <div className='flex flex-row w-full pt-3'>
            <div className='flex-col basis-3/12 text-small leading-4 border-r-2 border-r-slate-700'>
              <span className='flex text-slate-200 font-semibold'>
                302 
              </span>
              <span className='flex text-gray-500 font-bold'>
                Total
              </span>
            </div>
            <div className='flex-col basis-4/12 text-small leading-4 pl-2 border-r-2 border-r-slate-700'>
              <span className='flex text-slate-200 font-semibold'>
                302 
              </span>
              <span className='flex text-gray-500 font-bold'>
                Bugün
              </span>
            </div>
            <div className='flex-col basis-4/12 text-small leading-4 pl-2'>
              <span className='flex text-slate-200 font-semibold'>
                302 
              </span>
              <span className='flex text-gray-500 font-bold'>
                Son 1 Ay
              </span>
            </div>
          </div>
          <div className=' pt-3'>
            <Link to='/dashboard/create-post' className='w-full rounded-sm bg-kb hover:bg-kb-hover hover:ease-linear hover:duration-200 ease-out duration-200 flex justify-center place-items-center text-white py-1 font-semibold text-sm space-x-2 shadow-md'>
            <BsPlusLg/>
            <span>Yeni Post</span>
            </Link>
          </div>
          <div className=' pt-3'>
            <hr className=' border-text-gray border-opacity-50 border rounded-lg'/>
          </div>
        </div>
        {/* third section */}
        <div className='flex px-2 py-2 basis-9/12'>
          <ul className=' text-left space-y-3 text-sm text-slate-300 w-full cursor-pointer'>
            <Link to="/dashboard">
            <li className='px-2 py-1 my-2 active:bg-h flex space-x-1 place-items-center hover:bg-h hover:shadow-xl ease-out duration-200 hover:ease-linear hover:duration-200 rounded-lg'>
              <AiOutlineDashboard className=' h-5'/>
              <span className=' flex'>
                <p className='pt-0.5'>Dashboard</p>
              </span> 
            </li>
            </Link>
            <Link to="/dashboard/posts">
              <li className='px-2 py-1 my-2 active:bg-h flex space-x-1 place-items-center hover:bg-h hover:shadow-xl ease-out duration-200 hover:ease-linear hover:duration-200 rounded-lg'>
                <BsFilePost className=' h-5'/>
                <span className=' flex'>
                  <p className='pt-0.5'>Posts</p>
                </span> 
              </li>
            </Link>
            <Link to="/dashboard/categories">
              <li className='px-2 py-1 my-2 active:bg-h flex space-x-1 place-items-center hover:bg-h hover:shadow-xl ease-out duration-200 hover:ease-linear hover:duration-200 rounded-lg'>
                <BiCategory className=' h-5'/>
                <span className=' flex'>
                  <p className='pt-0.5'>Categories</p>
                </span> 
              </li>
            </Link>
            <Link to="/dashboard/tags">
              <li className='px-2 py-1 my-2 active:bg-h flex space-x-1 place-items-center hover:bg-h hover:shadow-xl ease-out duration-200 hover:ease-linear hover:duration-200 rounded-lg'>
                <AiFillTag className=' h-5'/>
                <span className=' flex'>
                  <p className='pt-0.5'>Tags</p>
                </span> 
              </li>
            </Link>
            <Link to="/dashboard/users">
              <li className='px-2 py-1 my-2 active:bg-h flex space-x-1 place-items-center hover:bg-h hover:shadow-xl ease-out duration-200 hover:ease-linear hover:duration-200 rounded-lg'>
                <FaUsers className=' h-5'/>
                <span className=' flex'>
                  <p className='pt-0.5'>Users</p>
                </span> 
              </li>
            </Link>
          </ul>
          
        </div>
        {/* forth section */}
        <div className='px-2 py-2 w-full cursor-pointer basis-1/12 space-y-3 text-slate-200'>
          <div className='px-2'>
            <hr className=' border-text-gray border-opacity-50 border rounded-lg'/>
          </div>
          <div className='px-2 py-1 justify-center active:bg-h flex space-x-1 place-items-center hover:bg-h hover:shadow-xl ease-out duration-200 hover:ease-linear hover:duration-200 rounded-lg'>
            <FaUsers className=' h-5'/>
            <span className=' flex'>
              <p className='pt-0.5'>Logout</p>
            </span> 
          </div>
        </div>
      </div>
    </div>
    <div className='basis-9/12 xl:basis-10/12 float-left overflow-y-auto bg-zinc-200'>
      <Outlet/>
    </div>
    </div>
  )
}

export default Sidebar