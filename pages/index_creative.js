// import ItemIsotope from "../src/components/ItemIsotope";
import dynamic from 'next/dynamic';
import TypingAnimation from '../src/components/TypingAnimation';
import Layout from '../src/layout/Layout';

const ItemIsotope = dynamic(() => import('../src/components/ItemIsotope'), {
  ssr: false,
});
const IndexCreative = () => {
  return (
    <Layout>
      {/* Section Started */}
      <div className='section started layout-creative' id='section-started'>
        {/* background */}
        <div className='video-bg'>
          <div className='video-bg-mask' />
          <div className='video-bg-texture' id='grained_container' />
        </div>
        {/* started content */}
<<<<<<< HEAD
        <div className="centralize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <h1 className="h-title">
                Hello, {`I’m`} <strong>Lindsey Howard</strong>,Front-end Developer based in Ft Walton Beach, Florida.
=======
        <div className='centrize full-width'>
          <div className='vertical-center'>
            <div className='started-content'>
              <h1 className='h-title'>
                Hello, {`I’m`} <strong>Lindsey Howard</strong>, Web Developer
                based in Ft Walton Beach, Florida.
>>>>>>> 8ee3b4267dae07d402aa248f0e32223e568e3dd9
              </h1>
              <div className='h-subtitles' style={{ opacity: '1' }}>
                <TypingAnimation extraClassName={'h-subtitle'} />
                <span className='typed-subtitle' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Works */}
      <div className='section works' id='section-portfolio'>
        <div className='content'>
          <ItemIsotope />
          <div className='clear' />
        </div>
      </div>
    </Layout>
  );
};
export default IndexCreative;
