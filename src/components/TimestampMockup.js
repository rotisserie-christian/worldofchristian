import React from 'react';
import { FaCheck, FaRegPlayCircle } from 'react-icons/fa';
import { HiRefresh } from "react-icons/hi";

const TimestampMockup = () => {
  return (
    <>
    <div className='max-w-xs'>
        <div className='mockup-code'>
            <div className='flex items-center justify-center'>
                <div className='flex flex-col mt-6 mb-12'>
                    <div className='flex flex-row'>
                        <HiRefresh className='mr-2 text-lg' />
                        
                        <p className='text-mdtracking-wide'
                        >Last updated <span className='underline'>8/12/23</span></p>
                    </div>

                    <button
                    className='btn btn-accent mt-4'
                    ><FaCheck className='mr-2' />Save changes</button>
                    
                    <button
                    className='btn text-white mt-2'
                    >Generate QR code</button>

                    <button 
                    className='btn text-white mt-2'
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