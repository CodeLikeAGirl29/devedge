import { Fragment, useEffect, useState } from 'react';

const Preloader = () => {
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    // setTimeout(() => {
    //   document.querySelector(".lines").className = "lines finish";
    // }, 1500);
    setTimeout(() => {
      document.querySelector('.lines').classList.add('ready');
    }, 3000);
    setTimeout(() => {
      setPreloader(false);
      document.querySelector('.lines').classList.add('finish');
    }, 1000);
  }, []);
  return (
    <Fragment>
      <div
        className='preloader'
        style={{ display: preloader ? 'block' : 'none' }}
      >
<<<<<<< HEAD
        <div className="centralize full-width">
          <div className="vertical-center">
            <div className="spinner">
              <div className="double-bounce1" />
              <div className="double-bounce2" />
=======
        <div className='centrize full-width'>
          <div className='vertical-center'>
            <div className='spinner'>
              <div className='double-bounce1' />
              <div className='double-bounce2' />
>>>>>>> 8ee3b4267dae07d402aa248f0e32223e568e3dd9
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Preloader;
