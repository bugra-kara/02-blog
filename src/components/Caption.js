import React from 'react'
import { Slider, FourCard } from '../components'
import { usePublicContext } from '../context/publicContext'
const Caption = () => {
  const {headline} = usePublicContext()
  return (
    <>
    <div className='container flex flex-col lg:flex-row px-2 sm:px-2 md:px-3 lg:px-9 xl:px-12 w-full lg:space-x-4 mt-8'>
      {headline.length !== 0 && headline !== undefined ? <Slider caption={headline[0]} /> : ""}
      {headline.length !== 0 && headline !== undefined ? <FourCard fourCard={headline}/> : ""}
    </div>
    </>
  )
}

export default Caption