import React from 'react';
import { useEffect } from 'react';
import Nav from './Nav';

const Neuronotes = () => {
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
          >Neuronotes</h1>

          <p className='text-lg font-base text-center mt-5 text-base-content'
          >A learning resource for Psychology & Neuroscience</p>

          <h2 className='text-2xl font-bold mt-12'
          >Brain system diagrams</h2>

          <p className='text-base font-base text-left mt-5 text-base-content'
          >Many of the concepts discussed in the site's articles are illustrated with animated flowcharts
          created with react-flow.<br /><br />
          
          This library is very straightforward to use. Each node on the chart is stored
          in an array with values that dictate it's content.
          A second array stores the connections between nodes, specifying the start and endpoints.
          </p>

          <div className='flex items-center justify-center my-12'>
            <div className='max-w-sm'>
              <div className="mockup-code">
                <pre className='text-xs text-purple-500'><code>{'{'}</code></pre>

                <pre className='text-xs text-blue-300'><code>{'  '}{'id:'}
                <span className='text-orange-400'>{' '}{'"LGN"'}</span></code></pre>

                <pre className='text-xs text-blue-300'><code>{'  '}{'position:'}
                <span className='text-blue-500'>{' '}{'{'}</span>
                <span className='text-blue-400'>{' '}{'x:'}</span>
                <span className='text-teal-400'>{' '}{'175'}</span>
                <span className='text-white'>{','}</span>
                <span className='text-blue-400'>{' '}{'y:'}</span>
                <span className='text-teal-400'>{' '}{'300'}</span>
                <span className='text-blue-500'>{' '}{'}'}</span>
                <span className='text-white'>{','}</span></code></pre>

                <pre className='text-xs text-blue-300'><code>{'  '}{'data:'}
                <span className='text-blue-500'>{' '}{'{'}</span>
                <span className='text-blue-400'>{' '}{'label:'}</span>
                <span className='text-orange-400'>{' '}{'"Lateral Geniculate Nucleus"'}</span>
                <span className='text-blue-500'>{' '}{'}'}</span>
                <span className='text-white'>{','}</span></code></pre>

                <pre className='text-xs text-blue-300'><code>{'  '}{'draggable:'}
                <span className='text-blue-500'>{' '}{'False'}</span></code></pre>

                <pre className='text-xs text-purple-500'><code>{'}'}</code></pre>
              </div>
            </div>
          </div>

          <p className='text-base font-base text-left mt-5 text-base-content'
          >The ReactFlow component can then be rendered, with the data passed in as a prop. Additional props can be used
          to change the behaviour of the chart. In this case, I disabled the interactive features. This is because the charts
          can take up a lot of the viewport, and interactivity prevents page scrolling within the boundaries of the chart.
          </p>

          <h2 className='text-2xl font-bold mt-12'
          >Flashcards</h2>

          <p className='text-base font-base text-left mt-5 text-base-content'
          >Flashcards are a great way to accelerate learining, as they prompt the user to immedietly recall the information
          they just read.<br /><br />
          This component contains an array of question/answer pairs. A state variable called currentQuestion holds one of 
          these pairs, and another called showAnswer holds a boolean that determines if the question, or the answer, is to be displayed.<br /><br />

          When the component mounts, the useEffect hook calls a function that populates currentQuestion with a random selection from the array.<br /><br />

          When the user presses the 'show answer' button, a handler function will set showAnswer to true, and the component will
          render the answer in place of the question.
          </p>

          <div className='flex items-center justify-center my-12'>
            <div className='max-w-sm'>
              <div className="mockup-code">
                <pre className='text-xs text-blue-400'><code>
                <span className='text-xs text-slate-400'>{'<'}</span>{'div'}</code></pre>
                <pre className='text-xs text-blue-300'><code>{'className='}
                <span className='text-orange-400'>{'"font-regular text-medium mb-2"'}</span>
                <span className='text-xs text-slate-400'>{'>'}</span></code></pre>

                <pre className='text-xs text-purple-500'><code>{'  '}{'{'}</code></pre>
                <pre className='text-xs text-blue-400'><code>{'    '}{'showAnswer'}{' '}
                <span className='text-xs text-white'>{'?'}</span></code></pre>
                <pre className='text-xs text-blue-400'><code>{'    '}{'currentQuestion.'}
                <span className='text-xs text-blue-300'>{'question'}</span></code></pre>
                <pre className='text-xs text-white'><code>{'    '}{':'}</code></pre>
                <pre className='text-xs text-blue-400'><code>{'    '}{'currentQuestion.'}
                <span className='text-xs text-blue-300'>{'answer'}</span></code></pre>
                <pre className='text-xs text-purple-500'><code>{'  '}{'}'}</code></pre>

                <pre className='text-xs text-slate-400'><code>{'</'}
                <span className='text-xs text-blue-400'>{'div'}</span>{'>'}</code></pre>
              </div>
            </div>
          </div>

          <p className='text-base font-base text-left mt-5 text-base-content'
          >The user can also press a 'new question' button. This calls the function that selects a random 
          question/answer pair, and resets the showAnswer state to false.  
          </p>

          <h2 className='text-2xl font-bold mt-12'
          >Statistical test selector</h2>

          <p className='text-base font-base text-left mt-5 text-base-content'
          >This is a short quiz that helps the user decide which statistical test to use.<br /><br />

          At the start, the user selects one of the four NOIR categories for their data. They are then prompted 
          with a question, determined by their previous selection. One of four statistical 
          tests will be suggested based on their input, along with a short description of the test.<br /><br />

          State variables hold the current stage of the quiz, along with the user's selections. The UI elements are
          conditionally rendered on this basis. 
          </p>

          <div className='flex items-center justify-center my-12'>
            <div className='max-w-sm'>
              <div className="mockup-code">
                <pre className='text-xs text-blue-300'><code>{'onClick'}
                <span className='text-xs text-white'>{'='}</span>
                <span className='text-xs text-purple-500'>{'{'}</span>
                <span className='text-xs text-blue-400'>{'() => {'}</span></code></pre>

                <pre className='text-xs text-yellow-300'><code>{'setDataType'}
                <span className='text-xs text-yellow-500'>{'('}</span>
                <span className='text-xs text-teal-400'>{'2'}</span>
                <span className='text-xs text-yellow-400'>{')'}</span>
                <span className='text-xs text-white'>{';'}</span></code></pre>

                <pre className='text-xs text-yellow-300'><code>{'nextStep'}
                <span className='text-xs text-yellow-500'>{'('}</span>
                <span className='text-xs text-yellow-400'>{')'}</span>
                <span className='text-xs text-white'>{';'}</span></code></pre>

                <pre className='text-xs text-blue-400'><code>{'}'}
                <span className='text-xs text-purple-500'>{'}'}</span></code></pre> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Neuronotes;
