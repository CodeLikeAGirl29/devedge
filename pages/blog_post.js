import { ImagePageBanner } from "../src/components/PageBanner";
import { Fragment, useContext } from "react";
import Layout from "../src/layout/Layout";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from 'next/image'

const BlogPost = () => {
  const typingAnimation = [
    "<span class='typed-bread'><a href='#'>Design</a> / 20 July 2022</span>",
  ];
  return (
    <Layout>
      <ImagePageBanner
        pageName={""}
        typingData={typingAnimation}
        bannerImg="images/blog/blog-7.png"
      />

      <div className="section blog">
        <div className="content">

          <div className="post">
            <div className="content-box">

              <div className="single-post-text">
                <h1 className="heading">Frontend Developers Handbook</h1>
                <p>   We should pause for a moment to clarify the differences between a front end developer, back end developer, and full stack developer. Let’s put this in simple terms: a front end developer is responsible for the parts of an
                  app or website that users see and interact with. A back end developer takes care of the “behind the scenes” matters such as infrastructure and databases. The full-stack developer is a mixture of both, a jack of all trades
                  that can handle the whole design process from the beginning to the end.</p>
                <p>Note that there’s a trend these days where the line between the front end and back end development has been blurring. Primarily since many of the tasks that fall in the domain of back end developers are being increasingly
                  handled by the front end developers.<br /></p>
                <p> As a final aside, there are also full-stack engineers. They are full-stack developers who have project management experience, adept at disciplines in the configuring, managing, and maintaining computer networks and
                  systems.<br /></p>
                <blockquote>
                  <p>Great web design without functionality is like a sports car with no engine.</p>
                </blockquote>
                <p>Tiled say decay spoil now walls meant house. My mr interest thoughts screened of outweigh removing. Evening society musical besides inhabit ye my. Lose hill well up will he over on. Increasing <a href="#">link</a> sufficient everything men him admiration unpleasing .</p>
                <Image
                  src="/images/blog/blogdetail-1.png"
                  width={500}
                  height={500}
                  alt="Picture of an office monitor"
                />
                <p>Reasons to become a Frontend Developer...</p>
                <ul>
                  <li>You'll be in high demand.</li>
                  <li>You can work anywhere in the world.</li>
                  <li>You wont get bored working on a variety of projects.</li>
                  <li>Excellent salary.</li>
                  <li>You wont need a college degree</li>
                </ul>
                <p>Programming languages commonly used for the Frontend:</p>
                <Image
                  src="/images/html5-original.svg"
                  width={100}
                  height={100}
                  alt="html5 logo"
                />
                <Image
                  src="/images/css3-original.svg"
                  width={100}
                  height={100}
                  alt="css3 logo"
                />
                <Image
                  src="/images/javascript-original.svg"
                  width={100}
                  height={100}
                  alt="javascript logo"
                />
                <Image
                  src="/images/react-original.svg"
                  width={100}
                  height={100}
                  alt="react logo"
                />
                <Image
                  src="/images/gatsby-original.svg"
                  width={100}
                  height={100}
                  alt="gatsby logo"
                />
              </div>

              <div className="post-text-bottom">
                <div className="social-share">
                  <span>Share:</span>
                  <a className="share-btn share-btn-facebook share-btn-1" title="Share on Facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a className="share-btn share-btn-twitter share-btn-2" title="Share on Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="share-btn share-btn-linkedin share-btn-3" title="Share on Linkedin">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a className="share-btn share-btn-reddit share-btn-4" title="Share on Reddit">
                    <i className="fab fa-reddit"></i>
                  </a>
                  <a className="share-btn share-btn-pinterest share-btn-5" title="Share on Pinterest">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </div>
                <div className="cat-links">
                  <span>Posted in </span>
                  <a href="/categories/design">Design</a>
                  <span className="byline"> / by <span className="author">Lindsey</span></span>
                </div>
                <div className="tags-links">
                  <span>Tags:</span>
                  <a href="/tags/code" rel="tag">code</a>
                  <a href="/tags/frontend" rel="tag">frontend</a>
                </div>
              </div>

            </div>
          </div>

          <nav className="navigation post-navigation">
            <div className="nav-links">
              <div className="nav-previous">
                <a href="#" title="Design in Mobile Application"><span className="post-nav-next post-nav-text">Prev</span></a>
              </div>
              <div className="nav-next">
                <a href="#" title="By spite about do of do allow blush"><span className="post-nav-prev post-nav-text">Next</span></a>
              </div>
            </div>
          </nav>

          <div className="clear"></div>
        </div>
      </div>

    </Layout>
  );
};
export default BlogPost;