import TypingAnimation from '../src/components/TypingAnimation';
import Layout from '../src/layout/Layout';
/**
 * Renders the IndexImage component.
 *
 * @return {JSX.Element} The rendered component.
 */

const IndexImage = () => {
  return (
    <Layout>
      <div className='section started' id='section-started'>
        {/* background */}
        <div
          className='video-bg'
          style={{ backgroundImage: 'url(images/started_image_p.jpg)' }}
        >
          <div className='video-bg-mask' />
          <div className='video-bg-texture' id='grained_container' />
        </div>
        {/* started content */}
<<<<<<< HEAD
        <div className="centralize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <h1 className="h-title">
                Hello, I&apos;m <strong>Lindsey Howard</strong>, a
                Front-end Developer based in Ft Walton Beach, FL.
=======
        <div className='centrize full-width'>
          <div className='vertical-center'>
            <div className='started-content'>
              <h1 className='h-title'>
                Hello, I&apos;m <strong>Lindsey Howard</strong>, a Front-end
                Developer based in Ft Walton Beach, FL.
>>>>>>> 8ee3b4267dae07d402aa248f0e32223e568e3dd9
              </h1>
              <TypingAnimation extraClassName={'typed-subtitle'} />
              <span className='typed-subtitle' />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default IndexImage;
