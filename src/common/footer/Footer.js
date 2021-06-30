import React from 'react';

function Footer() {
  return (
    <footer className='footer mt-5 py-3 bg-light'>
      <div className='text-center'>Copyright &copy; 2021</div>
      <div className='text-center'>
        Only Powered By{' '}
        <img
          src={process.env.PUBLIC_URL + '/logo192.png'}
          width='20'
          height='20'
          alt='no-img'
        />{' '}
        React
      </div>
    </footer>
  );
}

export default Footer;
