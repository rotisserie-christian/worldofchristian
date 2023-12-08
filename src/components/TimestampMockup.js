import React from 'react';
import { FaCheck, FaRegPlayCircle } from 'react-icons/fa';
import { HiRefresh } from "react-icons/hi";

const TimestampMockup = () => {
  return (
    <>
    <div className='max-w-xs'>
        <div className='bg-slate-200 rounded-2xl shadow-md p-8'>
            <div className='flex items-center justify-center'>
                <div className='flex flex-col mt-6 mb-12'>
                    <div className='flex flex-row'>
                        <HiRefresh className='mr-2 text-slate-700 text-lg' />
                        
                        <p className='text-md text-slate-700 tracking-wide'
                        >Last updated <span className='underline'>8/12/23</span></p>
                    </div>

                    <button
                    className='btn btn-primary mt-4'
                    ><FaCheck className='mr-2' />Save changes</button>
                    
                    <button
                    className='btn btn-neutral text-white mt-2'
                    >Generate QR code</button>

                    <button 
                    className='btn btn-neutral text-white mt-2'
                    >Preview mode<FaRegPlayCircle className='text-xl ml-2' />
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default TimestampMockup