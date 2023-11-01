const About = () => {
  return (
    <div className="section about" id="next_section">
      <div className="content content-box">
        {/* image */}
        <div className="image">
          <img src="images/avatar-img.png" alt="" />
        </div>
        {/* desc */}
        <div className="desc">
          <p>
            Hello! I’m Lindsey. I've always been passionate about creating things and solving complex problems. When I discovered I could do both on the web, I was hooked. I've made websites for friends and family, and I even freelanced for a while. Now, I'm looking for a full-time role where I can really sink my teeth in and make an impact.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age:</strong> 32
              </li>
              <li>
                <strong>Residence:</strong> FL
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
            <a href="#" className="btn hover-animated">
              <span className="circle" />
              <span className="lnk">Download CV</span>
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
