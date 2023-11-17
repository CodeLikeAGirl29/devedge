import { ImagePageBanner } from '../src/components/PageBanner';
import Layout from '../src/layout/Layout';
import Link from 'next/link';
// import dynamic from "next/dynamic";
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
                bannerImg="images/blog/blog-9.png"
            />

            <div className="section blog">
                <div className="content w-100">
                    <div className="post">
                        <div className="content-box text-bg-dark">
                            <div className="single-post-text">
                                <h1 className="heading text-2xl text-blue-400">
                                    Why I Prefer Gatsby.js
                                </h1>
                                <p className="text-stone-50 indent-2 pb-4">
                                    Gatsby.js is a modern website and web
                                    application framework built on React,
                                    GraphQL, and webpack. It&apos;s known for
                                    its speed, performance, and ease of use.
                                    Gatsby combines the benefits of static site
                                    generation with the dynamic capabilities of
                                    a JavaScript framework.
                                </p>
                                <p className="text-stone-50 indent-2 pb-4">
                                    Note that there&apos;s a trend these days
                                    where the line between the front end and
                                    back end development has been blurring.
                                    Primarily since many of the tasks that fall
                                    in the domain of back end developers are
                                    being increasingly handled by the front end
                                    developers.
                                    <br />
                                </p>
                                <p className="text-stone-50 indent-2 pb-4">
                                    {' '}
                                    As a final aside, there are also full-stack
                                    engineers. They are full-stack developers
                                    who have project management experience,
                                    adept at disciplines in the configuring,
                                    managing, and maintaining computer networks
                                    and systems.
                                    <br />
                                </p>
                                <blockquote className="text-lg italic font-semibold text-gray-800 dark:text-white">
                                    <svg
                                        className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 18 14"
                                    >
                                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                                    </svg>
                                    A designer knows he has achieved perfection
                                    not when there is nothing left to add, but
                                    when there is nothing left to take away.
                                </blockquote>
                                <p className="text-stone-50 indent-2 p-4">
                                    Every day, the amount of data we need to
                                    combine to create experiences is rising. In
                                    traditional React applications, managing
                                    multiple sources of data could easily become
                                    a nightmare & create code that is too
                                    complex. Storing, massaging, merging, &
                                    querying data all require complicated
                                    solutions that struggle to scale. Gatsby.js
                                    solves this problem by using GraphQL to
                                    unify all data sources into a single data
                                    layer. This makes it easy to combine data
                                    from CMSs, APIs, databases, & files in a
                                    single GraphQL endpoint. Gatsby.js also
                                    provides a rich plugin ecosystem that allows
                                    you to add various functionalities to your
                                    site, from image optimization to analytics.
                                </p>
                                <div className="image-wrapper p-2 relative h-48 w-48 md:h-96 md:w-96">
                                    <Image
                                        src="/images/blog/blogdetail-3.png"
                                        width={500}
                                        height={500}
                                        alt="gatsby.js hierarchy"
                                    />
                                </div>
                                <h2 className="heading text-2xl text-blue-400 py-2">
                                    Why You Should Choose Gatsby.js too?
                                </h2>
                                <ol
                                    role="list"
                                    className="marker:text-sky-400 list-decimal text-slate-300 indent-3"
                                >
                                    <li>
                                        <em>Blazing fast performance</em>:
                                        Gatsby generates static HTML files,
                                        making your website load in a flash.
                                        This leads to a better user experience
                                        and improved search engine ranking.
                                    </li>
                                    <li>
                                        <em>Developer-Friendly</em>: Gatsby
                                        offers a developer-friendly environment
                                        with hot-reloading, easy-to-use APIs,
                                        and a vast plugin ecosystem.
                                    </li>
                                    <li>
                                        <em>SEO-Optimized</em>: Gatsby is
                                        designed with SEO in mind. It generates
                                        SEO-friendly HTML pages and provides
                                        tools for optimizing your website&apos;s
                                        search engine ranking.
                                    </li>
                                    <li>
                                        <em>Data Integration</em>: It seamlessly
                                        integrates with various data sources,
                                        including CMSs, APIs, and databases.
                                    </li>
                                    <li>
                                        <em>Rich Plugin Ecosystem</em>:
                                        Gatsby&apos;s plugin system allows you
                                        to add various functionalities to your
                                        site, from image optimization to
                                        analytics.
                                    </li>
                                </ol>

                                <div className="image-wrapper relative">
                                    <Image
                                        src="/images/blog/gatsbyjs-img.png"
                                        width={300}
                                        height={300}
                                        alt="gatsby logo"
                                        className="pt-8 pb-6"
                                    />
                                </div>
                                <h2 className="heading text-2xl text-blue-400 py-2">
                                    Resources{' '}
                                </h2>
                                <p className="text-stone-50 indent-2 p-4 flex flex-col">
                                    <Link href="https://www.gatsbyjs.com/starters/">
                                        Starters
                                    </Link>
                                    <Link href="https://github.com/brainhubeu/gatsby-docs-kit">
                                        Docs Kit
                                    </Link>
                                    <Link href="https://www.digitalocean.com/community/tutorials/gatsbyjs-gatsby-cli-quick-reference">
                                        Quick Reference
                                    </Link>
                                </p>
                            </div>

                            <div className="post-text-bottom">
                                <div className="social-share">
                                    <span>Share:</span>
                                    <Link
                                        className="share-btn share-btn-facebook share-btn-1"
                                        title="Share on Facebook"
                                        href="https://www.facebook.com/sharer.php?u=http%3A%2F%2Flindseyk.dev%2F"
                                    >
                                        <i className="fab fa-facebook"></i>
                                    </Link>
                                    <Link
                                        className="share-btn share-btn-twitter share-btn-2"
                                        title="Share on Twitter"
                                        href="https://twitter.com/"
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </Link>
                                    <Link
                                        className="share-btn share-btn-linkedin share-btn-3"
                                        title="Share on Linkedin"
                                        href="https://linkedin.com/"
                                    >
                                        <i className="fab fa-linkedin"></i>
                                    </Link>
                                    <Link
                                        className="share-btn share-btn-reddit share-btn-4"
                                        title="Share on Medium"
                                        href="https://medium.com/"
                                    >
                                        <i className="fab fa-medium"></i>
                                    </Link>
                                    <Link
                                        className="share-btn share-btn-pinterest share-btn-5"
                                        title="Share on Pinterest"
                                        href="https://pinterest.com/"
                                    >
                                        <i className="fab fa-pinterest"></i>
                                    </Link>
                                </div>
                                <div className="cat-links">
                                    <span>Posted in </span>
                                    <Link href="/categories/design">
                                        Design
                                    </Link>
                                    <span className="byline">
                                        {' '}
                                        / by{' '}
                                        <span className="author">Lindsey</span>
                                    </span>
                                </div>
                                <div className="tags-links">
                                    <span>Tags:</span>
                                    <Link href="/tags/code" rel="tag">
                                        code
                                    </Link>
                                    <Link href="/tags/frontend" rel="tag">
                                        frontend
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <nav className="navigation post-navigation">
                        <div className="nav-links">
                            <div className="nav-previous">
                                <Link
                                    href="/blog_post2"
                                    title="Creating a Blog"
                                >
                                    <span className="post-nav-next post-nav-text">
                                        Prev
                                    </span>
                                </Link>
                            </div>
                            <div className="nav-next">
                                <Link href="/blog_post4" title="Productivity">
                                    <span className="post-nav-prev post-nav-text text-muted">
                                        Next
                                    </span>
                                </Link>
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
