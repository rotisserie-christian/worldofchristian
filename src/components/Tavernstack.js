import React from 'react';
import { useEffect, useState } from 'react';
import Nav from './Nav';

const Tavernstack = () => {
  const [showArchitecture, setShowArchitecture] = useState(false);
  const [showDatabaseOptimization, setShowDatabaseOptimization] = useState(false);

  // load to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
      
  return (
    <>
    <Nav />

    <div className='flex items-center justify-center mt-16'>
      <div className='max-w-5xl'>
        <div
        className='flex-col my-12 p-2 mx-2'>
          <h1 className='text-5xl text-center font-bold text-base-content'
          >Tavernstack</h1>

          <p className='text-lg font-base text-center mt-5 text-base-content'
          >A digital menu platform for bars</p>

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
            Each Git repo has a CI/CD pipeline that deploys on Netlify.
            </p>

            <h2 className='text-2xl font-bold mt-12'
            >React</h2>

            <p className='text-base font-base text-left mt-5 text-base-content'
            >Tavernstack has many future use cases for solutions that run natively on mobile devices. 
            The idea of 'build once deploy everywhere' was a significant factor in the decision to use React.<br /><br />

            Had this not been the case, I would have chosen Svelte. The ability to access state across the application, 
            without relying on something like Redux, would have greatly reduced the complexity of my code.
            </p>

            <h2 className='text-2xl font-bold mt-12'
            >Tailwind
            </h2>

            <p className='text-base font-base text-left mt-5 text-base-content'
            >Tailwind's utility classes greatly reduce the amount of styling that 
            needs to be written, which enables rapid design ideation.
            </p>

            <div className='flex items-center justify-center my-12'>
              <div className='max-w-sm'>
                <div className="mockup-code">
                  <pre className='text-xs text-blue-400'><code>
                  <span className='text-slate-400'>{'<'}</span>
                  {'div'}</code></pre>
                  <pre className='text-xs text-blue-300'><code>{'className='}
                  <span className='text-orange-400'>{'"fixed inset-0 bg-black opacity-50 z-40"'}
                  </span><span className='text-slate-400'>{'>'}</span>
                  <span className='text-blue-400'></span></code></pre>
                </div>
              </div>
            </div>

            <p className='text-base font-base text-left mt-5 text-base-content'
            >This is an example of how I would style a background when a modal is active. It contains 
            roughly a third of the characters that would be neccesary with traditonal CSS.<br /><br />

            Using DaisyUI with Tailwind allows for the same uniformity found in something like MaterialUI, 
            but with more flexability. It makes it easy to combine library components with those built from scratch.
            </p>

            <h2 className='text-2xl font-bold mt-12'
            >Node</h2>

            <p className='text-base font-base text-left mt-5 text-base-content'
            >The one is fairly straightforward. Node is event-driven and Netlify deploys server code on an edge network, 
            where the functions run on-demand.<br /><br />

            This is highly efficient because my Node functions are simple and likely to remain as such well into the future.<br /><br />

            Had my back-end needs been more complex, I would have chosen Flask because Python is clearly better than Javascript. 
            </p>

            <h2 className='text-2xl font-bold mt-12'
            >Firebase</h2>

            <p className='text-base font-base text-left mt-5 text-base-content'
            >Because the data structure I'm working with is not particularly complicated, 
            growth scales horizontally.
            </p>

            <div className='flex items-center justify-center my-12'>
              <div className='max-w-sm'>
                <div className="mockup-code">
                <pre className='text-xs text-purple-500'><code>{'{'}</code></pre>

                  <pre className='text-xs text-blue-300'><code>{'    '}{'name:'}
                  <span className='text-orange-400'>{' '}{'"Original 16"'}</span></code>
                  <code><span className='text-white'>{','}</span></code></pre>

                  <pre className='text-xs text-blue-300'><code>{'    '}{'price:'}
                  <span className='text-orange-400'>{' '}{'"7"'}</span></code>
                  <code><span className='text-white'>{','}</span></code></pre>

                  <pre className='text-xs text-blue-300'><code>{'    '}{'description:'}
                  <span className='text-orange-400'>{' '}{'"16oz IPA"'}</span></code>
                  <code><span className='text-white'>{','}</span></code></pre>

                  <pre className='text-xs text-blue-300'><code>{'    '}{'category:'}
                  <span className='text-orange-400'>{' '}{'"Drinks"'}</span></code>
                  <code><span className='text-white'>{','}</span></code></pre>

                  <pre className='text-xs text-blue-300'><code>{'    '}{'subcategory:'}
                  <span className='text-orange-400'>{' '}{'"Draft"'}</span></code>
                  <code><span className='text-white'>{','}</span></code></pre>

                  <pre className='text-xs text-blue-300'><code>{'    '}{'gluten-free:'}
                  <span className='text-orange-400'>{' '}{'"false"'}</span></code>
                  <code><span className='text-white'>{','}</span></code></pre>

                  <pre className='text-xs text-blue-300'><code>{'    '}{'spicy:'}
                  <span className='text-orange-400'>{' '}{'"false"'}</span></code>
                  <code><span className='text-white'>{','}</span></code></pre>

                  <pre className='text-xs text-purple-500'><code>{'}'}</code>
                  <code><span className='text-white'>{','}</span></code></pre>
                </div>
              </div>
            </div>

            <p className='text-base font-base text-left mt-5 text-base-content'
            >This represents a typical item that would be stored in a FirestoreDB collection. The menu comprises 
            the bulk of the user data and typically remains relatively constant in size.<br /><br />

            Given that Firebase charges per read/write, vertically scaling projects can potentially become 
            less profitable over time. However, since complex queries are not needed, the convenience of Firebase 
            outweighs it's limitations in this use case.
            </p>
          </div>
          )}

          <button
          className="flex items-center justify-between w-full bg-base-200 px-4 py-4 rounded-md mt-5"
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
            a timestamp check can reduce unnecesary reads by serving the cached data instead.<br /><br />

            However if the data does change frequently, and isn't accessed often, the savings would 
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
