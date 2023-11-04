import { ImagePageBanner } from '../src/components/PageBanner';
import SingleBlog from '../src/components/SingleBlog';
import Layout from '../src/layout/Layout';

const WorkSingleImg = () => {
  const typingAnimation = [
    `<span class="typed-bread"> <a href="#">Home</a> / <a href="#">Projects</a> / Coding </span>`,
  ];
  return (
    <Layout>
      <ImagePageBanner
        pageName={'Frontend Coding'}
        typingData={typingAnimation}
        bannerImg='images/works_single.png'
      />
      <SingleBlog />
    </Layout>
  );
};
export default WorkSingleImg;
