import React from 'react'

const TradCss = () => {
  return (
    <div className='flex items-center justify-center my-12'>
        <div className='max-w-sm'>
            <div className="mockup-code">
                <pre className='text-xs text-yellow-500'><code>{'.regular-css {'}</code></pre>
                
                <pre className='text-xs text-blue-400'><code>{'  position:'}
                <span className='text-orange-400'>{' fixed'}</span>
                <span className='text-white'>{';'}</span></code></pre>

                <pre className='text-xs text-blue-400'><code>{'  top:'}
                <span className='text-orange-400'>{' 0'}</span>
                <span className='text-white'>{';'}</span></code></pre>

                <pre className='text-xs text-blue-400'><code>{'  right:'}
                <span className='text-orange-400'>{' 0'}</span>
                <span className='text-white'>{';'}</span></code></pre>

                <pre className='text-xs text-blue-400'><code>{'  bottom:'}
                <span className='text-orange-400'>{' 0'}</span>
                <span className='text-white'>{';'}</span></code></pre>

                <pre className='text-xs text-blue-400'><code>{'  left:'}
                <span className='text-orange-400'>{' 0'}</span>
                <span className='text-white'>{';'}</span></code></pre>

                <pre className='text-xs text-blue-400'><code>{'  background-color:'}
                <span className='text-orange-400'>{' black'}</span>
                <span className='text-white'>{';'}</span></code></pre>

                <pre className='text-xs text-blue-400'><code>{'  opacity:'}
                <span className='text-orange-400'>{' 0.5'}</span>
                <span className='text-white'>{';'}</span></code></pre>

                <pre className='text-xs text-blue-400'><code>{'  z-index:'}
                <span className='text-orange-400'>{' 40'}</span>
                <span className='text-white'>{';'}</span></code></pre>

                <pre className='text-xs text-yellow-500'><code>{'}'}</code></pre>
            </div>
        </div>
    </div>

  )
}

export default TradCss