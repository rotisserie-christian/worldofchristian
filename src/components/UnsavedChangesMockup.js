import React from 'react';
import { FaAngleRight, FaPencilAlt, FaTrash } from 'react-icons/fa';

const UnsavedChangesMockup = () => {
  return (
    <>
    <div className='max-w-xs'>
        <div className='mockup-code p-6'>
            <div className='flex items-center justify-center'>
                <div className='flex flex-col mt-6 mb-12'>
                    <h2 className='text-xl font-semibold text-center'
                    >Unsaved changes:</h2>

                    <div className='flex flex-row mt-4 w-full justify-between'>
                        <FaPencilAlt className='mr-2 text-blue-300' />

                        <div className='flex flex-row mt-2'>
                            <FaAngleRight 
                            className='mt-1 mr-1'
                            />

                            <p className='mr-2'
                            >Drinks
                            </p>
                        </div>

                        <div className='flex flex-row mt-2'>
                            <FaAngleRight 
                            className='mt-1 mr-1'
                            />

                            <p className='mr-2'
                            >Draft
                            </p>
                        </div>

                        <div className='flex flex-row mt-2'>
                            <FaAngleRight 
                            className='mt-1 mr-1'
                            />

                            <p
                            >Corona
                            </p>
                        </div>

                        <FaTrash className='ml-2 text-red-500'/>
                    </div>

                    <div className='flex flex-row mt-4 w-full justify-between'>
                        <FaPencilAlt className='mr-2 text-blue-300' />

                        <div className='flex flex-row mt-2'>
                            <FaAngleRight 
                            className='mt-1 mr-1'
                            />

                            <p className='mr-2'
                            >Drinks
                            </p>
                        </div>

                        <div className='flex flex-row mt-2'>
                            <FaAngleRight 
                            className='mt-1 mr-1'
                            />

                            <p className='mr-2'
                            >Draft
                            </p>
                        </div>

                        <div className='flex flex-row mt-2'>
                            <FaAngleRight 
                            className='mt-1 mr-1'
                            />

                            <p
                            >Modelo
                            </p>
                        </div>

                        <FaTrash className='ml-2 text-red-500'/>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default UnsavedChangesMockup