import dynamic from "next/dynamic";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CodingSkills } from "../src/components/Skills";
import Testimonials from "../src/components/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
import { createSkillsDot, dotResize } from "../src/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCode,
	faGear,
	faChartLine,
	faDatabase,
} from "@fortawesome/free-solid-svg-icons";

const ItemIsotope = dynamic(() => import("../src/components/ItemIsotope"), {
	ssr: false,
});

const IndexOnePage = () => {
	useEffect(() => {
		return () => {
			dotResize();
			setTimeout(createSkillsDot, 1000);
		};
	}, []);

	return (
		<Layout noHeader>
			<header className="header">
				<div className="head-top">
					{/* menu button */}
					<a href="#" className="menu-btn">
						<span />
					</a>
					{/* logo */}
					<div className="logo hover-masks-logo">
						<a href="#">
							<span className="mask-lnk">
								Lindsey <strong>Howard</strong>
							</span>
							<span className="mask-lnk mask-lnk-hover">
								Download <strong>CV</strong>
							</span>
						</a>
					</div>
					{/* top menu */}
					<div className="top-menu hover-masks">
						<div className="top-menu-nav">
							<div className="menu-topmenu-container">
								<ul className="menu">
									<li className="menu-item current-menu-item">
										<a href="#section-started">Home</a>
									</li>
									<li className="menu-item">
										<a href="#section-about">Resume</a>
									</li>
									<li className="menu-item">
										<a href="#section-portfolio">Projects</a>
									</li>
									<li className="menu-item">
										<a href="#section-contacts">Contact</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>
			{/* Wrapper */}
			<div className="wrapper">
				{/* Section Started */}
				<div className="section started" id="section-started">
					{/* background */}
					<div
						className="video-bg jarallax"
						style={{ backgroundImage: "url(images/started_image_p.png)" }}
					>
						<div className="video-bg-mask" />
						<div className="video-bg-texture" id="grained_container" />
					</div>
					{/* started content */}
					<div className="centralize full-width">
						<div className="vertical-center">
							<div className="started-content">
								<h1 className="h-title">
									👋 Hello, I&apos;m <strong>Lindsey Howard</strong>, Front-end
									Developer based in Ft Walton Beach, FL.
								</h1>
								<TypingAnimation extraClassName={"typed-subtitle"} />
								<span className="typed-subtitle" />
							</div>
						</div>
					</div>
					{/* mouse button */}
					<a href="#" className="mouse_btn" style={{ display: "none" }}>
						<span className="icon fas fa-chevron-down" />
					</a>
				</div>
				{/* Section About */}
				<div className="section about" id="section-about">
					{/* title */}
					<div className="title">
						<div className="title_inner">About</div>
					</div>
					<div className="content content-box">
						{/* image */}
						<div
							className="image"
							style={{ width: "100%", height: "100%", position: "relative" }}
						>
							<Image
								src="images/avatar-img.png"
								alt=""
								layout="fill"
								objectFit="contain"
							/>
						</div>
						{/* desc */}
						<div className="desc">
							<p>
								👋 Hello! I&apos;m Lindsey. 👩🏻‍💻 I am a passionate frontend
								developer with a strong commitment to transforming creative
								visions into engaging and functional web experiences. With a
								blend of design sensibility and technical prowess, I thrive on
								the challenges of crafting user-friendly, responsive, and
								visually appealing interfaces.
							</p>
							<div className="info-list">
								<ul>
									<li>
										<strong>Age:</strong> 32
									</li>
									<li>
										<strong>Residence:</strong> Florida
									</li>
									<li>
										<strong>Freelance:</strong> Available
									</li>
									<li>
										<strong>Address:</strong> Ft Walton Beach, FL
									</li>
									<li>
										<strong>Phone:</strong> 850.865.2684
									</li>
									<li>
										<strong>E-mail:</strong> codelikeagirl91@gmail.com
									</li>
								</ul>
							</div>
							<div className="bts">
								<Link
									href="https://drive.google.com/file/d/10_4A7OonKKo0n2phdl-7tKJhGV-Esezt/view?usp=sharing"
									className="btn hover-animated"
								>
									<span className="circle" />
									<span className="lnk">Download CV</span>
								</Link>
							</div>
						</div>
						<div className="clear" />
					</div>
				</div>
				{/* Section Service */}
				<div className="section service" id="section-services">
					<div className="content">
						{/* title */}
						<div className="title">
							<div className="title_inner">Services</div>
						</div>
						{/* service items */}
						<div className="service-items">
							<div className="service-col">
								<div className="service-item content-box">
									<div className="icon">
										<FontAwesomeIcon
											icon={faCode}
											style={{ color: "#cbc3e3" }}
										/>
									</div>
									<div className="name">Web Development</div>
									<div className="text">
										Creating custom websites from scratch, including designing
										the user interface, layout, and responsive design to ensure
										optimal viewing on various devices.
									</div>
								</div>
							</div>
							<div className="service-col">
								<div className="service-item content-box">
									<div className="icon">
										<span className="fas fa-mobile" />
									</div>
									<div className="name">API Integration</div>
									<div className="text">
										Connecting frontend interfaces with backend services through
										API integrations, enabling data retrieval and manipulation.
									</div>
								</div>
							</div>
							<div className="service-col">
								<div className="service-item content-box">
									<div className="icon">
										<FontAwesomeIcon
											icon={faGear}
											style={{ color: "#cbc3e3" }}
										/>
									</div>
									<div className="name">Web Maintenance</div>
									<div className="text">
										Providing ongoing maintenance, updates, and support for
										websites to keep them secure and up-to-date.
									</div>
								</div>
							</div>
							<div className="service-col">
								<div className="service-item content-box">
									<div className="icon">
										<FontAwesomeIcon
											icon={faChartLine}
											style={{ color: "#cbc3e3" }}
										/>
									</div>
									<div className="name">Performance Optimization</div>
									<div className="text">
										Improving website loading times and overall performance
										through code optimization, image compression, and other
										techniques.
									</div>
								</div>
							</div>
							<div className="service-col">
								<div className="service-item content-box">
									<div className="icon">
										<span className="fas fa-laptop-code" />
									</div>
									<div className="name">Frontend</div>
									<div className="text">
										Utilizing frontend frameworks like React, Angular, or Vue.js
										to build complex web applications with modular components.
									</div>
								</div>
							</div>
							<div className="service-col">
								<div className="service-item content-box">
									<div className="icon">
										<FontAwesomeIcon
											icon={faDatabase}
											style={{ color: "#cbc3e3" }}
										/>
									</div>
									<div className="name">CMS Integration</div>
									<div className="text">
										Changes and updates can be made in real-time, ensuring that
										your website remains current and relevant.
									</div>
								</div>
							</div>
						</div>
						<div className="clear" />
					</div>
				</div>

				{/* Section Resume */}
				<div className="section resume" id="section-history">
					<div className="content">
						<div className="cols">
							<div className="col col-md">
								{/* title */}
								<div className="title">
									<div className="title_inner">Professional Experience</div>
								</div>
								{/* resume items */}
								<div className="resume-items">
									<div className="resume-item content-box active">
										<div className="date">2020 - Present</div>
										<div className="name">Assistant - JBL Coastal Painting</div>
										<div className="text">
											Assist painters in preparing & painting interior surfaces,
											such as walls, ceilings, & trim. Responsibilities include
											prepping surfaces, mixing paints, cleaning up job sites, &
											providing general support to ensure a smooth & efficient
											painting process.
										</div>
									</div>
									<div className="resume-item content-box active">
										<div className="date">2021 - Present</div>
										<div className="name">Freelance - Web Developer</div>
										<div className="text">
											Elevate your online presence with a freelance web
											developer who brings your digital vision to life.
										</div>
									</div>
									<div className="resume-item content-box">
										<div className="date">2016 - 2021</div>
										<div className="name">
											Sales & Marketing - Tristate Media
										</div>
										<div className="text">
											Empower your business&apos;s growth with an experienced
											sales and marketing manager who drives results and
											maximizes your market potential.
										</div>
									</div>
								</div>
							</div>
							<div className="col col-md">
								{/* title */}
								<div className="title">
									<div className="title_inner">Education</div>
								</div>
								{/* resume items */}
								<div className="resume-items">
									<div className="resume-item content-box">
										<div className="date">2021 - 2022</div>
										<div className="name">Nucamp - Coding Bootcamp</div>
										<div className="text">Full-Stack + Mobile Development</div>
									</div>
									<div className="resume-item content-box">
										<div className="date">2020 - 2020</div>
										<div className="name">Software Development - Thinkful</div>
										<div className="text">
											<ul>
												<li>
													Remote web development program, focused on learning
													HTML, CSS, Javascript, SQL, and associated frameworks
													(such as Node.js, React, jQuery, and PostgreSQL)
												</li>
												<li>
													Designed mobile-first full-stack applications from
													conception to deployment, while learning industry best
													practices
												</li>
											</ul>
										</div>
									</div>
									<div className="resume-item content-box">
										<div className="date">Mar 2023</div>
										<div className="name">
											Fundamentals of Digital Marketing - Google
										</div>
										<div className="text">
											Importance of Digital Marketing in the Workplace.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Section Design Skills */}
				<div className="section skills" id="section-skills">
					<div className="content">
						{/* title */}
						<div className="title">
							<div className="title_inner">Tech Skills</div>
						</div>
						{/* skills items */}
						<div className="skills percent content-box">
							<ul>
								<li>
									<div className="name">Graphic Design</div>
									<div className="progress ">
										<div className="percentage" style={{ width: "90%" }}>
											<span className="percent">90%</span>
										</div>
									</div>
								</li>
								<li>
									<div className="name">React.js</div>
									<div className="progress ">
										<div className="percentage" style={{ width: "80%" }}>
											<span className="percent">80%</span>
										</div>
									</div>
								</li>
								<li>
									<div className="name">Node.js + Express</div>
									<div className="progress ">
										<div className="percentage" style={{ width: "75%" }}>
											<span className="percent">75%</span>
										</div>
									</div>
								</li>
								<li>
									<div className="name">JavaScript</div>
									<div className="progress ">
										<div className="percentage" style={{ width: "85%" }}>
											<span className="percent">85%</span>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* Section Languages Skills */}
				<div className="section skills" id="section-skills-lang">
					<div className="content">
						{/* title */}
						<div className="title">
							<div className="title_inner">Soft Skills</div>
						</div>
						{/* skills items */}
						<div className="skills percent content-box">
							<ul>
								<li>
									<div className="name">Problem-solving</div>
									<div className="progress">
										<div className="percentage" style={{ width: "90%" }}>
											<span className="percent">90%</span>
										</div>
									</div>
								</li>
								<li>
									<div className="name">Communication</div>
									<div className="progress">
										<div className="percentage" style={{ width: "80%" }}>
											<span className="percent">80%</span>
										</div>
									</div>
								</li>
								<li>
									<div className="name">Freelancing</div>
									<div className="progress">
										<div className="percentage" style={{ width: "65%" }}>
											<span className="percent">65%</span>
										</div>
									</div>
								</li>
								<li>
									<div className="name">Sales</div>
									<div className="progress">
										<div className="percentage" style={{ width: "85%" }}>
											<span className="percent">85%</span>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* Section Coding Skills */}
				<CodingSkills />
				{/* Section Knowladge Skills */}
				<div className="section skills" id="section-skills-know">
					<div className="content">
						{/* title */}
						<div className="title">
							<div className="title_inner">Knowledge</div>
						</div>
						{/* skills */}
						<div className="skills list content-box">
							<ul>
								<li>
									<div className="name">Website hosting</div>
								</li>
								<li>
									<div className="name">React Native</div>
								</li>
								<li>
									<div className="name">Custom logo design</div>
								</li>
								<li>
									<div className="name">Web development</div>
								</li>
								<li>
									<div className="name">Modern and mobile-ready</div>
								</li>

								<li>
									<div className="name">Graphic design & Marketing</div>
								</li>
								<li>
									<div className="name">Social Media Management</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* Section Interests */}
				<div className="section service" id="section-interests">
					<div className="content">
						{/* title */}
						<div className="title">
							<div className="title_inner">Interests</div>
						</div>
						{/* interests items */}
						<div className="service-items">
							<div className="service-col">
								<div className="service-item content-box">
									<div className="icon">
										<span className="fas fa-mountain-sun" />
									</div>
									<div className="name">Hiking</div>
									<div className="text">
										Allowing me to escape the hustle and bustle of everyday life
										and find serenity in the embrace of nature&apos;s beauty.
									</div>
								</div>
							</div>
							<div className="service-col">
								<div className="service-item content-box">
									<div className="icon">
										<span className="fas fa-paw" />
									</div>
									<div className="name">Dog Sitting</div>
									<div className="text">
										Providing a loving home away from home for your furry friend
										while you&apos;re away.
									</div>
								</div>
							</div>
							<div className="service-col">
								<div className="service-item content-box">
									<div className="icon">
										<span className="fas fa-clipboard" />
									</div>
									<div className="name">Research</div>
									<div className="text">
										Exploring new ideas and knowledge through research is not
										just a hobby; its a passion that fuels my curiosity.
									</div>
								</div>
							</div>
						</div>
						<div className="clear" />
					</div>
				</div>
				{/* Section Team */}
				<div className="section team" id="section-team">
					<div className="content">
						{/* title */}
						<div className="title">
							<div className="title_inner">Find Me Here</div>
						</div>
						{/* team items */}
						<div className="team-items">
							<div className="team-col">
								<div className="team-item content-box">
									<div className="image">
										<Image
											src="images/team1.png"
											alt=""
											height={750}
											width={600}
											layout={"responsive"}
										/>
									</div>
									<div className="desc">
										<div className="name">Lindsey Howard</div>
										<div className="category">Web Developer</div>
										<div className="soc">
											<Link
												target="_blank"
												rel="noreferrer"
												href="https://www.github.com/codelikeagirl29"
											>
												<span className="icon fab fa-github" />
											</Link>
											<Link
												target="_blank"
												rel="noreferrer"
												href="https://www.linkedin.com/in/lindsey-howard"
											>
												<span className="icon fab fa-linkedin" />
											</Link>
											<Link
												target="_blank"
												rel="noreferrer"
												href="https://dribbble.com/codelikeagirl29"
											>
												<span className="icon fab fa-dribbble" />
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Section Testimonials */}
				<Testimonials />

				{/* Section Custom Text */}
				<div className="section custom-text" id="section-custom-text">
					<div className="content">
						{/* title */}
						<div className="title">
							<div className="title_inner">Hiring Me</div>
						</div>
						{/* clients items */}
						<div className="content-box">
							<div className="single-post-text">
								<p>
									Hiring me as a developer offers a multitude of benefits that
									stem from a unique combination of skills, experience, and a
									passion for solving complex problems. I bring to the table a
									deep and up-to-date understanding of a wide range of
									programming languages, frameworks, and technologies, enabling
									me to adapt quickly to your specific project needs.
								</p>
								<p>
									One of my key strengths is my commitment to producing
									high-quality, clean, and efficient code. I take pride in
									writing code that not only works but is also maintainable and
									scalable, which is vital for the long-term success of any
									software project. I am dedicated to adhering to industry best
									practices and coding standards, ensuring that the codebase
									remains organized and easily comprehensible, both for myself
									and for the entire development team.
								</p>
							</div>
						</div>
						<div className="clear" />
					</div>
				</div>
				{/* Works */}
				<div className="section works" id="section-portfolio">
					<div className="content">
						{/* title */}
						<div className="title">
							<div className="title_inner">Portfolio</div>
						</div>
						<ItemIsotope />
						<div className="clear" />
					</div>
				</div>
				{/* Section Contacts Info */}
				<div className="section contacts" id="section-contacts">
					<div className="content">
						{/* title */}
						<div className="title">
							<div className="title_inner">Contact</div>
						</div>
						{/* contacts items */}
						<div className="service-items">
							<div className="service-col">
								<div className="service-item content-box">
									<div className="icon">
										<span className="fas fa-phone" />
									</div>
									<div className="name">Phone</div>
									<div className="text">850.865.2684</div>
								</div>
							</div>
							<div className="service-col">
								<div className="service-item content-box">
									<div className="icon">
										<span className="fas fa-envelope" />
									</div>
									<div className="name">Email</div>
									<div className="text">
										<Link href="mailto:lindseykdev@gmail.com">
											lindseykdev@gmail.com
										</Link>
									</div>
								</div>
							</div>
							<div className="service-col">
								<div className="service-item content-box">
									<div className="icon">
										<span className="fas fa-map-marker-alt" />
									</div>
									<div className="name">Address</div>
									<div className="text">
										Mary Esther, Fort Walton Beach, Florida 32548
									</div>
								</div>
							</div>
							<div className="service-col">
								<div className="service-item content-box">
									<div className="icon">
										<span className="fas fa-user-tie" />
									</div>
									<div className="name">Freelance Available</div>
									<div className="text">I am available for Freelance hire</div>
								</div>
							</div>
						</div>
						<div className="clear" />
					</div>
				</div>
				{/* Section Contacts Form */}
				<div className="section contacts" id="section-contacts-form">
					<div className="content">
						{/* title */}
						<div className="title">
							<div className="title_inner">Send Me a Message:</div>
						</div>
						{/* form */}
						<div className="contact_form content-box">
							<form
								id="cform"
								method="post"
								action="https://formspree.io/f/xoqzngno"
							>
								<div className="group-val">
									<input type="text" name="name" placeholder="Name" />
								</div>
								<div className="group-val">
									<input type="email" name="email" placeholder="Email" />
								</div>
								<div className="group-val ct-gr">
									<textarea
										name="message"
										placeholder="Message"
										defaultValue={""}
									/>
								</div>
								<div className="group-bts">
									<button type="submit" className="btn hover-animated">
										<span className="circle" />
										<span className="lnk">Send Message</span>
									</button>
								</div>
							</form>
							<div className="alert-success">
								<p>Thanks, your message was sent successfully.</p>
							</div>
						</div>
					</div>
					<div className="clear" />
				</div>
				{/* Section Started */}
				<div className="section started section-title" id="section-map">
					{/* background */}
					<div className="video-bg">
						<div className="map" id="map">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55039.7558564629!2d-86.66854186784917!3d30.4365344845672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889116d2aaa0387d%3A0xe3a6ad0f3c9e67c7!2sFort%20Walton%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1698848081151!5m2!1sen!2sus"
								style={{ border: 0, width: "100%", height: "100%" }}
								allowFullScreen=""
								loading="lazy"
							/>
						</div>
						<div className="video-bg-mask" />
						<div className="video-bg-texture" id="grained_container" />
					</div>
				</div>
			</div>
		</Layout>
	);
};
export default IndexOnePage;
