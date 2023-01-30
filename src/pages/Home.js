import React, {Suspense, lazy, useEffect} from 'react'
import { Caption } from '../components'
import { usePublicContext } from '../context/publicContext'

const Home = () => {
  const { getAllContents, loading, headline} = usePublicContext()
  const MainComp = lazy(()=> import('../components/Main'))
  /* used timeout because of the database fetch problem */
  useEffect(()=> {
    if(headline.length === 0) {
      getAllContents()
    }
  },[])
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