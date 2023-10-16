import React, { useEffect, useState } from 'react';
import { FaAngleRight, FaAngleDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import Tavernstack from './Tavernstack';
import Cheetahmode from './Cheetahmode';
import Neuronotes from './Neuronotes';

const Home = () => {
  // state for the selected category
  const [activeCategory, setActiveCategory] = useState('');

  // state for the active component
  const [activeComponent, setActiveComponent] = useState(null);

  // toggler for the categories
  const toggleCategory = (category, componentName) => {
    setActiveCategory(prevCategory => (prevCategory === category ? '' : category));
    setActiveComponent(componentName);
  };

  // load to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // data for the categories
  const categories = [
    {
      category: 'Projects',
      items: [
        { name: 'Tavernstack' },
        { name: 'Neuronotes' },
        { name: 'Cheetahmode' },
      ],
    },
  ];

  return (
    <>
    <div className='flex items-center justify-center mb-20'>
        <div className='max-w-xl'>
            <div className='flex flex-col my-12'>
                <h1 className='text-4xl text-center font-bold text-base-content'
                >Christian Waters</h1>

                <p className='text-lg text-center mt-2 text-base-content'
                >React Developer</p>

                <div className='flex flex-row items-center justify-center mt-2'>
                    <FaGithub className='text-xl mt-2 mr-2'/>
                    <a 
                    className='text-base text-center mt-2 text-base-content underline cursor-pointer'
                    href='https://github.com/worldofchristian'
                    target='_blank'
                    rel='noreferrer'
                    >Github</a>
                </div>

                <div className='flex flex-row items-center justify-center mt-2'>
                    <FaLinkedin className='text-xl mt-2 mr-2'/>
                    <a 
                    className='text-base text-center mt-2 text-base-content underline cursor-pointer'
                    href='https://www.linkedin.com/in/cwaters96'
                    target='_blank'
                    rel='noreferrer'>Linkedin</a>
                </div>

                <p className='text-base text-center mt-12 text-base-content'
                >Hi there 👋 I build web apps with React, Tailwind, and Firebase</p>
                </div>

                <div className="container px-4 py-6">
                    <div className='flex items-center justify-center'>
                        <div className='max-w-md'>
                            {categories.map((category, index) => (
                                <div 
                                key={index} 
                                className="mb-6">
                                    <button 
                                    className="flex items-center justify-between gap-8 w-full bg-base-content p-4 rounded-lg shadow-sm"
                                    onClick={() => toggleCategory(category.category)}
                                    ><span className="text-lg text-slate-800 font-medium">{category.category}</span>

                                    {activeCategory === category.category ? (
                                    <FaAngleDown className="w-6 h-6 text-slate-800 transition-transform duration-300" />
                                    ) : (
                                    <FaAngleRight className="w-6 h-6 text-slate-800 transition-transform duration-300" />
                                    )}
                                    </button>

                                    {activeCategory === category.category && (
                                        <div className="mt-2">
                                            {category.items.map((item, index) => (
                                            
                                            <div 
                                            key={index} 
                                            className="flex my-4 items-center justify-between">
                                                <div className='flex'>
                                                    <FaAngleRight className='ml-4 mt-4 base-content' />
                                                    <h3 
                                                    className="text-lg text-base-content font-large my-2 underline cursor-pointer"
                                                    onClick={() => toggleCategory(category.category, item.name)}
                                                    >{item.name}</h3>
                                                </div>
                                            </div>
                                            ))}
                                        </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                {activeComponent === 'Tavernstack' && <Tavernstack />}
                {activeComponent === 'Neuronotes' && <Neuronotes />}
                {activeComponent === 'Cheetahmode' && <Cheetahmode />}
            </div>
        </div>
    </div>
    </>
  );
};

export default Home;