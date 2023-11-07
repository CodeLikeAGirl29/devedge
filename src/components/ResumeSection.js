const ResumeSection = () => {
  return (
    <div className='section resume' id='section-history'>
      <div className='content'>
        <div className='cols'>
          <div className='col col-md'>
            {/* title */}
            <div className='title'>
              <div className='title_inner'>Experience</div>
            </div>
            {/* resume items */}
            <div className='resume-items'>
              <div className='resume-item content-box active'>
                <div className='date'>2021 - Present</div>
                <div className='name'>Freelance - Web Developer</div>
                <div className='text'>
                  Elevate your online presence with a freelance web developer
                  who brings your digital vision to life.
                </div>
              </div>
              <div className="resume-item content-box active">
                <div className="date">2021 - Present</div>
                <div className="name">
                  JBL Coastal Painting - Painter
                </div>
                <div className="text">
                  As a painter&apos;s assistant,  I find joy in transforming dull spaces into vibrant, welcoming environments. Whether it&apos;s prepping surfaces or adding that final brushstroke, I take pride in being an integral part of creating beautiful and inspiring interiors.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2016 - 2021</div>
                <div className="name">
                  Sales & Marketing - Tristate Media
                </div>
                <div className="text">
                  Empower your business&apos;s growth with an experienced sales and marketing manager who drives results and maximizes your market potential.
                </div>
              </div>
              <div className='resume-item content-box'>
                <div className='date'>2015 - 2016</div>
                <div className='name'>Personal Assistant - CVS</div>
                <div className='text'>
                  Let a dedicated personal assistant simplify your life and
                  manage the details, so you can focus on what matters most.
                </div>
              </div>
            </div>
          </div>
          <div className='col col-md'>
            {/* title */}
            <div className='title'>
              <div className='title_inner'>Education</div>
            </div>
            {/* resume items */}
            <div className='resume-items'>
              <div className='resume-item content-box'>
                <div className='date'>2021 - 2022</div>
                <div className='name'>Nucamp - Coding Bootcamp</div>
                <div className='text'>
                  Full-Stack + Mobile Development | MERN stack
                </div>
              </div>
              <div className='resume-item content-box'>
                <div className='date'>2020 - 2020</div>
                <div className='name'>Software Development - Thinkful</div>
                <div className='text'>
                  <ul>
                    <li>
                      Remote web development program, focused on learning HTML,
                      CSS, Javascript, SQL, and associated frameworks (such as
                      Node.js, React, jQuery, and PostgreSQL)
                    </li>
                    <li>
                      Designed mobile-first full-stack applications from
                      conception to deployment, while learning industry best
                      practices.
                    </li>
                  </ul>
                </div>
              </div>
              <div className='resume-item content-box'>
                <div className='date'>Mar 2023</div>
                <div className='name'>
                  Fundamentals of Digital Marketing - Google
                </div>
                <div className='text'>
                  Importance of Digital Marketing in the Workplace.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumeSection;
