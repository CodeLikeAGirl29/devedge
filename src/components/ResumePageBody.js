import About from './About';
import CustomText from './CustomText';
import Interests from './Interests';
import ResumeSection from './ResumeSection';
import Service from './Service';
import {
	CodingSkills,
	DesignSkills,
	KnowledgeSkills,
	LanguagesSkills,
} from './Skills';
import Team from './Team';
import Testimonials from './Testimonials';
import Layout from '../layout/Layout';

const ResumePageBody = ({ Banner }) => {
	const typingAnimation = [
		`<span class="typed-bread"> <a href="#">Home</a>  / Resume </span>`,
	];
	return (
		<Layout>
			{/* Section Started */}
			<Banner pageName={'Resume'} typingData={typingAnimation} />
			{/* Section About */}
			<About />
			{/* Section Service */}
			<Service />
			{/* Section Resume */}
			<ResumeSection />
			{/* Section Design Skills */}
			<DesignSkills />
			{/* Section Languages Skills */}
			<LanguagesSkills />
			{/* Section Coding Skills */}
			<CodingSkills />
			{/* Section Knowledge Skills */}
			<KnowledgeSkills />
			{/* Section Interests */}
			<Interests />
			{/* Section Team */}
			<Team />
			{/* Section Testimonials */}
			<Testimonials />
			{/* Section Custom Text */}
			<CustomText />
		</Layout>
	);
};
export default ResumePageBody;
