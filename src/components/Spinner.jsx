import React from 'react'
import { ThreeCircles, ThreeDots } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <div className='flex justify-center w-full items-center '>
        <ThreeCircles
            visible={true}
            height="80"
            width="80"
            color="#335F32"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
    </div>
  )
}

export default Spinner