import React from 'react';
import Spinner from 'react-bootstrap/Spinner';


export default function Loading() {
  return (
    <div className='flex row justify-content-center align-items-center h-100 w-100 m-auto'>
      <Spinner animation="border" role="status" className='mr-auto ml-auto'>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}
