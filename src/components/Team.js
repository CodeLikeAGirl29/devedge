const Team = () => {
  return (
    <div className="section team" id="section-team">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Girl Behind the Code</div>
        </div>
        {/* team items */}
        <div className="team-items">
          <div className="team-col">
            <div className="team-item content-box">
              <div className="image">
                <img src="images/team1.png" alt="" />
              </div>
              <div className="desc">
                <div className="name">Lindsey Howard</div>
                <div className="category">Web Developer</div>
                <div className="soc">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.github.com/codelikeagirl29"
                  >
                    <span className="icon fab fa-github" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/lindsey-howard"
                  >
                    <span className="icon fab fa-linkedin-in" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://dribbble.com/codelikeagirl29"
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
  );
};
export default Team;
