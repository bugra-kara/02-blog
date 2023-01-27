import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useDashboardContext } from '../../context/dashboardContext'
function Tags() {
  const {tags, getSection, submitEditSection, submitNew, deleteSection, numTags} = useDashboardContext()
  const [edit, setEdit] = useState(false)
  const [content, setContent] = useState(null)
  const [newTag, setNewTag] = useState({name: "", slug: ""})
  const [page, setPage] = useState(0)

  const handleNewChange = (e) => {
    setNewTag((prev)=> {return {...prev, [e.target.name]: e.target.value}});
  }
  const handleNewSubmit = async (e) => {
    e.preventDefault()
    setNewTag({name: "", slug: ""})
    await submitNew('tags',newTag)
    getSection('tags', page)
    if(numTags % 5 === 0) {
      console.log("here");
      setPage(page+1)
      getSection('tags', page+1)
    }
  }
  const handleChange = (e) => {
    setContent((prev) => {return {...prev, [e.target.name]: e.target.value}});
  }
  const handleEdit = (item) => {
    setEdit(true)
    setContent(item)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    submitEditSection('tags',content)
    setEdit(false)
  }
  const handleDelete = (itemInfo) => {
    setEdit(false)
    deleteSection('tags',itemInfo)
  }
  const handlePage = (value) => {
    if(value === 'increase') {
      setPage(page+1)
      getSection('tags',page+1)
    }
    if(value === 'decrease') {
      setPage(page-1)
      getSection('tags',page-1)
    }
  }
  useEffect(()=> {
    if(tags.length === 0 || page === 0){
      getSection('tags', page)
    }
  },[])
  return (
    <div className='flex flex-col h-screen space-y-5 pb-5'>
      {/* first section */}
      <div className='flex flex-col basis-1/12 justify-center w-full place-self-center space-y-1'>
        <div className=' text-lg font-bold'>
          <span>Dashboard &gt; Tags</span>
        </div>
        <div>
          <hr className=' border-2 border-slate-800 shadow-lg w-32'/>
        </div>
      </div>
      {/* Second section */}
      <div className=' flex flex-row mx-4 space-x-8'>
        {!edit 
        ? 
        <div className='basis-5/12 text-left space-y-5'>
          <div className=' text-lg font-extrabold'>
            Yeni Etiket Ekle
          </div>
          <form action="" className='grid space-y-3' onSubmit={(e)=>{handleNewSubmit(e)}}>
            <label htmlFor="name" className='text-head font-bold'>İsim</label>
            <textarea name="name" id="name" cols="80" rows="2" className='px-2 py-1 border border-slate-800 rounded-sm border-opacity-50'
            value={newTag.name}
            onChange={(e)=>{handleNewChange(e)}}
            ></textarea>
            <span className=' text-text-gray font-bold text-small'>Sitenizde nasıl gösterileceği.</span>
            <label htmlFor="slug" className='text-head font-bold'>Slug</label>
            <textarea name="slug" id="slug" cols="80" rows="2" className='px-2 py-1 border border-slate-800 rounded-sm border-opacity-50'
            value={newTag.slug}
            onChange={(e)=>{handleNewChange(e)}}
            ></textarea>
            <span className=' text-text-gray font-bold text-small'>“slug” yazı isminin URL versiyonudur. Genellikle tümü küçük harflerden oluşur, sadece harf, rakam ve tire içerir.</span>
            <button type="submit" className='px-4 py-1 font-bold text-sm bg-kb w-fit text-white rounded-sm shadow-md'>Yeni etiket ekle</button>
          </form>
        </div>
        :
        <div className='basis-5/12 text-left space-y-5'>
          <div className=' text-lg font-extrabold'>
            Etiket Düzenle
          </div>
          <form action="" className='grid space-y-3' onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="tag_id" className='text-head font-bold'>Etiket Id</label>
            <input type="text" name="tag_id" id="tag_id" disabled placeholder={content.tag_id} className='px-2 py-1 border cursor-not-allowed border-slate-800 rounded-sm border-opacity-50'/>
            <label htmlFor="tag_name" className='text-head font-bold'>İsim</label>
            <textarea name="tag_name" id="tag_name" cols="80" rows="2" className='px-2 py-1 border border-slate-800 rounded-sm border-opacity-50'
            value={content.tag_name}
            onChange={(e)=> handleChange(e)}
            ></textarea>
            <span className=' text-text-gray font-bold text-small'>Sitenizde nasıl gösterileceği.</span>
            <label htmlFor="tag_slug" className='text-head font-bold'>Slug</label>
            <textarea name="tag_slug" id="tag_slug" cols="80" rows="2" className='px-2 py-1 border border-slate-800 rounded-sm border-opacity-50'
            value={content.tag_slug}
            onChange={(e)=> handleChange(e)}
            ></textarea>
            <span className=' text-text-gray font-bold text-small'>“slug” yazı isminin URL versiyonudur. Genellikle tümü küçük harflerden oluşur, sadece harf, rakam ve tire içerir.</span>
            <div className='space-x-5'>
              <button type='submit' className='px-4 py-1 font-bold text-sm bg-price w-fit text-white rounded-sm shadow-md'>Düzenle</button>
              <button className='px-4 py-1 font-bold text-sm bg-gray-100 w-fit text-link rounded-sm shadow-md' onClick={()=> setEdit(false)}>Geri Dön</button>
            </div>
          </form>
        </div>
        }
        <div className='basis-7/12 flex flex-col'>
          <table className='w-full table-fixed table'>
            <thead className='border-b-2 border-slate-800 bg-slate-100 rounded-sm shadow-md w-full'>
              <tr className='text-sm text-left font-bold w-full'>
                <th className='px-5 py-2 w-7'>#</th>
                <th className='px-3 py-2'>Kategori</th>
                <th className='px-3 py-2'>Slug</th>
                <th className='px-3 py-2'>Toplam</th>
              </tr>
            </thead>
            <tbody className=''>
            {
              tags?.map((item, index)=>{
                if(index % 2 === 0){
                  return (
                    <tr key={index} className='align-top bg-white group'>
                      <td className='leading-4 px-3 text-sm pt-2 font-bold float-left'>
                        <div className='bg-slate-800 text-white rounded-full flex h-6 w-6 items-center justify-center'>
                          <span className='text-small'>{(index+1)+(page*5)}</span>
                        </div>
                      </td>
                      <td className=' leading-4 px-3 text-sm pt-2 font-bold text-blue-500 pb-5'>
                        <div className='flex flex-col space-y-4'>
                          <Link>{item.tag_name}</Link>
                          <div className='invisible group-hover:visible ease-out delay-150 group-hover:ease-in group-hover:delay-150 space-x-2'>
                            <button className='px-2 py-1 rounded-sm text-small text-white bg-kb' onClick={()=> handleEdit({...item})}>Edit</button>
                            <button className='px-2 py-1 rounded-sm text-small text-white bg-danger' onClick={()=> handleDelete({...item})}>Delete</button>
                          </div>
                        </div>
                      </td>
                      <td className=' leading-4 px-3 text-sm pt-2 font-medium text-blue-500'>{item.tag_slug}</td>
                      <td className=' leading-4 px-3 text-sm pt-2 font-medium text-blue-500'>17</td>
                    </tr>
                  )
                }
                else {
                  return (
                    <tr key={index} className='align-top bg-gray-100 group'>
                      <td className='leading-4 px-3 text-sm pt-2 font-bold float-left'>
                        <div className='bg-slate-800 text-white rounded-full flex h-6 w-6 items-center justify-center'>
                          <span className='text-small'>{(index+1)+(page*5)}</span>
                        </div>
                      </td>
                      <td className=' leading-4 px-3 text-sm pt-2 font-bold text-blue-500 pb-5'>
                        <div className='flex flex-col space-y-4'>
                          <Link>{item.tag_name}</Link>
                          <div className='invisible group-hover:visible ease-out delay-150 group-hover:ease-in group-hover:delay-150 space-x-2'>
                            <button className='px-2 py-1 rounded-sm text-small text-white bg-kb' onClick={()=> handleEdit({...item})}>Edit</button>
                            <button className='px-2 py-1 rounded-sm text-small text-white bg-danger' onClick={()=> handleDelete({...item})}>Delete</button>
                          </div>
                        </div>
                      </td>
                      <td className=' leading-4 px-3 text-sm pt-2 font-medium text-blue-500'>{item.tag_slug}</td>
                      <td className=' leading-4 px-3 text-sm pt-2 font-medium text-blue-500'>27</td>
                    </tr>
                  )
                }
              })
            }
            </tbody>
          </table>
          <div className='justify-center pt-4 w-full'>
            <div className='pt-3 text-sm font-bold flex justify-end'>
              {numTags} öge
            </div>
            <div className='flex basis-7/12 space-x-4 justify-center'>
            {
              page >= 1
            ? <button className='bg-slate-100 text-slate-800 rounded-full flex h-8 w-8 items-center justify-center shadow-md' onClick={()=>handlePage('decrease')}>
              <span className='text-xl font-bold'> &lt;</span>
              </button>
            : <button className='cursor-not-allowed bg-slate-100 text-gray-700 rounded-full flex h-8 w-8 items-center justify-center shadow-md'>
              <span className='text-xl font-bold'> &lt;</span>
              </button>
            }
            <div className='bg-slate-800 text-white rounded-full flex h-8 w-8 items-center justify-center shadow-md'>
              <span className='text-lg font-bold'>{page+1}</span>
            </div>
            {
              page < numTags / 5 - 1
              ? <button className=' bg-slate-100 text-slate-800 rounded-full flex h-8 w-8 items-center justify-center shadow-md' onClick={()=>handlePage('increase')}>
                <span className='text-xl font-bold'> &gt;</span>
                </button>
              : <button className='cursor-not-allowed bg-slate-100 text-gray-700 rounded-full flex h-8 w-8 items-center justify-center shadow-md'>
                <span className='text-xl font-bold'> &gt;</span>
                </button>
            }
            </div>
            
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Tags