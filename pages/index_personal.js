import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";

const IndexPersonal = () => {
	return (
		<Layout>
			<div className="section started personal" id="section-started">
				{/* background */}
				<div className="video-bg">
					<div className="video-bg-mask" />
					<div className="video-bg-texture" id="grained_container" />
				</div>
				{/* started content */}
				<div className="centralize full-width">
					<div className="vertical-center">
						<div className="started-content">
							<div
								className="logo"
								style={{ backgroundImage: "url(images/avatar.png)" }}
							/>
							<h1 className="h-title">
								Hello, I&apos;m <strong>Lindsey Howard</strong>, a Front-end
								Developer with a keen eye to detail based in Fort Walton Beach,
								Florida.
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
export default IndexPersonal;
