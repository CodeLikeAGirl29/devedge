import { DefaultPageBanner } from '../src/components/PageBanner';
import ResumePageBody from '../src/components/ResumePageBody';

/**
 * Renders the Resume component.
 *
 * @return {JSX.Element} The rendered Resume component.
 */

const Resume = () => {
  return <ResumePageBody Banner={DefaultPageBanner} />;
};
export default Resume;
