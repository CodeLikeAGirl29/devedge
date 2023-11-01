import dynamic from "next/dynamic";
import { useEffect } from "react";
import { CodingSkills } from "../src/components/Skills";
import Testimonials from "../src/components/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
import { createSkillsDot, dotResize } from "../src/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGear, faChartLine, faDatabase } from "@fortawesome/free-solid-svg-icons"

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
                    <a href="#section-portfolio">Works</a>
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
            style={{ backgroundImage: "url(images/started_image_p.jpg)" }}
          >
            <div className="video-bg-mask" />
            <div className="video-bg-texture" id="grained_container" />
          </div>
          {/* started content */}
          <div className="centrize full-width">
            <div className="vertical-center">
              <div className="started-content">
                <h1 className="h-title">
                  👋 Hello, I’m <strong>Lindsey Howard</strong>, UX/UI Designer
                  and <br />
                  Front-end Developer Based in Ft Walton Beach, FL.
                </h1>
                <TypingAnimation extraClassName={"typed-subtitle"} />
                <span className="typed-subtitle" />
              </div>
            </div>
          </div>
          {/* mosue button */}
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
            <div className="image">
              <img src="images/man_r.jpg" alt="" />
            </div>
            {/* desc */}
            <div className="desc">
              <p>
                👋 Hello! I’m Lindsey. 👩🏻‍💻 I am a passionate frontend developer with a strong commitment to transforming creative visions into engaging and functional web experiences. With a blend of design sensibility and technical prowess, I thrive on the challenges of crafting user-friendly, responsive, and visually appealing interfaces.
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
                <a href="https://drive.google.com/file/d/10_4A7OonKKo0n2phdl-7tKJhGV-Esezt/view?usp=sharing" className="btn hover-animated">
                  <span className="circle" />
                  <span className="lnk">Download CV</span>
                </a>
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
                      style={{ color: "#87c1ff" }}
                    />
                  </div>
                  <div className="name">Web Development</div>
                  <div className="text">
                    Creating custom websites from scratch, including designing the user interface, layout, and responsive design to ensure optimal viewing on various devices.
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
                    Connecting frontend interfaces with backend services through API integrations, enabling data retrieval and manipulation.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faGear}
                      style={{ color: "#87c1ff" }}
                    />
                  </div>
                  <div className="name">Web Maintenance</div>
                  <div className="text">
                    Providing ongoing maintenance, updates, and support for websites to keep them secure and up-to-date.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faChartLine}
                      style={{ color: "#87c1ff" }}
                    />
                  </div>
                  <div className="name">Performance Optimization</div>
                  <div className="text">
                    Improving website loading times and overall performance through code optimization, image compression, and other techniques.
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
                    Utilizing frontend frameworks like React, Angular, or Vue.js to build complex web applications with modular components.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faDatabase}
                      style={{ color: "#87c1ff" }}
                    />
                  </div>
                  <div className="name">CMS Integration</div>
                  <div className="text">
                    Changes and updates can be made in real-time, ensuring that your website remains current and relevant.
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
                      Assist painters in preparing & painting interior surfaces, such as walls, ceilings, & trim. Responsibilities include prepping surfaces, mixing paints, cleaning up job sites, & providing general support to ensure a smooth & efficient painting process.
                    </div>
                  </div>
                  <div className="resume-item content-box active">
                    <div className="date">2021 - Present</div>
                    <div className="name">Freelance - Web Developer</div>
                    <div className="text">
                      Elevate your online presence with a freelance web developer who brings your digital vision to life.
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">2016 - 2021</div>
                    <div className="name">
                      Sales & Marketing - Tristate Media
                    </div>
                    <div className="text">
                      Empower your business's growth with an experienced sales and marketing manager who drives results and maximizes your market potential.
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
                    <div className="text">
                      Full-Stack + Mobile Development
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">2020 - 2020</div>
                    <div className="name">Software Development - Thinkful</div>
                    <div className="text">
                      • Remote web development program, focused on learning HTML, CSS, Javascript, SQL, and associated frameworks (such as Node.js, React, jQuery, and PostgreSQL)<br />
                      • Designed mobile-first full-stack applications from conception to deployment, while learning industry best practices
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">Mar 2023</div>
                    <div className="name">Fundamentals of Digital Marketing - Google</div>
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
              <div className="title_inner">Design Skills</div>
            </div>
            {/* skills items */}
            <div className="skills percent content-box">
              <ul>
                <li>
                  <div className="name">Web Design</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "90%" }}>
                      <span className="percent">90%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">React</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "80%" }}>
                      <span className="percent">80%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Node.js & Express</div>
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
                  <div className="name">Team</div>
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
                  <div className="name">Create logo design</div>
                </li>
                <li>
                  <div className="name">Web development</div>
                </li>
                <li>
                  <div className="name">Modern and mobile-ready</div>
                </li>
                <li>
                  <div className="name">Advertising services include</div>
                </li>
                <li>
                  <div className="name">Graphics and animations</div>
                </li>
                <li>
                  <div className="name">Search engine marketing</div>
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
                    <span className="fas fa-person-hiking" />
                  </div>
                  <div className="name">Hiking</div>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-chess-knight" />
                  </div>
                  <div className="name">Chess</div>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-headphones" />
                  </div>
                  <div className="name">Music</div>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
              <div className="title_inner">Our Team</div>
            </div>
            {/* team items */}
            <div className="team-items">
              <div className="team-col">
                <div className="team-item content-box">
                  <div className="image">
                    <img src="images/team1.jpg" alt="" />
                  </div>
                  <div className="desc">
                    <div className="name">Lindsey Howard</div>
                    <div className="category">Web Developer</div>
                    <div className="soc">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.pinterest.com/"
                      >
                        <span className="icon fab fa-pinterest" />
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/"
                      >
                        <span className="icon fab fa-instagram" />
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://dribbble.com/"
                      >
                        <span className="icon fab fa-dribbble" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-col">
                <div className="team-item content-box">
                  <div className="image">
                    <img src="images/team2.jpg" alt="" />
                  </div>
                  <div className="desc">
                    <div className="name">Peter Green</div>
                    <div className="category">Back-end Developer</div>
                    <div className="soc">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.pinterest.com/"
                      >
                        <span className="icon fab fa-pinterest" />
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/"
                      >
                        <span className="icon fab fa-instagram" />
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://dribbble.com/"
                      >
                        <span className="icon fab fa-dribbble" />
                      </a>
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
              <div className="title_inner">Custom Text</div>
            </div>
            {/* clients items */}
            <div className="content-box">
              <div className="single-post-text">
                <p>
                  Now there is more fashion. There is no so-called trends. Now
                  chase after anything not necessary — nor for fashionable color
                  nor the shape, nor for style. Think about the content that you
                  want to invest in a created object, and only then will form.
                  The thing is your spirit. A spirit unlike forms hard copy.
                </p>
                <p>
                  Here choose yourself like that, without any looking back, do
                  your personal, home, small fashion, and all will be well.
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
              <div className="title_inner">Contacts</div>
            </div>
            {/* contacts items */}
            <div className="service-items">
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-phone" />
                  </div>
                  <div className="name">Phone</div>
                  <div className="text">+ (231) 456 67 89</div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-envelope" />
                  </div>
                  <div className="name">Email</div>
                  <div className="text">
                    <a href="mailto:steve-pearson@gmail.com">
                      steve-pearson@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-map-marker-alt" />
                  </div>
                  <div className="name">Address</div>
                  <div className="text">2621 W Pico Blvd, Los Angeles</div>
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
              <div className="title_inner">Hire Me</div>
            </div>
            {/* form */}
            <div className="contact_form content-box">
              <form id="cform" method="post">
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
                <p>Thanks, your message is sent successfully.</p>
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
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd"
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
