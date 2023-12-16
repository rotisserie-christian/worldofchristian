import React from 'react';
import { useEffect, useState } from 'react';
import Nav from './Nav';
import TailwindCode from './code-windows/TailwindCode';
import Architecture from './charts/Architecture';
import TimestampMockup from './TimestampMockup';
import TradCss from './code-windows/TradCss';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Abstraction from './code-windows/Abstraction';
import MediaQ from './code-windows/MediaQ';

const Tavernstack = () => {
  const [showArchitecture, setShowArchitecture] = useState(false);
  const [showDatabaseOptimization, setShowDatabaseOptimization] = useState(false);
  const [showAbout, setShowAbout] = useState(true);
  const [showUIdev, setShowUIdev] = useState(false);

  // load to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //comment
      
  return (
    <>
    <Nav />

    <div className='flex items-center justify-center mt-16'>
      <div className='max-w-4xl'>
        <div
        className='flex-col my-12 p-2 mx-2'>
          <h1 className='text-4xl text-center font-bold text-base-content'
          >Tavernstack</h1>

          <p className='text-lg font-base text-center mt-5 text-base-content'
          >A digital menu platform for bars</p>

          <button
          className="flex items-center justify-between w-full bg-base-200 px-4 py-4 rounded-md mt-12"
          onClick={() => setShowAbout(!showAbout)}
          >About

          <svg
          className={`w-6 h-6 transition-transform duration-300 transform ${
              showUIdev ? 'rotate-90' : 'rotate-0'
              }`}
              viewBox="0 0 24 24"
              fill="currentColor">
          <path
          d="M9 5l7 7-7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round" />
          </svg>
          </button>
          
          {showAbout && (
            <div>
              <p className='text-xl font-semibold text-left mt-5 text-base-content'
              >The problem
              </p>

              <p className='text-base font-base text-left mt-5 text-base-content'
              >86% of consumers will look for an online menu before going out. UX research shows that users 
              tend to leave if it takes more than a few seconds to find what they're looking for.<br /><br />

              An optimized digital menu can translate to a lot of new business. A number of menu builders exist,
              but they're usually bundled with other tools into an expensive plan.<br /><br />

              This works great for high-volume venues that have a use for all of them, but the smaller places end
              up getting left out.
              </p>

              <p className='text-xl font-semibold text-left mt-12 text-base-content'
              >Solution
              </p>

              <p className='text-base font-base text-left mt-5 text-base-content'
              >Tavernstack offers a low cost app-like menu. It can be managed much like a social media profile 
              and integrates with their existing website.<br /><br />

              It's built to compliment their existing workflow, rather than forcing them to adapt to a new one. 
              </p>
            </div>
          )}

          <button
          className="flex items-center justify-between w-full bg-base-200 px-4 py-4 rounded-md mt-12"
          onClick={() => setShowUIdev(!showUIdev)}
          >UI development

          <svg
          className={`w-6 h-6 transition-transform duration-300 transform ${
              showUIdev ? 'rotate-90' : 'rotate-0'
              }`}
              viewBox="0 0 24 24"
              fill="currentColor">
          <path
          d="M9 5l7 7-7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round" />
          </svg>
          </button>

          {showUIdev && (
            <div>
              <p className='text-base font-base text-left mt-5 text-base-content'
              >Tailwind's utility classes greatly reduce the amount of styling that 
              needs to be written and encapsulates many best practices.
              </p>

              <TailwindCode />

              <p className='text-base font-base text-left mt-5 text-base-content'
              >This is an example of how I would style a background when a modal is active. It contains 
              roughly half of the characters that would be neccesary with traditonal CSS.</p>

              <TradCss />

              <p className='text-base font-base text-left mt-5 text-base-content'
              >It also abstracts away certain responsive design features. Classes can be prefixed with
              various viewport breakpoints, eliminating the need to write a media query.
              </p>

              <Abstraction />

              <MediaQ />
            </div>
          )}

          <button
          className="flex items-center justify-between w-full bg-base-200 px-4 py-4 rounded-md mt-12"
          onClick={() => setShowArchitecture(!showArchitecture)}
          >Architecture

          <svg
          className={`w-6 h-6 transition-transform duration-300 transform ${
              showArchitecture ? 'rotate-90' : 'rotate-0'
              }`}
              viewBox="0 0 24 24"
              fill="currentColor">
          <path
          d="M9 5l7 7-7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round" />
          </svg>
          </button>

          {showArchitecture && (
            <div>
            <p className='text-base font-base text-left mt-5 text-base-content'
            >This platform is a collection of web apps built using JAMstack methodology. 
            Each Git repo has a CI/CD pipeline that deploys on Netlify.<br /><br />
            
            Netlify hosts the client side on a global CDN and the server side on an edge network. This is 
            highly efficient, as my Node functions are simple event-driven requests that do not require 
            any extensive use of hardware.
            </p>

            <div className='flex items-center justify-center my-12'>
            <Architecture />
            </div>
          </div>
          )}

          <button
          className="flex items-center justify-between w-full bg-base-200 px-4 py-4 rounded-md mt-12"
          onClick={() => setShowDatabaseOptimization(!showDatabaseOptimization)}
          >Database optimization

          <svg
          className={`w-6 h-6 transition-transform duration-300 transform ${
              showDatabaseOptimization ? 'rotate-90' : 'rotate-0'
              }`}
              viewBox="0 0 24 24"
              fill="currentColor">
          <path
          d="M9 5l7 7-7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round" />
          </svg>
          </button>

          {showDatabaseOptimization && (
            <div>
              <p className='text-base font-base text-left mt-5 text-base-content'
              >Caching is a good practice, but it's especially important with Firebase because you pay
              per read/write. Checking if the menu has changed since the last visit can reduce unnecessary reads.
              </p>
              
              <div className='flex items-center justify-center my-12'>
                <TimestampMockup />
              </div>

              <p className='text-base font-base text-left mt-5 text-base-content'
              >However if the data changes frequently, and isn't accessed often, the savings would 
              be negligible. If this disparity is large enough, the timestamp check may even produce a 
              marginal cost.</p>
              
              <p className='text-base font-base text-left mt-5 text-base-content'
              >For bars, menu overhauls may require a lot of writes, but they happen infrequently. Daily reads 
              however, can easily number in the thousands.<br /><br /> 
              
              In this case, a timestamp check significantly reduces database usage.
              </p>

              <div className='flex items-center justify-center'>
                <div className='flex flex-col'>
                  <h2 className='text-2xl font-semibold mt-20'
                  >Done reading?</h2>
                  
                  <a
                  href='https://demo.tavernstack.com'
                  target='_blank'
                  rel='noreferrer'
                  >
                    <button className='btn btn-accent mt-6 w-full'
                    >Live demo <FaAngleDoubleRight className='ml-2' />
                    </button>
                  </a>

                  <Link to='/'>
                    <button className='btn btn-neutral mt-2 mb-20 w-full'
                    ><FaAngleDoubleLeft className='mr-2' />Back home
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default Tavernstack;
