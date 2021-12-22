import React from 'react';

const About = () => {
  return (
    <div>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details.
        <strong>
          <a
            className='text-cyan-400 hover:text-blue-600'
            href='https://github.com/Roshan-kumar123'
            target={'_blank'}
            rel='noopener noreferrer'
          >
            {' '}
            Roshan Kumar
          </a>
        </strong>
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:{' '}
        <a
          className='text-cyan-400 hover:text-blue-600'
          href='https://twitter.com/Roshanrajput123'
          target={'_blank'}
          rel='noopener noreferrer'
        >
          Roshan Kumar
        </a>
      </p>
    </div>
  );
};

export default About;
