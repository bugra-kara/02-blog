import React, { useState } from 'react'
import { FaUsers } from 'react-icons/fa'
import { Link, Navigate, redirect } from 'react-router-dom'
import { RiDraftFill } from 'react-icons/ri'
import { FaComment } from 'react-icons/fa'
import { BiNews } from 'react-icons/bi'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useDashboardContext } from '../context/dashboardContext'
const Dashboard = () => {
  const {handleDraft} = useDashboardContext()
  const [draft,setDraft] = useState({title: "", subtitle: "", content: ""})
  const handleChange = (e) => {
    setDraft((prev)=> {return {...prev, [e.target.name]: e.target.value}})
  }
  const handleEditor = (event, editor) => {
    setDraft((prev)=>{return {...prev, content: editor.getData()}})
  }
  const handleSubmit = () => {
    try {
      handleDraft(draft)
    } catch (error) {
      console.log(error);
    }
  }
  console.log(draft);
  return (
    <div className='flex flex-col h-screen space-y-5'>
      {/* first section */}
      <div className='flex flex-col basis-1/12 justify-center w-full place-self-center space-y-1'>
        <div className=' text-lg font-bold'>
          <span>Dashboard &gt; Ana Sayfa</span>
        </div>
        <div>
          <hr className=' border-2 border-slate-800 shadow-lg w-32'/>
        </div>
      </div>
      {/* second section */}
      <div className='basis-1/12 grid grid-flow-col gap-5 px-5'>
        <div className='px-2 py-4 space-y-2 border-t-4 border-slate-800 bg-white rounded-sm shadow-lg'>
          <div className='flex flex-row pl-4 space-x-5'>
            <div>
              <BiNews className='h-10 w-10'/>
            </div>
            <div className='flex flex-col text-left leading-3'>
              <div className='text-small font-bold text-slate-800'><span className='text-2xl font-bold text-slate-800 pr-1'>45</span>Haber</div>
              <span className=' text-small text-text-gray font-semibold'>bugün</span>
            </div>
          </div>
          <div className=' text-extrasmall leading-3 text-slate-800 font-extrabold right-0 float-right'>
          <Link>Tümünü Gör</Link>
          </div>
        </div>
        <div className='px-2 py-4 space-y-2 border-t-4 border-slate-800 bg-white rounded-sm shadow-lg'>
          <div className='flex flex-row pl-4 space-x-5'>
            <div>
              <RiDraftFill className='h-10 w-10'/>
            </div>
            <div className='flex flex-col text-left leading-3'>
              <div className='text-small font-bold text-slate-800'><span className='text-2xl font-bold text-slate-800 pr-1'>3</span>Draft</div>
              <span className=' text-small text-text-gray font-semibold'>Şu an</span>
            </div>
          </div>
          <div className=' text-extrasmall leading-3 text-slate-800 font-extrabold right-0 float-right'>
          <Link>Tümünü Gör</Link>
          </div>
        </div>
        <div className='px-2 py-4 space-y-2 border-t-4 border-slate-800 bg-white rounded-sm shadow-lg'>
          <div className='flex flex-row pl-4 space-x-5'>
            <div>
              <FaComment className='h-10 w-10'/>
            </div>
            <div className='flex flex-col text-left leading-3'>
              <div className='text-small font-bold text-slate-800'><span className='text-2xl font-bold text-slate-800 pr-1'>316</span>Yorum</div>
              <span className=' text-small text-text-gray font-semibold'>toplam</span>
            </div>
          </div>
          <div className=' text-extrasmall leading-3 text-slate-800 font-extrabold right-0 float-right'>
          <Link>Tümünü Gör</Link>
          </div>
        </div>
        <div className='px-2 py-4 space-y-2 border-t-4 border-slate-800 bg-white rounded-sm shadow-lg'>
          <div className='flex flex-row pl-4 space-x-5'>
            <div>
              <FaUsers className='h-10 w-10'/>
            </div>
            <div className='flex flex-col text-left leading-3'>
              <div className='text-small font-bold text-slate-800'><span className='text-2xl font-bold text-slate-800 pr-1'>45</span>Kullanıcı</div>
              <span className=' text-small text-text-gray font-semibold'>toplam</span>
            </div>
          </div>
          <div className=' text-extrasmall leading-3 text-slate-800 font-extrabold right-0 float-right'>
          <Link>Tümünü Gör</Link>
          </div>
        </div>
      </div>
      {/* third section */}
      <div className='basis-9/12 m-5 py-5 px-4 bg-white rounded-sm shadow-lg text-left space-y-4'>
        <div>
          <span className='text-lg font-extrabold'>
            Quick Create
          </span>
        </div>
        
        <form action="" className='grid space-y-3'  >
          <label htmlFor="title" className='text-head font-bold'>Title</label>
          <textarea name="title" id="title" cols="80" rows="1" className='px-5 py-1 border border-slate-800 rounded-sm border-opacity-50' value={draft.title} onChange={(e)=>{handleChange(e)}}></textarea>
          <label htmlFor="subtitle" className='text-head font-bold'>Subtitle</label>
          <textarea name="subtitle" id="subtitle" cols="80" rows="1" className='px-5 py-1 border border-slate-800 rounded-sm border-opacity-50' value={draft.subTitle} onChange={(e)=>{handleChange(e)}}></textarea>
          <label htmlFor="content" className='text-head font-bold'>Content</label>
          <CKEditor editor={ClassicEditor} className='px-5 py-1 border border-slate-800 rounded-sm border-opacity-50' onChange={handleEditor} data={draft.content}></CKEditor>
          <Link to="/dashboard/create-post"><button className='px-5 py-2 font-bold text-md bg-kb w-fit text-white rounded-sm' onClick={()=>handleSubmit()}>Continue</button></Link>
        </form>
      </div>
    </div>
  )
}
export default Dashboard