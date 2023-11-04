import { Fragment, useEffect, useRef } from 'react';
import Typed from 'typed.js';

const AnimationText = ({ typingData, extraClass }) => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const typed = new Typed(el.current, {
        strings: typingData
          ? typingData
          : [
              'Code. <strong>Design</strong>. Delight.',
              'Creativity<strong> meets</strong> code.',
              'Pixel <strong>Perfect</strong> Precision.',
            ], // Strings to display
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 200,
        smartBackspace: true,
        loop: false,
        showCursor: true,
      });

      // Destropying
      return () => {
        typed.destroy();
      };
    }, 2000);
  }, []);
  return (
    <div className='h-subtitles ready'>
      <span className={extraClass} ref={el}></span>
    </div>
  );
};

const BannerContent = ({ pageName, pageTitle, typingData, extraClass }) => {
  return (
    <Fragment>
      <div className='centrize full-width'>
        <div className='vertical-center'>
          <div className='started-content'>
            <h1 className='h-title'>{pageTitle ? pageTitle : pageName}</h1>
            <AnimationText typingData={typingData} extraClass={extraClass} />
          </div>
        </div>
      </div>
      {/* mosue button */}
      <a href='#next_section' className='mouse_btn'>
        <span className='icon fas fa-chevron-down' />
      </a>
    </Fragment>
  );
};

export const DefaultPageBanner = ({
  pageName,
  pageTitle,
  typingData,
  extraClass,
}) => (
  <div className='section started section-title' id='section-started'>
    {/* background */}
    <div className='video-bg'>
      <div className='video-bg-mask' />
      <div className='video-bg-texture' id='grained_container' />
    </div>
    {/* started content */}
    <BannerContent
      typingData={typingData}
      pageName={pageName}
      pageTitle={pageTitle}
    />
  </div>
);
export const ImagePageBanner = ({
  pageName,
  pageTitle,
  typingData,
  extraClass,
  bannerImg,
}) => {
  useEffect(() => {
    let { jarallax, jarallaxVideo } = require('jarallax');
    jarallaxVideo();
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.5,
      keepImg: true,
      automaticResize: true,
      videoVolume: 0,
    });
  }, []);

  return (
    <div className='section started section-title' id='section-started'>
      {/* background */}
      <div
        className='video-bg jarallax'
        style={{
          backgroundImage: `url(${
            bannerImg ? bannerImg : 'images/resume_bg.jpg'
          })`,
        }}
      >
        <div className='video-bg-mask' />
        <div className='video-bg-texture' id='grained_container' />
      </div>
      {/* started content */}

      <BannerContent
        typingData={typingData}
        pageName={pageName}
        pageTitle={pageTitle}
        extraClass={extraClass}
      />
    </div>
  );
};

export const CreativePageBanner = ({
  pageName,
  pageTitle,
  typingData,
  extraClass,
}) => {
  return (
    <div className='section started layout-creative' id='section-started'>
      {/* background */}
      <div className='video-bg'>
        <div className='video-bg-mask' />
        <div className='video-bg-texture' id='grained_container' />
      </div>
      {/* started content */}
      <BannerContent
        typingData={typingData}
        pageName={pageName}
        pageTitle={pageTitle}
        extraClass={extraClass}
      />
    </div>
  );
};

export const MapBanner = ({ typingData, extraClass }) => {
  return (
    <div className='section started section-title' id='section-started'>
      {/* background */}
      <div className='video-bg'>
        <div className='map'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55039.7558564629!2d-86.66854186784917!3d30.4365344845672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889116d2aaa0387d%3A0xe3a6ad0f3c9e67c7!2sFort%20Walton%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1698380874759!5m2!1sen!2sus'
            style={{ border: 0, width: '100%', height: '100%' }}
            allowFullScreen=''
            loading='lazy'
          />
        </div>
        <div className='video-bg-mask' />
        <div className='video-bg-texture' id='grained_container' />
      </div>
      {/* started content */}
      <div className='centrize full-width'>
        <div className='vertical-center'>
          <div className='started-content'>
            <h1 className='h-title'>Contact</h1>
            <AnimationText typingData={typingData} extraClass={extraClass} />
          </div>
        </div>
      </div>
      {/* mosue button */}
      <a href='#next_section' className='mouse_btn'>
        <span className='icon fas fa-chevron-down' />
      </a>
    </div>
  );
};
