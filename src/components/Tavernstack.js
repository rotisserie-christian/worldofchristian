import React from 'react';
import { useEffect } from 'react';

const Tavernstack = () => {
    useEffect(() => {
        // Scroll to halfway down the page
        const scrollPosition = window.innerHeight / 2;
        window.scrollTo(0, scrollPosition);
    }, []);
      
  return (
    <>
    <div className='flex items-center justify-center'>
      <div className='max-w-5xl'>
        <div
        className='flex-col my-12 p-2'>
          <h1 className='text-4xl text-center font-bold text-base-content'
          >Tavernstack</h1>

          <p className='text-lg font-base text-center mt-5 text-base-content'
          >A website platform for the nightlife industry</p>

          <h2 className='text-2xl font-bold mt-12'
          >Menu builder app</h2>

          <p className='text-base font-base text-left mt-5 text-base-content'
          >This is the main feature and selling point of the application.<br /><br />
          This component allows the user to create, read, update, and delete their menu items.
          These items are stored as documents in a FirestoreDB collection, each containing values such as name and price, 
          as well as booleans like 'spicy' and 'vegan'. They also contain values for which category and subcategory the item belongs to.
          Rather than directly editing trees in the database, the app sorts the items into their respective categories, and the user
          edits these categories by changing the values assosiated with the item. This makes the CRUD actions more straightforward, while
          minimizing the amount of access that's needed to the database.<br /><br />
          
          There's also a few children that take in props from the main component. These are simple pop-up 
          modals that contain variables of either menu items, or menu categories. The variables appear in the main component next to an icon. 
          When selected by the user, a handler sends the corresponding data to the child modal, sets the modal's state to active, and the input
          fields within the modal are populated and can then be modified. A div with a slightly darkened background is placed underneath the modal
          in order to focus the user's attention onto the content.</p>

          <div className='flex items-center justify-center my-12'>
            <div className="mockup-code">
              <pre className='text-xs text-info'><code>{'<div'}</code></pre><pre className='text-xs text-success'><code>{'className'}</code></pre><pre className='text-xs'><code>{'="fixed inset-0 bg-black opacity-50 z-40"></div>'}</code></pre>
              <pre className='text-xs text-info'><code>{'    '}{'<div'}</code></pre><pre className='text-xs text-success'><code>{'    '}{'className'}</code></pre><pre className='text-xs'><code>{'    '}{'=className="bg-white p-8 rounded-xl shadow-lg w-96"></div>'}</code></pre>
            </div>
          </div>

          <p className='text-base font-base text-left mt-5 text-base-content'
          >The menu data is then displayed on the user's website in a similar manner to how the CRUD actions are performed. The data is sorted into categories
          and displayed in a read-only format. If any of the booleans are true, a corresponding icon (such as a chili pepper) will be rendered next to that item.
          Additionally, the categories themselves are implemented as accordion-style state variables. When active, the selected tab will turn blue. Only one category
          is able to be active at any given time, so as to keep the UI clean and the user's attention focused on their current selection.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Tavernstack;