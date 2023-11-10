import { DefaultPageBanner } from "../src/components/PageBanner";
import SingleBlog from "../src/components/SingleBlog";
import Layout from "../src/layout/Layout";

const WorkSingle = () => {
	const typingAnimation = [
		`<span class="typed-bread"> <a href="#">Home</a> / <a href="#">Projects</a> / Coding </span>`,
	];
	return (
		<Layout>
			<DefaultPageBanner
				pageName={"Frontend Coding"}
				typingData={typingAnimation}
			/>
			<SingleBlog />
		</Layout>
	);
};
export default WorkSingle;
