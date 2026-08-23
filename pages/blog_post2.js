import { ImagePageBanner } from '../src/components/PageBanner';
import Layout from '../src/layout/Layout';
import Link from 'next/link';
import SocialShare from '../src/components/SocialShare';
// import dynamic from 'next/dynamic';
import Image from 'next/image';

const BlogPost2 = () => {
    const typingAnimation = [
        "<span class='typed-bread'><a href='#'>Blogging</a> / Apr 6, 2026</span>",
    ];
    return (
        <Layout>
            <ImagePageBanner
                pageName={''}
                typingData={typingAnimation}
                bannerImg="images/blog/blog-8.png"
            />

            <div className="section blog">
                <div className="content">
                    <div className="post">
                        <div className="content-box">
                            <div className="single-post-text">
                                <h1 className="heading text-2xl text-blue-400 pb-4">
                                    Creating a Blog Post
                                </h1>
                                <p
                                    className="text-stone-50 indent-2 pb-4 first-line:uppercase first-line:tracking-widest
                                    first-letter:text-5xl             first-letter:text-7xl first-letter:font-bold first-letter:text-white
                                    first-letter:mr-3 first-letter:mr-3 first-letter:float-left"
                                >
                                    Blogging is still one of the best ways to
                                    think out loud, share what you&apos;re
                                    learning, and build a public track record
                                    of your work. Whether you&apos;re writing
                                    your first post or your fiftieth, a
                                    well-structured post is what separates
                                    something people skim past from something
                                    they actually read, bookmark, and share.
                                    Here&apos;s the process I use to go from a
                                    blank page to a finished post.
                                </p>
                                <p className="text-stone-50 indent-2 pb-4">
                                    For developers specifically, writing
                                    regularly does double duty: it forces you
                                    to actually understand what you built well
                                    enough to explain it, and it puts a public
                                    trail of your thinking in front of the
                                    people who might one day hire you.
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
                                    Write the kind of story you would like to
                                    read. People will give you all sorts of
                                    advice about writing, but if you are not
                                    writing something you like, no one else will
                                    like it either.
                                </blockquote>
                                <h2 className="heading text-2xl text-blue-400 py-4">
                                    Steps for Writing a Blog Post
                                </h2>
                                <ol
                                    role="list"
                                    className="marker:text-sky-400 list-decimal text-slate-300 indent-3"
                                >
                                    <li>Understand your Audience.</li>
                                    <li>Research Thoroughly.</li>
                                    <li>Outline Before You Write.</li>
                                    <li>Write a Compelling Introduction.</li>
                                    <li>Create Engaging, Concrete Content.</li>
                                    <li>Edit & Proofread.</li>
                                    <li>Optimize for Search & Readability.</li>
                                </ol>

                                <div className="image-wrapper p-4 relative h-48 w-48 md:h-96 md:w-96">
                                    <Image
                                        src="/images/blog/blogdetail-2.png"
                                        width={550}
                                        height={500}
                                        alt="Picture of a typewriter"
                                    />
                                </div>
                                <p className="text-stone-50 indent-2 pb-2">
                                    Writing a good post is equal parts
                                    creativity and structure. Pick a topic you
                                    actually care about, know who you&apos;re
                                    writing for, do the research, and follow a
                                    process — and the rest tends to follow.
                                    The more you write, the faster it gets and
                                    the more your own voice comes through.
                                    Happy writing!
                                </p>
                            </div>

                            <div className="post-text-bottom">
                                <SocialShare />
                                <div className="cat-links">
                                    <span>Posted in </span>
                                    <Link href="/categories/blogging">
                                        Blogging
                                    </Link>
                                    <span className="byline">
                                        {' '}
                                        <span className="text-pink-300">
                                            |
                                        </span>{' '}
                                        by
                                        <span className="author"> Lindsey</span>
                                    </span>
                                </div>
                                <div className="tags-links">
                                    <span>Tags:</span>
                                    <Link href="/tags/blogging" rel="tag">
                                        blogging
                                    </Link>
                                    <Link href="/tags/tutorials" rel="tag">
                                        tutorials
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <nav className="navigation post-navigation">
                        <div className="nav-links">
                            <div className="nav-previous">
                                <Link
                                    href="/blog_post"
                                    title="Frontend Dev Handbook"
                                >
                                    <span className="post-nav-next post-nav-text">
                                        Prev
                                    </span>
                                </Link>
                            </div>
                            <div className="nav-next">
                                <Link href="/blog_post3" title="Why I Prefer Next.js">
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
export default BlogPost2;
