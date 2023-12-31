import ContactSection from "../src/components/ContactSection";
import { CreativePageBanner } from "../src/components/PageBanner";
import CustomText from "../src/components/CustomText";
import Layout from "../src/layout/Layout";

const ContactsCreative = () => {
	const typingAnimation = [
		`<span class="typed-bread"> <a href="#">Home</a>  / Contact </span>`,
	];
	return (
		<Layout>
			<CreativePageBanner pageName={"Contact"} typingData={typingAnimation} />
			<ContactSection />
			<CustomText />
		</Layout>
	);
};
export default ContactsCreative;
