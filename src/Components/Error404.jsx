import React from 'react'

export default function Error404() {
  return (
    <div className='container'>
        <b><h1 style={{fontSize:'50px'}} className='text-center'>404</h1></b>
        <h3 className='text-center'>Page Not Found</h3>
        <a href='/' className='btn btn-success' >Home</a>
    </div>
  )
}
