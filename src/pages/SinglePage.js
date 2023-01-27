import React, {useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import image from '../assets/images/bitcoin-86.jpg'
import {FaFacebookSquare, FaTwitter, FaLinkedin, FaWhatsapp, FaComment} from 'react-icons/fa'
import { ContentRightSidebar } from '../components'
import {GrUpdate} from 'react-icons/gr'
import {AiFillEye} from 'react-icons/ai'
import { usePublicContext } from '../context/publicContext'
import moment from 'moment'

const SinglePage = () => {
    const {id} = useParams()
    const { getSinglePost, post } = usePublicContext()
    useEffect(()=> {
        window.scrollTo(0,0)
        const getData = async () => {
            await getSinglePost(id)
        }
        getData()
      },[])
  return (
    <main className='container flex flex-col space-y-7 px-3 sm:px-2 md:px-3 lg:px-9 xl:px-12 mt-8'>
        <div className='text-left space-x-3'>
            {post?.categories?.map((item, index)=> {return <Link key={index} className='uppercase px-3 py-1 rounded-2xl text-white bg-kb text-small font-bold'>{item}</Link>})}
        </div>
        <div className='flex flex-col basis-2/12 space-y-3'>
            <div className='text-left w-fit pb-3 pr-16'>
                <h1 className=' text-4xl font-extrabold'>{post?.title}
                </h1>
            </div>
            <div className='text-left uppercase text-small text-text-gray font-medium space-y-3'>
                <span >
                    <span>BY</span><Link className='font-bold'> {post?.fullname}</Link>
                </span>
                <p className='flex space-x-5'>
                    <span className='space-x-1 flex items-center'>
                    <span><GrUpdate/></span> <span>OLUŞTURULDU {moment(post.created_date).format('LL')}</span>
                    </span>
                    <span className='space-x-1 flex items-center'>
                    <span><AiFillEye/></span> <span>33 Görüntülenme</span>
                    </span>
                    <span className='space-x-1 flex items-center'>
                    <span><FaComment/></span> <span>0 Yorum</span>
                    </span>
                </p>
            </div>
        </div>
        <hr className=' w-full'/>
        <div className='flex flex-col lg:flex-row basis-10/12 space-x-0 sm:space-x-5'>
            <div className='basis-8/12 space-y-3'>
                <div>
                    <img src={post.image_url} className="rounded-2xl" alt=""/>
                </div>
                <div>
                    <p className='text-left font-extrabold text-xl px-1 py-3'>
                    {post.subtitle}
                    </p>
                </div>
                <div dangerouslySetInnerHTML={{__html: post.content}} className='text-left space-y-8 px-1 content-font-family leading-7'>
                    
                </div>
                <div className='text-left flex-col pt-10 pb-7 space-y-12'>
                    <div className='basis-1/2 flex items-center text-left text-small text-text-gray font-semibold space-x-7'>
                        <span className='space-x-1 flex items-center'>
                        <span><GrUpdate/></span> <span>OLUŞTURULDU 09.01.2023 21:27</span>
                        </span>
                        <span className='space-x-1 flex items-center'>
                        <span><AiFillEye/></span> <span>33 Görüntülenme</span>
                        </span>
                        <span className='space-x-1 flex items-center'>
                        <span><FaComment/></span> <span>0 Yorum</span>
                        </span>
                    </div>
                    <div className='basis-1/2 flex place-items-center flex-row space-x-4 text-left text-day text-text-gray font-semibold'>
                        <div className='basis-1/2'>
                            <span>
                            Tag'ler: 
                            </span>
                            {post?.tags?.map((item, index)=>{return <span key={index} className='bg-slate-200 bg-opacity-40 px-3 py-1 rounded-xl uppercase'>
                                {item}
                            </span>})}
                        </div>
                        <div className='basis-1/2 space-x-2 text-right justify-end flex'>
                            <Link className='text-center flex rounded-full justify-center items-center w-10 h-10 bg-white shadow-md'>
                                <FaFacebookSquare className='text-fb h-4 w-4'/>
                            </Link>
                            <Link className='text-center flex rounded-full justify-center items-center w-10 h-10 bg-white shadow-md'>
                                <FaTwitter className='text-tw h-4 w-4' />
                            </Link>
                            <Link className='text-center flex rounded-full justify-center items-center w-10 h-10 bg-white shadow-md'>
                                <FaLinkedin className='text-ln h-4 w-4' />
                            </Link>
                            <Link className='text-center flex rounded-full justify-center items-center w-10 h-10 bg-white shadow-md'>
                                <FaWhatsapp className='text-wp h-4 w-4' />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='text-left flex flex-row px-7 py-10 space-x-4'>
                    <div>
                        <Link>
                            <img src={image} alt="" className='rounded-full h-24 w-24 object-cover object-center'/>
                        </Link>
                    </div>
                    <div className='space-y-3'>
                        <div>
                            <span className='text-2xl font-bold'>
                                {post.fullname}
                            </span>
                        </div>
                        <div>
                            <span className='text-text-gray text-opacity-50 text-day font-bold rounded-xl px-3 py-1 shadow-sm'>
                                Yazarın Tüm Haberleri
                            </span>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='text-left py-10'>
                    <div className='text-3xl font-extrabold'>
                        Yorumlar
                    </div>
                    <div className='py-5 space-y-10'>
                        <div className='flex flex-row space-x-4 items-center'>
                            <div>
                                <Link>
                                    <img src={image} alt="" className='rounded-full h-16 w-16 object-cover object-center'/>
                                </Link>
                            </div>
                            <div className='flex-col space-y-1'>
                                <span className='text-text-gray text-opacity-90 font-semibold text-head'>
                                Çok elim bir olay....
                                </span>
                                <div className='space-x-5'>
                                <Link className='font-extrabold text-base'>0x...c508</Link>
                                <span className='text-text-gray text-opacity-90 font-semibold text-sm'>17.01.2023 17:36</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row space-x-4 items-center'>
                            <div>
                                <Link>
                                    <img src={image} alt="" className='rounded-full h-16 w-16 object-cover object-center'/>
                                </Link>
                            </div>
                            <div className='flex-col space-y-1'>
                                <span className='text-text-gray text-opacity-90 font-semibold text-head'>
                                Çok elim bir olay....
                                </span>
                                <div className='space-x-5'>
                                <Link className='font-extrabold text-base'>0x...c508</Link>
                                <span className='text-text-gray text-opacity-90 font-semibold text-sm'>17.01.2023 17:36</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='text-left py-10 space-y-7'>
                    <div className='text-3xl font-extrabold'>
                        Yorum Yazın (Buğra)
                    </div>
                    <div>
                        <textarea className='p-5 w-full shadow-md rounded-lg' name="comment" id="" cols="30" rows="10" placeholder='Siz de bir yorum yazın.'></textarea>
                    </div>
                    <div>
                        <button type="submit" className='bg-kb py-3 px-16 rounded uppercase text-sm text-white'>
                            Gönder
                        </button>
                    </div>
                </div>
            </div>
            <div className='basis-4/12'>
                <ContentRightSidebar/>
            </div>
        </div>
    </main>
  )
}

export default SinglePage