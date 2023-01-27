import React, {Suspense, lazy, useEffect} from 'react'
import { Caption } from '../components'
import { usePublicContext } from '../context/publicContext'

const Home = () => {
  const { getAllContents } = usePublicContext()
  const MainComp = lazy(()=> import('../components/Main'))
  useEffect(()=> {
    getAllContents()
  },[])
  return (
    <main className=''>
      <Caption />
        <Suspense fallback={<div>Loading...</div>}>
        <MainComp />
      </Suspense>
    </main>
  )
}

export default Home