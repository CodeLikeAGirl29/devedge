const SingleBlog = () => {
  return (
    <div className="section blog" id="next_section">
      <div className="content content-box">
        <div className="single-post-text">
          {/* portfolio content */}
          <div className="portfolio-info portfolio-cols">
            <div className="description-col">
              {/* title */}
              <div className="title">
                <div className="title_inner">Description</div>
              </div>
              {/* text */}
              <div className="single-post-text">
                <p>
                  Blogging is a fantastic way to share your thoughts, insights, and creativity with the world. Whether you're a seasoned blogger or just starting, it's essential to create a visually appealing and user-friendly blog. In this tutorial, we'll guide you through the process of creating and styling a stunning HTML/CSS blog. With a little HTML and CSS knowledge, you can craft a personalized and beautiful online space that reflects your unique style.
                </p>
                <p>
                  Here choose yourself like that, without any looking back, do
                  your personal, home, small fashion, and all will be well.
                </p>
                <p>
                  My job is simple and sophisticated, so it is possible to
                  describe and simple, and flowery language. I love the feel and
                  sophistication of its superiority. I like people with a keen
                  mind and at the same time easy to talk to. These qualities can
                  be combined perfectly natural. However, things like people
                  look miserable, if these properties are connected to them
                  artificially.
                </p>
                {/* gallery */}
                <div className="gallery-item">
                  <p>
                    <a href="images/work1.png">
                      <img src="images/work1.png" alt="" />
                    </a>
                  </p>
                  <p>
                    <a href="images/work2.png">
                      <img src="images/work2.png" alt="" />
                    </a>
                  </p>
                  <p>
                    <a href="images/work3.png">
                      <img src="images/work3.png" alt="" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="details-col">
              {/* title */}
              <div className="title">
                <div className="title_inner">Details</div>
              </div>
              {/* details */}
              <ul className="details-list">
                <li>
                  <strong>Categories:</strong> Design Coding
                </li>
                <li>
                  <strong>Date:</strong> 10 July 2023
                </li>

                <li>
                  <strong>Live Preview:</strong>{" "}
                  <a
                    href="https://codelikeagirl29.github.io/blog/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.github.com/codelikeagirl29/blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default SingleBlog;
