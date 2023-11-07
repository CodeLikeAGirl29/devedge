import TypingAnimation from '../src/components/TypingAnimation';
import Layout from '../src/layout/Layout';

/**
 * Renders the Index component.
 *
 * @return {JSX.Element} The rendered component.
 */
const Index = () => {
  return (
    <Layout>
      <div className='section started' id='section-started'>
        {/* background */}
        <div className='video-bg'>
          <div className='video-bg-mask' />
          <div className='video-bg-texture' id='grained_container' />
        </div>
        {/* started content */}
<<<<<<< HEAD
        <div className='centralize full-width'>
=======
        <div className='centrize full-width'>
>>>>>>> 8ee3b4267dae07d402aa248f0e32223e568e3dd9
          <div className='vertical-center'>
            <div className='started-content'>
              <h1 className='h-title'>
                Hello, {`I’m`} <strong>Lindsey Howard</strong>, a Front-end
                Developer based in Ft Walton Beach, FL.
              </h1>
              <TypingAnimation extraClassName={'h-subtitle'} />
              <span className='typed-subtitle' />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Index;
