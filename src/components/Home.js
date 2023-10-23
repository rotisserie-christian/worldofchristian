import React, { useRef } from 'react';
import { FaAngleDoubleRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import Nav from './Nav';
import '@lottiefiles/lottie-player';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { BiLogoReact, BiLogoTailwindCss, BiLogoFirebase } from 'react-icons/bi';
import screen from '../img/screen.png';
import screenneronotes from '../img/screenneuronotes.png';
import screencheetahmode from '../img/screencheetahmode.png'

const Home = () => {
  const scrollRef = useRef(null);

  const handleBtnClick = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <Nav />

    <div className='flex items-center justify-center'>
      <div className='min-h-screen max-w-5xl'>

        {/* heading, links, animation, and scroll button*/}
        <div className='flex flex-col mt-28 mx-4'>
          <div className='flex items-center justify-center'>
            <div className='max-w-md'>
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

            <div className='flex items-center justify-center mb-40'>
              <button
              className='btn btn-neutral'
              onClick={handleBtnClick}
              >projects <FaAngleDoubleDown /></button>
            </div>
          </div>
        </div>

        {/* projects */}
        <div>
          {/* first two */}
          <div 
          className='flex item-center justify-center my-8'
          ref={scrollRef}
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-40 w-full max-w-5xl'>
              <div 
              className='bg-neutral-focus rounded-xl p-4'>
                <div 
                className='flex flex-col items-center justify-center'>
                  <h2 className='text-4xl font-bold mt-2'
                  >Tavernstack</h2>

                  <p className='text-lg font-base text-center mt-4'
                  >Website managment app for bars</p>
                  
                  <div 
                  className='flex flex-row mt-4'>
                    <img
                    src={screen}
                    alt='app screenshot'
                    className='max-w-[50%]'
                    />

                    <div 
                    className='flex flex-col'>
                      <div className='flex flex-row'>
                        <BiLogoReact className='text-2xl mt-12 mr-2'/>
                        
                        <p className='text-lg font-base text-left mt-11'
                        >React</p>
                      </div>

                      <div className='flex flex-row'>
                        <BiLogoTailwindCss className='text-2xl mt-5 mr-2'/>
                        
                        <p className='text-lg font-base text-left mt-5'
                        >Tailwind</p>
                      </div>

                      <div className='flex flex-row'>
                        <BiLogoFirebase className='text-2xl mt-5 mr-2'/>
                        
                        <p className='text-lg font-base text-left mt-5'
                        >Firebase</p>
                      </div>

                      <button
                      className='btn btn-neutral mt-20'
                      >live demo <FaAngleDoubleRight /></button>

                      <button
                      className='btn btn-neutral mt-2'
                      >read more <FaAngleDoubleRight /></button>
                    </div>
                  </div>
                </div>
              </div>

              <div 
              className='bg-neutral-focus rounded-xl p-4'>
                <div 
                className='flex flex-col items-center justify-center'>
                  <h2 className='text-4xl font-bold mt-2'
                  >Neuronotes</h2>

                  <p className='text-lg font-base text-center mt-4'
                  >Learning resource for psychology & neuroscience</p>
                  
                  <div 
                  className='flex flex-row mt-4'>
                    <img
                    src={screenneronotes}
                    alt='app screenshot'
                    className='max-w-[50%]'
                    />

                    <div 
                    className='flex flex-col'>
                      <div className='flex flex-row'>
                        <BiLogoReact className='text-2xl mt-12 mr-2'/>
                        
                        <p className='text-lg font-base text-left mt-11'
                        >React</p>
                      </div>

                      <div className='flex flex-row'>
                        <BiLogoTailwindCss className='text-2xl mt-6 mr-2'/>
                        
                        <p className='text-lg font-base text-left mt-6'
                        >Tailwind</p>
                      </div>

                      <button
                      className='btn btn-neutral mt-28'
                      >live site <FaAngleDoubleRight /></button>

                      <button
                      className='btn btn-neutral mt-2'
                      >read more <FaAngleDoubleRight /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* third */}
          <div className='flex items-center justify-center mb-20'>
            <div className='max-w-md'>
              <div 
              className='bg-neutral-focus rounded-xl p-4'>
                <div 
                className='flex flex-col items-center justify-center'>
                  <h2 className='text-4xl font-bold mt-2'
                  >Cheetahmode</h2>

                  <p className='text-lg font-base text-center mt-4'
                  >Running pace converter</p>
                  
                  <div 
                  className='flex flex-row mt-4'>
                    <img
                    src={screencheetahmode}
                    alt='app screenshot'
                    className='max-w-[50%]'
                    />

                    <div 
                    className='flex flex-col'>
                      <div className='flex flex-row'>
                        <BiLogoReact className='text-2xl mt-12 mr-2'/>
                        
                        <p className='text-lg font-base text-left mt-11'
                        >React</p>
                      </div>

                      <div className='flex flex-row'>
                        <BiLogoTailwindCss className='text-2xl mt-6 mr-2'/>
                        
                        <p className='text-lg font-base text-left mt-6'
                        >Tailwind</p>
                      </div>

                      <button
                      className='btn btn-neutral mt-28'
                      >live site <FaAngleDoubleRight /></button>

                      <button
                      className='btn btn-neutral mt-2'
                      >read more <FaAngleDoubleRight /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;