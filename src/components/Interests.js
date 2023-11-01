const Interests = () => {
  return (
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
                <span className="fas fa-paw" />
              </div>
              <div className="name">Dog Sitting</div>
              <div className="text">
                Give your furry friend the love and care they deserve – book your trusted dog sitter today!
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
                Exploring new ideas and knowledge through research is not just a hobby; its a passion that fuels my curiosity
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-person-hiking" />
              </div>
              <div className="name">Hiking</div>
              <div className="text">
                Hiking isn't just a hobby; its a journey that takes me to new heights and lets me explore the beauty of the natural world
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
  );
};
export default Interests;
