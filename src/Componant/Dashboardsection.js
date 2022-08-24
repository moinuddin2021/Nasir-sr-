import React from 'react'
import {AiFillRightCircle} from 'react-icons/ai';

const Dashboardsection = () => {
  return (
    <>
        <section className='flex items-center justify-center'>
            <div className=' w-3/4 mt-10 p-0 grid grid-cols-3 rounded drop-shadow-md truncate'>
                <div className='img bg-white col-span-2'>
                    <img className='w-full' src='./images/Dashboardsection.jpg' alt='Dashboardsection' />
                </div>
                <div className='content bg-[#020D46] flex flex-col justify-center items-center'>
                    <div className='primary p-2'>
                        <button class="bg-white text-[#020D46] font-bold py-2 px-6 rounded-full flex flex-row justify-center items-center w-full">Primary <AiFillRightCircle className='text-2xl ml-2'/></button>
                    </div>
                    <div className='secondary p-2'>
                        <button class="bg-white text-[#020D46] font-bold py-2 px-4 rounded-full flex flex-row justify-center items-center w-full">Secondary <AiFillRightCircle className='text-2xl ml-2'/></button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Dashboardsection
