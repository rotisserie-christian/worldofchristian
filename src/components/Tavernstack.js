import React from 'react';
import { useEffect, useState } from 'react';
import Nav from './Nav';
import FirebaseCode from '../components/code-windows/FirebaseCode';
import TailwindCode from './code-windows/TailwindCode';
import Architecture from './charts/Architecture';
import TimestampMockup from './TimestampMockup';

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
              
              <p className='text-base font-base text-left mt-5 text-base-content'
              >Using DaisyUI with Tailwind allows for the same uniformity found in something like MaterialUI, 
              but with more flexability. It makes it easy to combine library components with those built from scratch.
              </p>
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
            >Given that Firebase charges per read/write, vertically scaled projects can potentially become 
            less profitable over time. However, since complex queries are not needed, the convenience of Firebase 
            outweighs it's limitations in this use case.
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
            >Caching data on the client side is a common practice. A menu can require dozens, or 
            even hundreds of reads for every page load. If the data doesn't change frequently, 
            a timestamp check can reduce unnecesary reads by serving the cached data instead.
            </p>
            
            <div className='flex items-center justify-center my-12'>
              <TimestampMockup />
            </div>

            <p className='text-base font-base text-left mt-5 text-base-content'
            >However if the data does change frequently, and isn't accessed often, the savings would 
            be negligible. If this disparity is large enough, the timestamp check may even produce an 
            additional, although marginal cost.<br /><br />
            
            Bars tend to be the former. Menu overhauls may involve hundreds of writes, but are a rare 
            occurence. Daily reads can easily number in the thousands. In this case, a timestamp check 
            significantly reduces the total number of reads.
            </p>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default Tavernstack;
