import { DefaultPageBanner } from "../src/components/PageBanner";
import { Fragment, useContext } from "react";
import Layout from "../src/layout/Layout";
import Link from "next/link";
import dynamic from "next/dynamic";

const Blog = () => {
  const typingAnimation = [
    "<span class='typed-bread'><a href='#'>Home</a> / Blog</span>",
  ];
  return (
    <Layout>
      <DefaultPageBanner pageName={"Blog"} typingData={typingAnimation} />

      <div className="section blog">
        <div className="content">

          <div className="title"><div className="title_inner">Latest Posts</div></div>

          <div className="blog-items">

            <div className="blog-col">
              <div className="blog-item content-box">
                <div className="post">
                  <div className="image">
                    <Link href="/blog_post" className="post-thumbnail">
                      <img src="images/blog/blog.png" className="wp-post-image" alt="Blog screenshot" />
                      <span className="info">
                        <span className="centrize full-width">
                          <span className="vertical-center">
                            <span className="icon fas fa-plus"></span>
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="date">
                      Oct 26, 2023
                    </div>
                    <Link href="/blog_post" className="name">Creating a Blog Post</Link>
                    <div className="single-post-text">
                      <p>In today's digital age, creating a blog site is a fantastic way to share your thoughts, insights, and passions with the world. While there are plenty of platforms available for this purpose, building your blog site from scratch with JavaScript, HTML, and CSS provides a unique opportunity for creative control and customization. In this guide, we'll walk you through the steps to create your blog site using these fundamental web technologies.</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-col">
              <div className="blog-item content-box">
                <div className="post">
                  <div className="image">
                    <Link href="/blog_post" className="post-thumbnail">
                      <img src="images/blog/blog_2.png" className="wp-post-image" alt="Gatsby 101" />
                      <span className="info">
                        <span className="centrize full-width">
                          <span className="vertical-center">
                            <span className="icon fas fa-plus"></span>
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="date">
                      08 August 2022
                    </div>
                    <Link href="/blog_post" className="name">Gatsby 101</Link>
                    <div className="single-post-text">
                      <p>Discover how Gatsby.js, built on React and GraphQL, offers lightning-fast performance and improved SEO by generating static HTML files for your website. We'll also explore its rich ecosystem of plugins and themes, making it easier than ever to build interactive, content-rich sites. </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-col">
              <div className="blog-item content-box">
                <div className="post">
                  <div className="image">
                    <Link href="/blog_post" className="post-thumbnail">
                      <img src="images/blog/blog_3.png" className="wp-post-image" alt="frontend dev handbook" />
                      <span className="info">
                        <span className="centrize full-width">
                          <span className="vertical-center">
                            <span className="icon fas fa-plus"></span>
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="date">
                      Feb 2, 2023
                    </div>
                    <Link href="/blog_post" className="name">Frontend Developer's Handbook</Link>
                    <div className="single-post-text">
                      <p>Here, I present the ultimate handbook for frontend developers, offering a treasure trove of insights, tips, and resources to empower you in your web development journey. Whether you're a seasoned pro or just starting, this comprehensive guide is a valuable resource to navigate the ever-evolving world of frontend development.</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-col">
              <div className="blog-item content-box">
                <div className="post">
                  <div className="image">
                    <Link href="/blog_post" className="post-thumbnail">
                      <img src="images/blog/blog_4.png" className="wp-post-image" alt="Stay Productive" />
                      <span className="info">
                        <span className="centrize full-width">
                          <span className="vertical-center">
                            <span className="icon fas fa-plus"></span>
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="date">
                      Dec 02, 2022
                    </div>
                    <Link href="/blog_post" className="name">Staying Productive</Link>
                    <div className="single-post-text">
                      <p> It’s tempting to look at highly productive people as machines (or wizards). But by studying how they work efficiently and overcome the challenges we all experience, it’s possible to boost your own productivity as
                        well. </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-col">
              <div className="blog-item content-box">
                <div className="post">
                  <div className="image">
                    <Link href="/blog_post" className="post-thumbnail">
                      <img src="images/blog/blog-6.png" className="wp-post-image" alt="By spite about what to do" />
                      <span className="info">
                        <span className="centrize full-width">
                          <span className="vertical-center">
                            <span className="icon fas fa-plus"></span>
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="date">
                      Dec 4, 2022
                    </div>
                    <Link href="/blog_post" className="name">Styling with CSS</Link>
                    <div className="single-post-text">
                      <p> Once you’ve learned how the box model works, and how to float those boxes, it’s time to get serious about your CSS. To that end, we’ve compiled a massive list of tips, tricks, techniques, and the occasional dirty
                        hack to help you build the design you want.</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="content-sidebar">
            <aside id="secondary" className="widget-area">

              <div id="search" className="widget widget_search">
                <form className="search-form" method="GET">
                  <div className="search-form-label">
                    <input type="search" className="search-field" id="search-input" placeholder="Search ..." value="" />
                    <input type="submit" className="search-submit" value="Search ..." />
                  </div>
                  <ul id="results-container"></ul>
                </form>
              </div>

              <section className="widget widget_recent_entries">
                <h2 className="widget-title">Latest Posts</h2>
                <ul>

                  <li>
                    <a href="#">Welcome to Jekyll!</a>
                  </li>

                  <li>
                    <a href="#">By spite about do of do allow blush</a>
                  </li>

                  <li>
                    <a href="#">Two Before Arrow Not Relied</a>
                  </li>

                  <li>
                    <a href="#">Design in Mobile Application</a>
                  </li>

                </ul>
              </section>

              <section className="widget widget_categories">
                <h2 className="widget-title">Categories</h2>
                <ul>

                  <li><a href="#">Design</a> <small>(2)</small></li>

                  <li><a href="#">Mobile</a> <small>(1)</small></li>

                  <li><a href="#">Music</a> <small>(2)</small></li>

                  <li><a href="#">Video</a> <small>(1)</small></li>

                </ul>
              </section>

              <section className="widget widget_tags">

                <h2 className="widget-title">Tags</h2>

                <div className="tags">
                  <a href="#">jekyll</a>
                  <a href="#">app</a>
                  <a href="#">mobile</a>
                  <a href="#">code</a>
                  <a href="#">rock</a>
                  <a href="#">Jekyll</a>
                </div>

              </section>

            </aside>
          </div>

          <div className="clear"></div>

        </div>
      </div>

    </Layout>
  );
};
export default Blog;
