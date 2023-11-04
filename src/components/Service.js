const Service = () => {
  return (
    <div className='section service' id='section-services'>
      <div className='content'>
        {/* title */}
        <div className='title'>
          <div className='title_inner'>Services</div>
        </div>
        {/* service items */}
        <div className='service-items'>
          <div className='service-col'>
            <div className='service-item content-box'>
              <div className='icon'>
                <span className='fas fa-code' />
              </div>
              <div className='name'>Web Development</div>
              <div className='text'>
                Creating custom websites from scratch, including designing the
                user interface, layout, and responsive design to ensure optimal
                viewing on various devices.
              </div>
            </div>
          </div>
          <div className='service-col'>
            <div className='service-item content-box'>
              <div className='icon'>
                <span className='fas fa-chart-line' />
              </div>
              <div className='name'>Maintenence</div>
              <div className='text'>
                Stay ahead in the ever-evolving tech world by committing to
                continuous learning and staying curious about emerging trends.
              </div>
            </div>
          </div>
          <div className='service-col'>
            <div className='service-item content-box'>
              <div className='icon'>
                <span className='fas fa-ad' />
              </div>
              <div className='name'>SEO</div>
              <div className='text'>
                Boost your online visibility and drive organic traffic with
                expert SEO services that put your website at the top of search
                engine results
              </div>
            </div>
          </div>
          <div className='service-col'>
            <div className='service-item content-box'>
              <div className='icon'>
                <span className='fas fa-mobile' />
              </div>
              <div className='name'>API INtegration</div>
              <div className='text'>
                Connecting frontend interfaces with backend services through API
                integrations, enabling data retrieval and manipulation.
              </div>
            </div>
          </div>
          <div className='service-col'>
            <div className='service-item content-box'>
              <div className='icon'>
                <span className='fas fa-laptop-code' />
              </div>
              <div className='name'>Frontend</div>
              <div className='text'>
                Utilizing frontend frameworks like React, Angular, or Vue.js to
                build complex web applications with modular components.
              </div>
            </div>
          </div>
          <div className='service-col'>
            <div className='service-item content-box'>
              <div className='icon'>
                <span className='fas fa-chart-simple' />
              </div>
              <div className='name'>Performance</div>
              <div className='text'>
                Improving website loading times and overall performance through
                code optimization, image compression, and other techniques.
              </div>
            </div>
          </div>
        </div>
        <div className='clear' />
      </div>
    </div>
  );
};
export default Service;
