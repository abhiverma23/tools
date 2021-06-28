import React from 'react';

function About() {
  return (
    <div>
      <h3 className='text-capitalize'>About website and usage</h3>
      <br />
      <p className='text-start'>
        This website is built to provide some basic tools which will assist you
        while you are doing web development.
      </p>
      <p className='text-start'>
        This website is completely based on ReactJS and doesn't have any backend
        service with which it can communicate. All the processing is done on the
        browser end and possibly stores a few required configurations in browser
        local storage to provide a better user experience.{' '}
        <span className='text-muted fst-italic'>
          (Currently, nothing will be stored in local storage)
        </span>
      </p>
    </div>
  );
}

export default About;
