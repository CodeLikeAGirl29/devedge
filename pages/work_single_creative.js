import { CreativePageBanner } from '../src/components/PageBanner';
import SingleBlog from '../src/components/SingleBlog';
import Layout from '../src/layout/Layout';

const WorkSingleCreative = () => {
  const typingAnimation = [
    `<span class="typed-bread"> <a href="#">Home</a> / <a href="#">Projects</a> / Coding </span>`,
  ];
  return (
    <Layout>
      <CreativePageBanner pageName={'Coding'} typingData={typingAnimation} />
      <SingleBlog />
    </Layout>
  );
};
export default WorkSingleCreative;
