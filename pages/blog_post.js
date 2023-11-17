import { ImagePageBanner } from '../src/components/PageBanner';
import Layout from '../src/layout/Layout';
import Link from 'next/link';
// import dynamic from 'next/dynamic';
import Image from 'next/image';

const BlogPost = () => {
    const typingAnimation = [
        "<span class='typed-bread'><a href='#'>Design</a> / 20 July 2022</span>",
    ];
    return (
        <Layout>
            <ImagePageBanner
                pageName={''}
                typingData={typingAnimation}
                bannerImg="images/blog/blog-7.png"
            />
            <div className="section blog">
                <div className="content">
                    <div className="post">
                        <div className="content-box">
                            <div className="single-post-text">
                                <h1 className="heading text-2xl text-blue-400">
                                    Frontend Developers Handbook
                                </h1>
                                <p
                                    className="text-stone-50 indent-2 pb-4 first-line:uppercase first-line:tracking-widest
                                    first-letter:text-5xl             first-letter:text-7xl first-letter:font-bold first-letter:text-white
                                    first-letter:mr-3 first-letter:mr-3 first-letter:float-left"
                                >
                                    We should pause for a moment to clarify the
                                    differences between a front end developer,
                                    back end developer, and full stack
                                    developer. Let&apos;s put this in simple
                                    terms: a front end developer is responsible
                                    for the parts of an app or website that
                                    users see and interact with. A back end
                                    developer takes care of the &apos;behind the
                                    scenes&apos; matters such as infrastructure
                                    and databases. The full-stack developer is a
                                    mixture of both, a jack of all trades that
                                    can handle the whole design process from the
                                    beginning to the end.
                                </p>
                                <p className="text-stone-50 indent-2 pb-4">
                                    Note that there&apos;s a trend these days
                                    where the line between the front end and
                                    back end development has been blurring.
                                    Primarily since many of the tasks that fall
                                    in the domain of back end developers are
                                    being increasingly handled by the front end
                                    developers.
                                </p>
                                <p className="text-stone-50 indent-2 pb-4">
                                    As a final aside, there are also full-stack
                                    engineers. They are full-stack developers
                                    who have project management experience,
                                    adept at disciplines in the configuring,
                                    managing, and maintaining computer networks
                                    and systems.
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
                                    Great web design without functionality is
                                    like a sports car with no engine.
                                </blockquote>
                                <p className="text-stone-50 indent-2 pt-6">
                                    As a frontend developer, I thrive on the art
                                    of crafting engaging and user-friendly
                                    digital experiences. My world revolves
                                    around transforming design concepts into
                                    interactive websites and web applications,
                                    where every pixel, animation, and
                                    interaction counts. I meticulously code in
                                    HTML, CSS, and JavaScript to ensure that the
                                    user interface not only looks visually
                                    appealing but also functions seamlessly
                                    across various devices and browsers.
                                    Constantly keeping an eye on the latest
                                    design trends and emerging web technologies,
                                    I aim to create a seamless bridge between
                                    the user&apos;s needs and the digital world,
                                    striving to provide them with intuitive and
                                    visually stunning online experiences that
                                    leave a lasting impression.
                                </p>
                                <div className="image-wrapper py-8 relative h-48 w-48 md:h-96 md:w-96">
                                    <Image
                                        src="/images/blog/blogdetail-1.png"
                                        width={500}
                                        height={500}
                                        alt="Picture of an office monitor"
                                    />
                                </div>
                                <h2 className="heading text-2xl text-blue-400">
                                    Reasons to become a Frontend Developer...
                                </h2>
                                <ul>
                                    <li>You&apos;ll be in high demand.</li>
                                    <li>You can work anywhere in the world.</li>
                                    <li>
                                        You won&apos;t get bored working on a
                                        variety of projects.
                                    </li>
                                    <li>Excellent salary.</li>
                                    <li>You wont need a college degree.</li>
                                </ul>
                                <h3 className="text-zinc-200 text-lg">
                                    Programming languages commonly used for the
                                    Frontend:
                                </h3>
                                <div className="flex space-x-4">
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
                            </div>

                            <div className="post-text-bottom">
                                <div className="social-share">
                                    <span>Share:</span>
                                    <Link
                                        className="share-btn share-btn-facebook share-btn-1"
                                        title="Share on Facebook"
                                        href="https://facebook.com"
                                    >
                                        <i className="fab fa-facebook"></i>
                                    </Link>
                                    <Link
                                        className="share-btn share-btn-twitter share-btn-2"
                                        title="Share on Twitter"
                                        href="https://twitter.com"
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </Link>
                                    <Link
                                        className="share-btn share-btn-linkedin share-btn-3"
                                        title="Share on Linkedin"
                                        href="https://linkedin.com"
                                    >
                                        <i className="fab fa-linkedin"></i>
                                    </Link>
                                    <Link
                                        className="share-btn share-btn-reddit share-btn-4"
                                        title="Share on Medium"
                                        href="https://medium.com"
                                    >
                                        <i className="fab fa-medium"></i>
                                    </Link>
                                    <Link
                                        className="share-btn share-btn-pinterest share-btn-5"
                                        title="Share on Pinterest"
                                        href="https://pinterest.com"
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
                                <Link href="/blog" title="Blog">
                                    <span className="post-nav-next post-nav-text">
                                        Blog
                                    </span>
                                </Link>
                            </div>
                            <div className="nav-next">
                                <Link
                                    href="/blog_post2"
                                    title="Creating a Blog"
                                >
                                    <span className="post-nav-prev post-nav-text">
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
