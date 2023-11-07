import { ImagePageBanner } from '../src/components/PageBanner';
import { Fragment, useContext } from 'react';
import Layout from '../src/layout/Layout';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const BlogPost = () => {
  const typingAnimation = [
    "<span class='typed-bread'><a href='#'>Frontend</a> / Aug 08, 2023</span>",
  ];
  return (
    <Layout>
      <ImagePageBanner
        pageName={''}
        typingData={typingAnimation}
        bannerImg='images/blog/blog-9.png'
      />

      <div className='section blog'>
        <div className='content w-100'>
          <div className='post'>
            <div className='content-box text-bg-dark'>
              <div className='single-post-text'>
                <h1 className='heading'>Why I Prefer Gatsby.js</h1>
                <p>
                  Gatsby.js is a modern website and web application framework
                  built on React, GraphQL, and webpack. It&apos;s known for its
                  speed, performance, and ease of use. Gatsby combines the
                  benefits of static site generation with the dynamic
                  capabilities of a JavaScript framework.
                </p>
                <p>
                  Note that there&apos;s a trend these days where the line
                  between the front end and back end development has been
                  blurring. Primarily since many of the tasks that fall in the
                  domain of back end developers are being increasingly handled
                  by the front end developers.
                  <br />
                </p>
                <p>
                  {' '}
                  As a final aside, there are also full-stack engineers. They
                  are full-stack developers who have project management
                  experience, adept at disciplines in the configuring, managing,
                  and maintaining computer networks and systems.
                  <br />
                </p>
                <blockquote>
                  <p>
                    A designer knows he has achieved perfection not when there
                    is nothing left to add, but when there is nothing left to
                    take away.
                  </p>
                </blockquote>
                <p>
                  Tiled say decay spoil now walls meant house. My mr interest
                  thoughts screened of outweigh removing. Evening society
                  musical besides inhabit ye my. Lose hill well up will he over
                  on. Increasing <a href='#'>link</a> sufficient everything men
                  him admiration unpleasing .
                </p>
                <Image
                  src='/images/blog/blogdetail-3.png'
                  width={500}
                  height={500}
                  alt='Picture of an office monitor'
                />
                <h2 className='heading'>
                  Why You Should Choose Gatsby.js too?
                </h2>
                <ol>
                  <li>
                    <em>Blazing fast performance</em>: Gatsby generates static
                    HTML files, making your website load in a flash. This leads
                    to a better user experience and improved search engine
                    ranking.
                  </li>
                  <li>
                    <em>Developer-Friendly</em>: Gatsby offers a
                    developer-friendly environment with hot-reloading,
                    easy-to-use APIs, and a vast plugin ecosystem.
                  </li>
                  <li>
                    <em>SEO-Optimized</em>: Gatsby is designed with SEO in mind.
                    It generates SEO-friendly HTML pages and provides tools for
                    optimizing your website's search engine ranking.
                  </li>
                  <li>
                    <em>Data Integration</em>: It seamlessly integrates with
                    various data sources, including CMSs, APIs, and databases.
                  </li>
                  <li>
                    <em>Rich Plugin Ecosystem</em>: Gatsby's plugin system
                    allows you to add various functionalities to your site, from
                    image optimization to analytics.
                  </li>
                </ol>
                <p>Programming languages commonly used for the Frontend:</p>
                <Image
                  src='/images/html5-original.svg'
                  width={100}
                  height={100}
                  alt='html5 logo'
                />
                <Image
                  src='/images/css3-original.svg'
                  width={100}
                  height={100}
                  alt='css3 logo'
                />
                <Image
                  src='/images/javascript-original.svg'
                  width={100}
                  height={100}
                  alt='javascript logo'
                />
                <Image
                  src='/images/react-original.svg'
                  width={100}
                  height={100}
                  alt='react logo'
                />
                <Image
                  src='/images/gatsby-original.svg'
                  width={100}
                  height={100}
                  alt='gatsby logo'
                />
              </div>

              <div className='post-text-bottom'>
                <div className='social-share'>
                  <span>Share:</span>
                  <Link
                    className='share-btn share-btn-facebook share-btn-1'
                    title='Share on Facebook'
                    href='https://www.facebook.com/sharer.php?u=http%3A%2F%2Flindseyk.dev%2F'
                  >
                    <i className='fab fa-facebook'></i>
                  </Link>
                  <Link
                    className='share-btn share-btn-twitter share-btn-2'
                    title='Share on Twitter'
                    href="https://twitter.com/"
                  >
                    <i className='fab fa-twitter'></i>
                  </Link>
                  <Link
                    className='share-btn share-btn-linkedin share-btn-3'
                    title='Share on Linkedin'
                    href="https://linkedin.com/"
                  >
                    <i className='fab fa-linkedin'></i>
                  </Link>
                  <Link
                    className='share-btn share-btn-reddit share-btn-4'
                    title='Share on Medium'
                    href="https://medium.com/"
                  >
                    <i className='fab fa-medium'></i>
                  </Link>
                  <Link
                    className='share-btn share-btn-pinterest share-btn-5'
                    title='Share on Pinterest'
                    href="https://pinterest.com/"
                  >
                    <i className='fab fa-pinterest'></i>
                  </Link>
                </div>
                <div className='cat-links'>
                  <span>Posted in </span>
                  <Link href='/categories/design'>Design</Link>
                  <span className='byline'>
                    {' '}
                    / by <span className='author'>Lindsey</span>
                  </span>
                </div>
                <div className='tags-links'>
                  <span>Tags:</span>
                  <Link href='/tags/code' rel='tag'>
                    code
                  </Link>
                  <Link href='/tags/frontend' rel='tag'>
                    frontend
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <nav className='navigation post-navigation'>
            <div className='nav-links'>
              <div className='nav-previous'>
                <Link href='/blog_post2' title='Creating a Blog'>
                  <span className='post-nav-next post-nav-text'>Prev</span>
                </Link>
              </div>
              <div className='nav-next'>
                <Link href='#' title=''>
                  <span className='post-nav-prev post-nav-text text-muted'>Next</span>
                </Link>
              </div>
            </div>
          </nav>

          <div className='clear'></div>
        </div>
      </div>
    </Layout>
  );
};
export default BlogPost;
