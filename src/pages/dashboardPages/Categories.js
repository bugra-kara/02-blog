import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useDashboardContext } from '../../context/dashboardContext'
function Categories() {
  const {categories, getSection, submitEditSection, submitNew, deleteSection} = useDashboardContext()
  const [edit, setEdit] = useState(false)
  const [content, setContent] = useState(null)
  const [newCategory, setNewCategory] = useState({name: "", slug: ""})

  const handleNewChange = (e) => {
    setNewCategory((prev)=> {return {...prev, [e.target.name]: e.target.value}});
  }
  const handleNewSubmit = (e) => {
    e.preventDefault()
    setNewCategory({name: "", slug: ""})
    submitNew('categories',newCategory)
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
    submitEditSection('categories',content)
    setEdit(false)
  }
  const handleDelete = (itemInfo) => {
    setEdit(false)
    deleteSection('categories',itemInfo)
  }
  useEffect(()=> {
    if(categories.length === 0){
      getSection('categories')
    }
  },[])
  return (
    <div className='flex flex-col h-screen space-y-5 pb-5'>
      {/* first section */}
      <div className='flex flex-col basis-2/12 justify-center w-full place-self-center space-y-1 py-6'>
        <div className=' text-lg font-bold'>
          <span>Dashboard &gt; Categories</span>
        </div>
        <div>
          <hr className=' border-2 border-slate-800 shadow-lg w-32'/>
        </div>
      </div>
      {/* Second section */}
      <div className='basis-10/12 flex flex-row mx-4 space-x-8'>
        {!edit 
        ? 
        <div className='basis-5/12 text-left space-y-5'>
          <div className=' text-lg font-extrabold'>
            Yeni Kategori Ekle
          </div>
          <form action="" className='grid space-y-3' onSubmit={(e)=>{handleNewSubmit(e)}}>
            <label htmlFor="name" className='text-head font-bold'>İsim</label>
            <textarea name="name" id="name" cols="80" rows="2" required className='px-2 py-1 border border-slate-800 rounded-sm border-opacity-50'
            value={newCategory.name}
            onChange={(e)=>{handleNewChange(e)}}
            ></textarea>
            <span className=' text-text-gray font-bold text-small'>Sitenizde nasıl gösterileceği.</span>
            <label htmlFor="slug" className='text-head font-bold'>Slug</label>
            <textarea name="slug" id="slug" cols="80" rows="2" required className='px-2 py-1 border border-slate-800 rounded-sm border-opacity-50'
            value={newCategory.slug}
            onChange={(e)=>{handleNewChange(e)}}
            ></textarea>
            <span className=' text-text-gray font-bold text-small'>“slug” yazı isminin URL versiyonudur. Genellikle tümü küçük harflerden oluşur, sadece harf, rakam ve tire içerir.</span>
            <button type='submit' className='px-4 py-1 font-bold text-sm bg-kb w-fit text-white rounded-sm shadow-md'>Yeni kategori ekle</button>
          </form>
        </div>
        :
        <div className='basis-5/12 text-left space-y-5'>
          <div className=' text-lg font-extrabold'>
            Kategori Düzenle
          </div>
          <form action="" className='grid space-y-3' onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="category_id" className='text-head font-bold'>Kategori Id</label>
            <input type="text" name="" id="category_id" disabled placeholder={content.category_id} className='px-2 py-1 border cursor-not-allowed border-slate-800 rounded-sm border-opacity-50'/>
            <label htmlFor="category_name" className='text-head font-bold'>İsim</label>
            <textarea name="category_name" id="category_name" cols="80" rows="2" className='px-2 py-1 border border-slate-800 rounded-sm border-opacity-50'
            value={content.category_name}
            onChange={(e)=> handleChange(e)}
            >
            </textarea>
            <span className=' text-text-gray font-bold text-small'>Sitenizde nasıl gösterileceği.</span>
            <label htmlFor="category_slug" className='text-head font-bold'>Slug</label>
            <textarea name="category_slug" id="category_slug" cols="80" rows="2" className='px-2 py-1 border border-slate-800 rounded-sm border-opacity-50' 
            value={content.category_slug}
            onChange={(e)=> handleChange(e)}
            >
            </textarea>
            <span className=' text-text-gray font-bold text-small'>“slug” yazı isminin URL versiyonudur. Genellikle tümü küçük harflerden oluşur, sadece harf, rakam ve tire içerir.</span>
            <div className='space-x-5'>
              <button type='submit' className='px-4 py-1 font-bold text-sm bg-price w-fit text-white rounded-sm shadow-md'>Düzenle</button>
              <button className='px-4 py-1 font-bold text-sm bg-gray-100 w-fit text-link rounded-sm shadow-md' onClick={()=> setEdit(false)}>Geri Dön</button>
            </div>
          </form>
        </div>
        }
        <div className='basis-7/12'>
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
              categories.map((item, index) => {
                if(index % 2 === 0) {
                  return (
                    <tr key={index} className='align-top bg-white group'>
                      <td className='leading-4 px-3 text-sm pt-2 font-bold float-left'>
                        <div className='bg-slate-800 text-white rounded-full flex h-6 w-6 items-center justify-center'>
                          <span className='  text-small'>{index+1}</span>
                        </div>
                      </td>
                      <td className=' leading-4 px-3 text-sm pt-2 font-bold text-blue-500 pb-5'>
                        <div className='flex flex-col space-y-4'>
                          <Link>{item.category_name}</Link>
                          <div className='invisible group-hover:visible ease-out delay-150 group-hover:ease-in group-hover:delay-150 space-x-2'>
                            <button className='px-2 py-1 rounded-sm text-small text-white bg-kb' onClick={()=> handleEdit({...item})}>Edit</button>
                            <button className='px-2 py-1 rounded-sm text-small text-white bg-danger' onClick={()=> handleDelete({...item})}>Delete</button>
                          </div>
                        </div>
                      </td>
                      <td className=' leading-4 px-3 text-sm pt-2 font-medium text-blue-500'>{item.category_slug}</td>
                      <td className=' leading-4 px-3 text-sm pt-2 font-medium text-blue-500'>17</td>
                    </tr>
                  )
                }
                else {
                  return (
                    <tr key={index} className='align-top bg-gray-100 group'>
                      <td className='leading-4 px-3 text-sm pt-2 font-bold float-left'>
                        <div className='bg-slate-800 text-white rounded-full flex h-6 w-6 items-center justify-center'>
                          <span className='  text-small'>{index+1}</span>
                        </div>
                      </td>
                      <td className=' leading-4 px-3 text-sm pt-2 font-bold text-blue-500 pb-5'>
                        <div className='flex flex-col space-y-4'>
                          <Link>{item.category_name}</Link>
                          <div className='invisible group-hover:visible ease-out delay-150 group-hover:ease-in group-hover:delay-150 space-x-2'>
                            <button className='px-2 py-1 rounded-sm text-small text-white bg-kb' onClick={()=> handleEdit({...item})}>Edit</button>
                            <button className='px-2 py-1 rounded-sm text-small text-white bg-danger' onClick={()=> handleDelete({...item})}>Delete</button>
                          </div>
                        </div>
                      </td>
                      <td className=' leading-4 px-3 text-sm pt-2 font-medium text-blue-500'>{item.category_slug}</td>
                      <td className=' leading-4 px-3 text-sm pt-2 font-medium text-blue-500'>27</td>
                    </tr>
                  )
                }
              })
            }
            </tbody>
          </table>
          <div className='w-full float-right text-right pt-3 text-sm font-bold'>
            {categories.length} öge
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Categories