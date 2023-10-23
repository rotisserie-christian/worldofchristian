import React from 'react';
import photocircle from '../img/photocircle.PNG'

const Nav = () => {
  return (
    <>
    <nav
    className='flex items-center w-full py-4 fixed top-0 z-20 bg-slate-700 backdrop-filter bg-opacity-30 backdrop-blur-xl'>
        <div className='w-full flex justify-between items-center max-w-5xl mx-auto'>
            <div className='flex flex-row items-center gap-2 ml-4'>
                <img
                src={photocircle}
                alt='christian'
                className='w-12 h-12 object-contain'
                />

                <p className='text-lg font-semibold'
                >Christian Waters</p>
            </div>

            <button
            className='btn btn-accent mr-4'
            >contact</button>
        </div>
    </nav>
    </>
  )
}

export default Nav