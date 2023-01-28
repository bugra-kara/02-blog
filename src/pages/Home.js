import React, {Suspense, lazy, useEffect} from 'react'
import { Caption } from '../components'
import { usePublicContext } from '../context/publicContext'

const Home = () => {
  const { getAllContents, loading, headline} = usePublicContext()
  const MainComp = lazy(()=> import('../components/Main'))
  useEffect(()=> {
    console.log("here");
      getAllContents()
  },[])
  console.log(loading);
  if(!loading) {
    return (
      <main className=''>
        <Caption />
          <Suspense fallback={<div>Loading...</div>}>
          <MainComp />
        </Suspense>
      </main>
    )
  }
}

export default Home