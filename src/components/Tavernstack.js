import React from 'react';
import { useEffect } from 'react';

const Tavernstack = () => {
    useEffect(() => {
        // Scroll to halfway down the page
        const scrollPosition = window.innerHeight / 2;
        window.scrollTo(0, scrollPosition);
    }, []);
      
  return (
    <div>Tavernstack</div>
  )
}

export default Tavernstack;