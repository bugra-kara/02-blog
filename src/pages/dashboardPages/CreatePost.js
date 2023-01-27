import React, { useState, useEffect } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { HiOutlineStatusOnline } from 'react-icons/hi'
import { FaUserCircle } from 'react-icons/fa'
import { BiCategory, BiPlus } from 'react-icons/bi'
import { AiFillTag } from 'react-icons/ai'
import { GrFormClose } from 'react-icons/gr'
import { IoMdRemove } from 'react-icons/io'
import { BsCardHeading } from 'react-icons/bs'
import { useDashboardContext } from '../../context/dashboardContext';
import { ToastContainer } from 'react-toastify';
import { notify } from '../../utils.js/notifications';
function CreatePost() {
  const {newPost, filteredCategories, getSection, filteredTags, draft} = useDashboardContext()
  const [post, setPost] = useState({title: draft.title, subTitle: draft.subtitle, content: draft.content, slug: "", status: "", isheadline: false, author: localStorage.getItem('id'), categories: [], tags: []})
  const [modal, setModal] = useState({status: false, page: null})
  const [search, setSearch] = useState("")
  const handleChange = (e) => {
    setPost((prev)=> {return {...prev, [e.target.name]: e.target.value}} )
  }
  const handleEditor = (event,editor) => {
    setPost((prev)=> {return {...prev, content: editor.getData()}})
  }
  const handleSubmit = (e,status) => {
    e.preventDefault()
    if((post.title !== "" && post.subTitle !== "" && post.content !== "" && post.slug !== "" && post.categories.length !== 0 && post.tags.length !== 0)) {
      newPost(post)
      setPost({title: draft.title, subTitle: draft.subtitle, content: draft.content, slug: "", status: "1", author: localStorage.getItem('id'), categories: [], tags: []})
    }
    else {
      notify(100, 'Lütfen boş alanları doldurunuz!')
    }
  }
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const handleAddRemove = (action,section,item) => {
    if(section === 'categories') {
      if(action === 'add') {
        setPost((prev)=>{ return {...prev, categories:[...post.categories,`${item.category_name}`]}})
      }
      else {
        const newCat = post.categories.filter((cat)=> cat !== `${item.category_name}`)
        setPost((prev)=> {return {...prev, categories: [...newCat]}})
      }
    }
    else {
      if(action === 'add') {
        setPost((prev)=>{ return {...prev, tags:[...post.tags,`${item.tag_name}`]}})
      }
      else {
        const newTag = post.tags.filter((cat)=> cat !== `${item.tag_name}`)
        setPost((prev)=> {return {...prev, tags: [...newTag]}})
      }
    }
  }
  useEffect(()=> {
    if(filteredCategories.length === 0 && modal.page === 'categories'){
      getSection('categories')
    }
    if(filteredTags.length === 0 && modal.page === 'tags'){
      getSection('tags')
    }
  },[modal])
  return (
    <>
    <div className='flex flex-col h-screen space-y-5'>
      {/* first section */}
      <div className='flex flex-col basis-1/12 justify-center w-full place-self-center space-y-1'>
        <div className=' text-lg font-bold'>
          <span>Dashboard &gt; Create Post</span>
        </div>
        <div>
          <hr className=' border-2 border-slate-800 shadow-lg w-32'/>
        </div>
      </div>
      {/*second section */}
      <div className='flex flex-row'>
        <div className='basis-8/12 m-5 py-5 px-4 bg-white rounded-sm shadow-sm text-left space-y-4'>
          <div>
            <span className='text-lg font-extrabold'>
              Add new post
            </span>
          </div>
          <form action="" className='grid space-y-3'>
            <label htmlFor="title" className='text-head font-bold'>Title</label>
            <textarea name="title" id="title" cols="80" rows="1" className='px-5 py-1 border border-slate-800 rounded-sm border-opacity-50'
            required
            value={post.title}
            onChange={(e)=>{handleChange(e)}}
            ></textarea>
            <label htmlFor="subTitle" className='text-head font-bold'>Subtitle</label>
            <textarea name="subTitle" id="subTitle" cols="80" rows="1" className='px-5 py-1 border border-slate-800 rounded-sm border-opacity-50'
            required
            value={post.subTitle}
            onChange={(e)=>{handleChange(e)}}
            ></textarea>
            <label htmlFor="slug" className='text-head font-bold'>Slug</label>
            <textarea name="slug" id="slug" cols="80" rows="1" className='px-5 py-1 border border-slate-800 rounded-sm border-opacity-50'
            required
            value={post.slug}
            onChange={(e)=>{handleChange(e)}}
            ></textarea>
            <label htmlFor="content" className='text-head font-bold'>Content</label>
            <CKEditor editor={ClassicEditor} data={post.content} onChange={handleEditor} name="content" className='px-5 py-1 border border-slate-800 rounded-sm border-opacity-50'></CKEditor>
          </form>
        </div>
        <div className='grid grid-rows-3 basis-4/12 py-5 pr-4 space-y-5'>
          <div className='bg-white rounded-sm shadow-sm text-left space-y-7 px-4 py-5'>
            <div className='grid grid-flow-col'>
              <span className='text-lg font-extrabold'>
                Publish
              </span>
              <div className='flex justify-end'>
                <button className='px-3 py-1 border border-gray-200 hover:bg-gray-200 ease-out delay-200 hover:ease-in hover:delay-200 text-link font-bold text-sm rounded-sm'
                type='submit'
                onClick={(e)=>handleSubmit(e, "draft")}
                >Save Draft</button>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='grid grid-flow-col items-center'>
                <div className='flex text-xs space-x-1'>
                  <span className='font-bold flex space-x-1 items-center'> <span><HiOutlineStatusOnline/></span> <span> Status:</span> </span>
                  <select name="status" id="status" onChange={(e)=>{handleChange(e)}}>
                    <option value="0">Draft</option>
                    <option value="1">Publish</option>
                  </select>
                </div>
              </div>
              <div className='grid grid-flow-col items-center'>
                <div className='flex text-xs space-x-1'>
                  <span className='font-bold flex space-x-1 items-center'> <span><BiCategory/></span> <span> Categories:</span> </span>
                  {
                    post.categories.map((item, index)=>{return index !== post.categories.length -1 ? <span className='text-text-gray font-semibold'>{item}, </span> : <span className='text-text-gray font-semibold'>{item} </span> })
                  }
                </div>
                <div className='flex justify-end'>
                  <button className='text-xs text-kb font-bold' onClick={()=>{setModal({status: true, page: 'categories'})}}>Add</button>
                </div>
              </div>
              <div className='grid grid-flow-col items-center'>
                <div className='flex text-xs space-x-1'>
                  <span className='font-bold flex space-x-1 items-center'> <span><AiFillTag/></span> <span> Tags:</span> </span>
                  {
                    post.tags.map((item, index)=>{return index !== post.tags.length -1 ? <span className='text-text-gray font-semibold'>{item}, </span> : <span className='text-text-gray font-semibold'>{item} </span> })
                  }
                </div>
                <div className='flex justify-end'>
                  <button className='text-xs text-kb font-bold' onClick={()=>{setModal({status: true, page: 'tags'})}}>Add</button>
                </div>
              </div>
              <div className='grid grid-flow-col items-center'>
                <div className='flex text-xs space-x-1'>
                  <span className='font-bold flex space-x-1 items-center'> <span><BsCardHeading/></span> <span> Manşet:</span> </span>
                  <input type="checkbox" name="isheadline" id="isheadline" value={post.isheadline} onChange={(e)=>{handleChange(e)}}/>
                </div>
              </div>
              <div className='grid grid-flow-col items-center'>
                <div className='flex text-xs space-x-1'>
                  <span className='font-bold flex space-x-1 items-center'> <span><FaUserCircle/></span> <span> Author:</span> </span>
                  <span className='text-text-gray font-semibold'>{localStorage.getItem('username')}</span>
                </div>
              </div>
            </div>
            <div className='grid grid-flow-col'>
              <button type='submit' className='px-4 py-1 font-bold bg-kb w-fit text-white rounded-sm text-sm' onClick={(e)=>handleSubmit(e, "publish")}>Publish</button>
              <div className='flex justify-end'>
                <button className='px-3 py-1 text-white bg-danger font-bold text-sm rounded-sm'>Delete</button>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-sm row-span-2 px-4 py-5 space-y-4'>
            <div className='grid grid-flow-col text-left'>
              <span className='text-lg font-extrabold'>
                Your recent posts
              </span>
            </div>
            <ul className='text-left space-y-2'>
              <li className=' leading-4'>
                <div className=' text-xs line-clamp-2 font-bold'>Wormhole Saldırganı Harekete Geçti: 155 Milyon Dolarlık Ethereum Transferi</div>
                <span className='text-text-gray text-small font-semibold'>24.01.2023</span>
              </li>
              <li className=' leading-4'>
                <div className=' text-xs line-clamp-2 font-bold'>Wormhole Saldırganı Harekete Geçti: 155 Milyon Dolarlık Ethereum Transferi</div>
                <span className='text-text-gray text-small font-semibold'>24.01.2023</span>
              </li>
              <li className=' leading-4'>
                <div className=' text-xs line-clamp-2 font-bold'>Wormhole Saldırganı Harekete Geçti: 155 Milyon Dolarlık Ethereum Transferi</div>
                <span className='text-text-gray text-small font-semibold'>24.01.2023</span>
              </li>
              <li className=' leading-4'>
                <div className=' text-xs line-clamp-2 font-bold'>Wormhole Saldırganı Harekete Geçti: 155 Milyon Dolarlık Ethereum Transferi</div>
                <span className='text-text-gray text-small font-semibold'>24.01.2023</span>
              </li>
              <li className=' leading-4'>
                <div className=' text-xs line-clamp-2 font-bold'>Wormhole Saldırganı Harekete Geçti: 155 Milyon Dolarlık Ethereum Transferi</div>
                <span className='text-text-gray text-small font-semibold'>24.01.2023</span>
              </li>
            </ul>
            <div className='grid grid-flow-col float-left'>
              <button className='text-sm text-kb font-extrabold'>
                See all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {
      modal.status ? 
      <div className="py-12 transition bg-slate-700 bg-opacity-30 duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 ">
        <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 text-center">{modal.page === 'categories' ? 'Category' : 'Tags'} Add</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <input id="name" 
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-md border"
            placeholder="bitcoin"
            value={search}
            onChange={(e)=>handleSearch(e)}
            />
            </form>
            <div className='container flex-1 flex-col space-y-2 overflow-y-auto overflow-hidden h-80 self-center '>
            {
              modal.page === 'categories' 
              ? 
              filteredCategories.map((item,index)=>{
                return (
                        <div key={index} className='flex space-x-3 bg-gray bg-opacity-10 w-full py-2 px-3 rounded-md'>
                          <span className='float-left flex w-full'>{item.category_name}</span>
                          <div className='flex flex-row space-x-6 self-center'>
                          {
                            post.categories.includes(`${item.category_name}`) 
                              ? 
                              <button type='submit' className='bg-gray bg-opacity-20' onClick={()=>{handleAddRemove('remove','categories',{...item})}}>
                              <span className='flex basis-1/2 rounded-sm bg-danger text-white'><IoMdRemove/></span>
                              </button> 
                              : 
                              <button type='submit' className='bg-gray bg-opacity-20' onClick={()=>{handleAddRemove('add','categories',{...item})}}>
                              <span className='flex basis-1/2 rounded-sm bg-price text-white'><BiPlus/></span>
                              </button> 
                          }
                          </div>
                        </div>
                )
              })
            : 
              filteredTags.map((item,index)=>{
                return (
                        <div key={index} className='flex space-x-3 bg-gray bg-opacity-10 w-full py-2 px-3 rounded-md'>
                          <span className='float-left flex w-full'>{item.tag_name}</span>
                          <div className='flex flex-row space-x-6 self-center'>
                          {
                            post.tags.includes(`${item.tag_name}`) 
                              ? 
                              <button type='submit' className='bg-gray bg-opacity-20' onClick={()=>{handleAddRemove('remove','tags',{...item})}}>
                              <span className='flex basis-1/2 rounded-sm bg-danger text-white'><IoMdRemove/></span>
                              </button> 
                              : 
                              <button type='submit' className='bg-gray bg-opacity-20' onClick={()=>{handleAddRemove('add','tags',{...item})}}>
                              <span className='flex basis-1/2 rounded-sm bg-price text-white'><BiPlus/></span>
                              </button> 
                          }
                          </div>
                        </div>
                )
              })
            }
            </div>
            <button
              onClick={()=>{setModal({status: false, page: null})}}
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
               >
                <GrFormClose />
            </button>
          </div>
        </div>
      </div>
      : ""
    }
    <ToastContainer/>
    </>
  )
}

export default CreatePost