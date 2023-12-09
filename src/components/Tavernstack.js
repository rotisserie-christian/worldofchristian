import React from 'react';
import { useEffect, useState } from 'react';
import Nav from './Nav';
import FirebaseCode from '../components/code-windows/FirebaseCode';
import TailwindCode from './code-windows/TailwindCode';
import Architecture from './charts/Architecture';
import TimestampMockup from './TimestampMockup';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UnsavedChangesMockup from './UnsavedChangesMockup';

const Tavernstack = () => {
  const [showArchitecture, setShowArchitecture] = useState(false);
  const [showDatabaseOptimization, setShowDatabaseOptimization] = useState(false);
  const [showUIdev, setShowUIdev] = useState(true);

  // load to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
      
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
              needs to be written, which enables rapid design ideation.
              </p>

              <TailwindCode />

              <p className='text-base font-base text-left mt-5 text-base-content'
              >This is an example of how I would style a background when a modal is active. It contains 
              roughly one third of the characters that would be neccesary with traditonal CSS.</p>
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
            
            Netlify deploys server code on an edge network, where the functions run on-demand. This is highly efficient 
            because my Node functions are simple and likely to remain as such well into the future.
            </p>

            <div className='flex items-center justify-center my-12'>
            <Architecture />
            </div>

            <p className='text-base font-base text-left mt-5 text-base-content'
            >Because the data structure I'm working with is not particularly complicated, 
            growth scales horizontally.<br /><br />

            This represents a typical item that would be stored in a FirestoreDB collection. The menu comprises 
            the bulk of the user data and typically remains relatively constant in size.
            </p>

            <FirebaseCode />

            <p className='text-base font-base text-left text-base-content'
            >Because Firebase charges per read/write, complex queries can get expensive. Rather than vertically 
            expanding user data, this project is intended to grow by increasing total users and adding more client-side
            features. In this context, the convenience of Firebase outweighs it's limitations.
            </p>
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
              >A menu can require dozens, or even hundreds of reads for every page load. 
              If the data doesn't change frequently, a timestamp check can reduce unnecesary reads by 
              serving the cached data instead.
              </p>
              
              <div className='flex items-center justify-center my-12'>
                <TimestampMockup />
              </div>

              <p className='text-base font-base text-left mt-5 text-base-content'
              >However if the data does change frequently, and isn't accessed often, the savings would 
              be negligible. If this disparity is large enough, the timestamp check may even produce a 
              marginal cost.</p>

              <div className='flex items-center justify-center my-12'>
                <UnsavedChangesMockup />
              </div>
              
              <p className='text-base font-base text-left mt-5 text-base-content'
              >For bars, menu overhauls may require a lot of writes, but they happen infrequently. Daily reads 
              however, can easily number in the thousands. In this case, a timestamp check significantly reduces 
              database usage.
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
