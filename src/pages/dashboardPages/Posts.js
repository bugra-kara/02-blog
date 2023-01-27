import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDashboardContext } from '../../context/dashboardContext'
function Posts() {
  const {filteredPosts, getSection, handleFilter, deleteSection} = useDashboardContext()
  useEffect(()=> {
      getSection('posts')
  },[])
  return (
    <div className='flex flex-col h-screen space-y-5 pb-5'>
      {/* first section */}
      <div className='flex flex-col basis-1/12 justify-center w-full place-self-center space-y-1'>
        <div className=' text-lg font-bold'>
          <span>Dashboard &gt; Posts</span>
        </div>
        <div>
          <hr className=' border-2 border-slate-800 shadow-lg w-32'/>
        </div>
      </div>
      {/* second section */}
      <div className='grid grid-flow-row basis-1/12 mx-4 h-12 bg-white rounded-sm'>
        <ul className='flex flex-row font-extrabold h-full space-x-8 items-center text-left px-5 overflow-hidden list-none'>
          <li className='px-2 h-full ease-out delay-200 hover:ease-in hover:delay-200 border-b-4 border-slate-800 border-transparent hover:border-b-4 hover:border-slate-800 flex 
          items-center hover:cursor-pointer' onClick={()=>handleFilter(2)}>Tümü</li>
          <li className='px-2 h-full ease-out delay-200 hover:ease-in hover:delay-200 border-b-4 border-slate-800 border-transparent hover:border-b-4 hover:border-slate-800 flex 
          items-center hover:cursor-pointer' onClick={()=>handleFilter(1)}>Yayımlanmış</li>
          <li className='px-2 h-full ease-out delay-200 hover:ease-in hover:delay-200 border-b-4 border-slate-800 border-transparent hover:border-b-4 hover:border-slate-800 flex 
          items-center hover:cursor-pointer' onClick={()=>handleFilter(0)}>Draft</li>
          <li className='px-2 h-full ease-out delay-200 hover:ease-in hover:delay-200 border-b-4 border-slate-800 border-transparent hover:border-b-4 hover:border-slate-800 flex 
          items-center hover:cursor-pointer' onClick={()=>handleFilter(-1)}>Çöp Kutusu</li>
        </ul>
      </div>
      {/* third section */}
      <div className='basis-9/12 pb-4 mx-4 rounded-sm'>
        <table className='w-full table-fixed table'>
          <thead className='border-b-2 border-slate-800 bg-slate-100 rounded-sm shadow-md w-full'>
            <tr className='text-sm text-left font-bold w-full'>
              <th className='px-5 py-2 w-7'>#</th>
              <th className='px-3 py-2'>Başlık</th>
              <th className='px-3 py-2'>Yazar</th>
              <th className='px-3 py-2'>Kategoriler</th>
              <th className='px-3 py-2'>Etiketler</th>
              <th className='px-3 py-2'>Views</th>
              <th className='px-3 py-2'>Tarih</th>
              <th className='px-3 py-2'>Status</th>
            </tr>
          </thead>
          <tbody className=''>
          {
            filteredPosts?.map((item, index)=> {
              if(index % 2 === 0) {
                return (
                  <tr key={index} className='align-top bg-white group'>
                    <td className='leading-4 px-3 text-sm pt-2 font-bold float-left'>
                      <div className='bg-slate-800 text-white rounded-full flex h-6 w-6 items-center justify-center'>
                        <span className='text-small'>{index+1}</span>
                      </div>
                    </td>
                    <td className=' leading-4 px-3 text-sm pt-2 font-bold text-blue-500 pb-5'>
                      <div className='flex flex-col space-y-4'>
                        <Link>{item.title}</Link>
                        <div className='invisible group-hover:visible ease-out delay-150 group-hover:ease-in group-hover:delay-150 space-x-2'>
                          {item.status !== -1 ? <Link  to={`/dashboard/edit-post/${item.post_uid}`} className='px-2 py-1 rounded-sm text-small text-white bg-kb'>Edit</Link> : <button className='px-2 py-1 rounded-sm text-small text-white bg-yellow-500'>Geri Al</button>}
                          <button className='px-2 py-1 rounded-sm text-small text-white bg-danger' onClick={()=> deleteSection('posts',{...item})}>Delete</button>
                        </div>
                      </div>
                    </td>
                    <td className=' leading-4 px-3 text-sm pt-2 font-medium text-blue-500'><Link>{item.fullname}</Link></td>
                    <td className=' leading-4 px-3 text-sm pt-2 font-medium text-blue-500'>{item.categories.map((itemIn,index)=>{return index < item.categories.length - 1 ? (<Link key={index}>{itemIn}, </Link>) : (<Link key={index}>{itemIn} </Link>)})}</td>
                    <td className=' leading-4 px-3 text-sm pt-2 font-medium text-blue-500'>{item.tags.map((itemIn,index)=>{return index < item.tags.length - 1 ? (<Link key={index}>{itemIn}, </Link>) : (<Link key={index}>{itemIn} </Link>)})}</td>
                    <td className=' leading-4 px-3 text-sm pt-2 font-medium'>1234</td>
                    <td className=' leading-4 px-3 text-sm pt-2 font-medium'>{item.created_date}</td>
                    <td className=' leading-4 px-3 text-sm pt-2 font-medium'>{item.status === 0 ? "Draft" : item.status === 1 ? "Yayımlanmış" : "Çöp"}</td>
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
                        <Link>{item.title}</Link>
                        <div className='invisible group-hover:visible ease-out delay-150 group-hover:ease-in group-hover:delay-150 space-x-2'>
                          {item.status !== -1 ? <Link to={`/dashboard/edit-post/${item.post_uid}`} className='px-2 py-1 rounded-sm text-small text-white bg-kb'>Edit</Link> : <button className='px-2 py-1 rounded-sm text-small text-white bg-yellow-500'>Geri Al</button>}
                          <button className='px-2 py-1 rounded-sm text-small text-white bg-danger' onClick={()=> deleteSection('posts',{...item})}>Delete</button>
                        </div>
                      </div>
                    </td>
                    <td className=' leading-4 px-3 text-sm pt-2 font-medium text-blue-500'><Link>{item.fullname}</Link></td>
                    <td className=' leading-4 px-3 text-sm pt-2 font-medium text-blue-500'>{item.categories.map((itemIn,index)=>{return index < item.categories.length - 1 ? (<Link key={index}>{itemIn}, </Link>) : (<Link key={index}>{itemIn} </Link>)})}</td>
                    <td className=' leading-4 px-3 text-sm pt-2 font-medium text-blue-500'>{item.tags.map((itemIn,index)=>{return index < item.tags.length - 1 ? (<Link key={index}>{itemIn}, </Link>) : (<Link key={index}>{itemIn} </Link>)})}</td>
                    <td className=' leading-4 px-3 text-sm pt-2 font-medium'>1234</td>
                    <td className=' leading-4 px-3 text-sm pt-2 font-medium'>{item.created_date}</td>
                    <td className=' leading-4 px-3 text-sm pt-2 font-medium'>{item.status === 0 ? "Draft" : item.status === 1 ? "Yayımlanmış" : "Çöp"}</td>
                  </tr>
                )
              }
            })
          }
          </tbody>
        </table>
      </div>
      {/* fourth section */}
      <div className='basis-1/12 pb-4 mx-4 justify-center place-self-center'>
        <div className='flex space-x-4'>
          <button className=' bg-slate-100 text-slate-800 rounded-full flex h-12 w-12 items-center justify-center shadow-md'>
            <span className='text-3xl font-bold'> &lt;</span>
          </button>
          <div className='bg-slate-800 text-white rounded-full flex h-12 w-12 items-center justify-center shadow-md'>
            <span className='text-2xl font-bold'>2</span>
          </div>
          <button className='bg-slate-100 text-slate-800 rounded-full flex h-12 w-12 items-center justify-center shadow-md'>
            <span className='text-3xl font-bold'>&gt;</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Posts