import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight, FaCheck, FaGithub, FaLinkedin } from 'react-icons/fa';
import Nav from './Nav';
import '@lottiefiles/lottie-player';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { BiLogoReact, BiLogoTailwindCss, BiLogoFirebase } from 'react-icons/bi';
import { FaNodeJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si'

const Home = () => {
  const scrollRef = useRef(null);

  const handleBtnClick = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <Nav />

    <div className='flex flex-col items-center justify-center'>
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

                    <p className='text-lg font-base text-left mt-2 text-base-content'
                    >I build full stack web applications</p>
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

        <div className='max-w-md'>
          <div 
          className='flex flex-col items-center justify-center'>
            <lottie-player
            src="https://lottie.host/37cf5e61-b065-4216-aba4-59c520754b4d/ZnsvbDRGJ0.json"
            background="transparent"
            speed="1.5"
            style={{ width: '275px', height: '275px' }}
            loop
            autoplay
            ></lottie-player>

            <div className='flex flex-row'>
              <FaCheck className='text-sm mr-2 mt-1' />

              <p className='text-md'
              >Test-driven development - Jest</p>
            </div>

            <div className='flex flex-row mt-2'>
              <FaCheck className='text-sm mr-2 mt-1' />

              <p className='text-md'
              >Centralized state managment - Redux</p>
            </div>

            <div className='flex flex-row mt-2'>
              <FaCheck className='text-sm mr-2 mt-1' />

              <p className='text-md'
              >Continuous deployment - Git/Netlify</p>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center mt-12'>
          <button
          className='btn btn-neutral'
          onClick={handleBtnClick}
          >projects <FaAngleDoubleDown /></button>
        </div>
      </div>

      {/* projects */}
      <div>
        <div 
        className='flex item-center justify-center mb-12'
        ref={scrollRef}
        >
          <div 
          className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-[30%] max-w-5xl'>
            <div 
            className='bg-neutral-focus rounded-xl p-6'>
              <div 
              className='flex flex-col items-center justify-center'>
                <h2 className='text-4xl font-bold mt-2'
                >Tavernstack</h2>

                <p className='text-lg font-base text-center mt-4'
                >Website managment app for bars</p>
                
                <div 
                className='flex flex-row mt-12'>
                  <div className='flex flex-row gap-8'>
                    <div 
                    className='flex flex-col'>
                      <div className='flex flex-row'>
                        <BiLogoReact className='text-2xl mt-1 mr-2'/>
                        
                        <p className='text-lg font-base text-left'
                        >Next/React</p>
                      </div>

                      <div className='flex flex-row'>
                        <BiLogoTailwindCss className='text-2xl mt-5 mr-2'/>
                        
                        <p className='text-lg font-base text-left mt-5'
                        >Tailwind</p>
                      </div>

                      <div className='flex flex-row'>
                        <FaNodeJs className='text-2xl mt-5 mr-2'/>
                        
                        <p className='text-lg font-base text-left mt-5'
                        >Node</p>
                      </div>

                      <div className='flex flex-row'>
                        <BiLogoFirebase className='text-2xl mt-5 mr-2'/>
                        
                        <p className='text-lg font-base text-left mt-5'
                        >Firebase</p>
                      </div>
                    </div>

                    <div className='flex flex-col'>
                      <a
                        href='https://demo.tavernstack.com'
                        alt='link to demo'
                        target='_blank'
                        rel="noreferrer"
                        >
                          <button
                          className='btn w-full btn-neutral'
                          >live demo <FaAngleDoubleRight /></button>
                        </a>
                        
                        <Link to='/tavernstack'>
                          <button
                          className='btn btn-neutral mt-2'
                          >read more <FaAngleDoubleRight /></button>
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div 
            className='bg-neutral-focus rounded-xl p-6'>
              <div 
              className='flex flex-col items-center justify-center'>
                <h2 className='text-4xl font-bold mt-2'
                >Neuronotes</h2>

                <p className='text-lg font-base text-center mt-4'
                >Learning resource for psychology & neuroscience</p>
                
                <div className='flex flex-row mt-12 gap-8'>
                  <div className='flex-col'>
                    <div className='flex flex-row'>
                      <BiLogoReact className='text-2xl mt-1 mr-2'/>
                      
                      <p className='text-lg font-base text-left'
                      >React</p>
                    </div>

                    <div className='flex flex-row'>
                      <BiLogoTailwindCss className='text-2xl mt-6 mr-2'/>
                      
                      <p className='text-lg font-base text-left mt-6'
                      >Tailwind</p>
                    </div>
                  </div>

                  <div className='flex flex-col'>
                    <a
                      href='https://neuronotes.netlify.app'
                      alt='link to neuronotes'
                      target='_blank'
                      rel="noreferrer"
                      >
                        <button
                        className='btn btn-neutral w-full'
                        >live site <FaAngleDoubleRight /></button>
                      </a>

                      <Link to='/neuronotes'>
                        <button
                        className='btn btn-neutral mt-2'
                        >read more <FaAngleDoubleRight /></button>
                      </Link>
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