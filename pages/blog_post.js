import { ImagePageBanner } from '../src/components/PageBanner';
import Layout from '../src/layout/Layout';
import Link from 'next/link';
// import dynamic from 'next/dynamic';
import Image from 'next/image';

const BlogPost = () => {
    const typingAnimation = [
        "<span class='typed-bread'><a href='#'>Design</a> / 12 Feb 2026</span>",
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
                                    Let&apos;s start by clarifying the
                                    differences between a front end developer,
                                    a back end developer, and a full-stack
                                    developer. In simple terms: a front end
                                    developer builds the parts of an app or
                                    website that people actually see and
                                    interact with. A back end developer
                                    handles the infrastructure, databases, and
                                    business logic running behind the scenes.
                                    A full-stack developer moves comfortably
                                    between both, equally at home in a
                                    database schema and a UI polish pass.
                                </p>
                                <p className="text-stone-50 indent-2 pb-4">
                                    That line keeps getting blurrier. Modern
                                    meta-frameworks like Next.js let front end
                                    developers write server-side logic, handle
                                    data fetching, and manage API routes
                                    without ever leaving their React codebase.
                                    Server components and edge functions mean
                                    more of what used to be strictly
                                    &apos;back end&apos; work now lives
                                    comfortably in a front end
                                    developer&apos;s toolkit.
                                </p>
                                <p className="text-stone-50 indent-2 pb-4">
                                    Then there are full-stack engineers:
                                    full-stack developers with the added
                                    experience of owning a project end to end,
                                    from architecture decisions through
                                    deployment pipelines and the systems that
                                    keep it all running.
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
                                    As a frontend developer, I thrive on
                                    turning design concepts into interactive,
                                    genuinely usable experiences. My day to
                                    day lives in React and Next.js, with
                                    Tailwind CSS handling the styling and
                                    TypeScript keeping things honest as a
                                    project grows. I care as much about how an
                                    interface feels to use as how it looks —
                                    making sure it holds up across devices,
                                    screen readers, and slow connections, not
                                    just the browser open on my monitor.
                                    Staying current with the ecosystem is part
                                    of the job; the tools change every year,
                                    but the goal stays the same: build
                                    something people can use without having to
                                    think about it.
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
                                    Reasons to Become a Frontend Developer
                                </h2>
                                <ul>
                                    <li>
                                        You&apos;re building the part of the
                                        product people actually touch — the
                                        impact is immediate and visible.
                                    </li>
                                    <li>
                                        Frontend skills travel well: remote
                                        work is common, and demand spans
                                        nearly every industry.
                                    </li>
                                    <li>
                                        No two projects look the same —
                                        you&apos;re constantly picking up new
                                        patterns, tools, and problems to
                                        solve.
                                    </li>
                                    <li>
                                        Strong earning potential, especially
                                        as you specialize in performance,
                                        accessibility, or design systems.
                                    </li>
                                    <li>
                                        A degree can help, but it&apos;s not a
                                        hard requirement — a solid portfolio
                                        and demonstrable skills carry real
                                        weight.
                                    </li>
                                </ul>
                                <h3 className="text-zinc-200 text-lg">
                                    Core languages and tools I reach for on
                                    the frontend:
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
