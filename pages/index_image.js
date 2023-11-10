import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
/**
 * Renders the IndexImage component.
 *
 * @return {JSX.Element} The rendered component.
 */

const IndexImage = () => {
	return (
		<Layout>
			<div className="section started" id="section-started">
				{/* background */}
				<div
					className="video-bg"
					style={{ backgroundImage: "url(images/started_image_p.jpg)" }}
				>
					<div className="video-bg-mask" />
					<div className="video-bg-texture" id="grained_container" />
				</div>
				{/* started content */}
				<div className="centralize full-width">
					<div className="vertical-center">
						<div className="started-content">
							<h1 className="h-title">
								Hello, I&apos;m <strong>Lindsey Howard</strong>, a Front-end
								Developer with a keen eye to detail based in Fort Walton Beach, Florida.
							</h1>
							<TypingAnimation extraClassName={"typed-subtitle"} />
							<span className="typed-subtitle" />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
export default IndexImage;
