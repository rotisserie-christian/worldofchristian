import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Nav from './Nav';
import '@lottiefiles/lottie-player';
import { FaAngleDoubleDown } from 'react-icons/fa';

const Home = () => {
  return (
    <>
    <Nav />

    <div className='flex items-center justify-center'>
      <div className='max-w-md'>
        <div className='flex flex-col mt-28 mx-4'>
          <div 
          className='flex flex-row gap-4 justify-between items-center'>
            <div className='flex flex-col'>
              <div className='max-w-xs'>
                <h1 className='text-4xl text-left font-bold text-base-content'
                >Hello 👋</h1>

                <p className='text-lg font-base text-left mt-5 text-base-content'
                >I build user interfaces and full stack web applications</p>
              </div>
            </div>

            <div 
            className='flex flex-col p-4'>
              <div className='flex flex-row items-center'>
                  <FaGithub className='text-2xl mr-2'/>
                  <a 
                  className='text-base text-left text-base-content underline cursor-pointer'
                  href='https://github.com/worldofchristian'
                  target='_blank'
                  rel='noreferrer'
                  >Github</a>
              </div>

              <div className='flex flex-row items-center mt-2'>
                  <FaLinkedin className='text-2xl mt-2 mr-2'/>
                  <a 
                  className='text-base text-center mt-2 text-base-content underline cursor-pointer'
                  href='https://www.linkedin.com/in/cwaters96'
                  target='_blank'
                  rel='noreferrer'>Linkedin</a>
              </div>
            </div>
          </div>
        </div>

        <div
        className='flex items-center justify-center'>
          <div className='flex-col'>
            <lottie-player
            src="https://lottie.host/37cf5e61-b065-4216-aba4-59c520754b4d/ZnsvbDRGJ0.json"
            background="transparent"
            speed="1.5"
            style={{ width: '350px', height: '350px' }}
            loop
            autoplay
            ></lottie-player>

            <div className='flex items-center justify-center'>
              <button
              className='btn btn-neutral'
              >projects <FaAngleDoubleDown /></button>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;