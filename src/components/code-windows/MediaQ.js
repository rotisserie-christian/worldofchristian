import React from 'react'

const MediaQ = () => {
  return (
    <div className='flex items-center justify-center my-12'>
        <div className='max-w-sm'>
            <div className="mockup-code">
                <pre className='text-xs text-purple-400'><code>{'@media'}
                <span className='text-xs text-yellow-500'>{'('}</span>
                <span className='text-xs text-blue-300'>{'min-width:'}</span>
                <span className='text-xs text-teal-100'>{'768px'}</span>
                <span className='text-xs text-yellow-200'>{'  {'}</span>
                </code></pre>

                <pre className='text-xs text-yellow-500'><code>{'  .regular-css'}
                <span className='text-xs text-purple-500'>{'{'}</span>
                </code></pre>

                <pre className='text-xs text-blue-300'><code>{'    grid-template-columns:'}
                <span className='text-xs text-yellow-200'>{' repeat'}</span>
                <span className='text-xs text-blue-400'>{'('}</span>
                <span className='text-xs text-teal-100'>{'2,'}</span>
                <span className='text-xs text-yellow-200'>{' minmax('}</span>
                <span className='text-xs text-yellow-200'>{')'}</span>
                <span className='text-xs text-blue-400'>{')'}</span>
                <span className='text-xs text-white'>{';'}</span>
                </code></pre>

                <pre className='text-xs text-purple-500'><code>{'  }'}
                </code></pre>

                <pre className='text-xs text-yellow-200'><code>{'}'}
                </code></pre>
            </div>
        </div>
    </div>
  )
}

export default MediaQ