import React from 'react';
import { useEffect } from 'react';
import Nav from './Nav';

const Tavernstack = () => {
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
        className='flex-col my-12 p-2'>
          <h1 className='text-5xl text-center font-bold text-base-content'
          >Tavernstack</h1>

          <p className='text-lg font-base text-center mt-5 text-base-content'
          >A website platform for the nightlife industry</p>

          <h2 className='text-2xl font-bold mt-12'
          >Menu builder app</h2>

          <p className='text-base font-base text-left mt-5 text-base-content'
          >This is the main feature and selling point of the application.<br /><br />
          This component allows the user to create, read, update, and delete their menu items.
          </p>

          <p className='text-base font-base text-left mt-5 text-base-content'
          >These items are stored as documents in a FirestoreDB collection, each containing values such as name and price, 
          as well as booleans like 'spicy' and 'vegan'. They also contain values for which category and subcategory the item belongs to. 
          The app sorts the items into their respective categories, and the user edits these categories by changing the values assosiated 
          with the item.
          </p>

          <div className='flex items-center justify-center my-12'>
            <div className='max-w-md'>
              <div className="mockup-code">
                <pre className='text-xs text-yellow-400'><code>{'['}</code></pre>

                <pre className='text-xs text-blue-300'><code>{'    '}{'name:'}
                <span className='text-orange-400'>{' '}{'"Original 16"'}</span></code></pre>

                <pre className='text-xs text-blue-300'><code>{'    '}{'price:'}
                <span className='text-orange-400'>{' '}{'"7"'}</span></code></pre>

                <pre className='text-xs text-blue-300'><code>{'    '}{'description:'}
                <span className='text-orange-400'>{' '}{'"16oz IPA"'}</span></code></pre>

                <pre className='text-xs text-blue-300'><code>{'    '}{'category:'}
                <span className='text-orange-400'>{' '}{'"Drinks"'}</span></code></pre>

                <pre className='text-xs text-blue-300'><code>{'    '}{'subcategory:'}
                <span className='text-orange-400'>{' '}{'"Draft"'}</span></code></pre>

                <pre className='text-xs text-blue-300'><code>{'    '}{'gluten-free:'}
                <span className='text-orange-400'>{' '}{'"false"'}</span></code></pre>

                <pre className='text-xs text-blue-300'><code>{'    '}{'spicy:'}
                <span className='text-orange-400'>{' '}{'"false"'}</span></code></pre>

                <pre className='text-xs text-yellow-400'><code>{']'}</code></pre>
              </div>
            </div>
          </div>

          <p className='text-base font-base text-left mt-5 text-base-content'
          >There's also a few children that take in props from the main component. These are simple pop-up 
          modals that handle user input.
          </p>

          <p className='text-base font-base text-left mt-5 text-base-content'
          >In the main component, each menu item and category has corresponding edit and delete icon. When selected by the user, a handler 
          sends the selected data to the modal component, sets the modal state to active, and the input fields within the modal are populated and 
          can then be modified. A div with a slightly darkened background is placed underneath the modal in order to focus the user's attention toward the content.
          </p>

          <div className='flex items-center justify-center my-12'>
            <div className='max-w-md'>
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
          >The menu data is then displayed on the user's website in a similar manner to how the CRUD actions are performed. The data is sorted into categories
          and displayed in a read-only format.<br /><br />
          
          If any of the booleans are true, a corresponding icon (such as a chili pepper) will be rendered next to that item.
          Additionally, the categories themselves are implemented as accordion-style state variables. When active, the selected tab will turn blue. Only one category
          is able to be active at any given time, so as to keep the UI clean.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Tavernstack;