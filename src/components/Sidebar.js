import React, { Fragment } from 'react'
import { Outlet } from 'react-router'

const Sidebar = () => {
  return (
    <Fragment>
      <Outlet/>
    </Fragment>
  )
}

export default Sidebar