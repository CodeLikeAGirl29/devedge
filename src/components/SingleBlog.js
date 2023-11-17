import Image from 'next/image';

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
                                <div className="title_inner">
                                    My Development Process
                                </div>
                            </div>
                            {/* text */}
                            <div className="single-post-text">
                                <Image
                                    src="/images/blog-banner.png"
                                    alt=""
                                    width={600}
                                    height={450}
                                />
                                <h2 className="h2 pt-6">
                                    Step 1: <em>Gathering Info</em>: Purpose,
                                    Main Goals, & Target Audience
                                </h2>
                                <p className="text-stone-50 indent-2 pb-4 pt-4">
                                    The initial phase of exploration and
                                    research sets the tone for subsequent
                                    actions in any development process, whether
                                    it be web application development, software
                                    development, or other types of projects.
                                    During this stage, the paramount objective
                                    is to gain a clear comprehension of your
                                    future website&apos;s objectives, the
                                    primary goals you aim to achieve, and the
                                    specific audience you intend to engage with.
                                    By compiling all the requisite information,
                                    you can facilitate the creation of an
                                    optimal strategy for managing the project
                                    further. Consequently, this enables you to
                                    define the project&apos;s extent and
                                    delineate critical specifics, including
                                    website features, task delegation, project
                                    timeline, scope of work, budget, and more.
                                </p>
                                <h2 className="h2">
                                    Step 2. <em>Planning</em>: Sitemap &
                                    Wireframe Creation
                                </h2>
                                <p className="text-stone-50 indent-2 pb-4 pt-4">
                                    The sitemap outlines the connections between
                                    the key sections of your platform, offering
                                    insights into the potential usability of the
                                    final product. It reveals the interplay
                                    between different pages, allowing you to
                                    assess how easily an end-user can access the
                                    necessary information or services when
                                    starting from the homepage. The primary goal
                                    of creating a sitemap is to establish a
                                    user-friendly and easily navigable website.
                                </p>

                                <p className="text-stone-50 indent-2 pb-4 pt-4">
                                    While the sitemap provides a view of the
                                    internal structure, it doesn&apos;t address
                                    the user interface. Sometimes, before diving
                                    into coding or design work, it&apos;s
                                    essential to seek approval from a client to
                                    ensure everything aligns with their vision
                                    before moving to the next development phase.
                                    In such cases, a wireframe or mock-up is
                                    crafted.
                                </p>

                                <p className="text-stone-50 indent-2 pb-4 pt-4">
                                    A wireframe serves as a visual
                                    representation of the upcoming user
                                    interface design, devoid of design elements
                                    like colors and logos. It solely delineates
                                    the elements to be included on the page and
                                    their placement. It&apos;s a simple and
                                    cost-effective way to sketch the production
                                    process.
                                </p>
                                <h2 className="h2">
                                    Step 3. <em>Design</em>: Page Layouts,
                                    Review, & Approval Cycle
                                </h2>
                                <p className="text-stone-50 indent-2 pb-4  pt-4">
                                    During the design phase, your site takes the
                                    shape. All the visual content, such as
                                    images, photos, and videos, is created at
                                    this stage. Once again, all the info that
                                    was gathered through the first phase is
                                    crucial. The customer and target audience
                                    must be kept in mind while you work on a
                                    design to make the user interface and user
                                    experience intuitive and easy to use.
                                    Developing the website layout is the result
                                    of a designer&apos;s work. It can be a
                                    graphic sketch or an actual graphic design.
                                </p>
                                <p className="text-stone-50 indent-2 pb-4 pt-4">
                                    After the job&apos;s done, the customer can
                                    review the layout and send you their
                                    feedback. If the client is not sure about
                                    some aspects of your design, you should
                                    change the layout and send it back. This
                                    cycle is repeated until the customer is
                                    completely satisfied.
                                </p>

                                <h2 className="h2">
                                    Step 4. Content Writing & Assembly
                                </h2>
                                <p className="text-stone-50 indent-2 pb-4 pt-4">
                                    Content writing and compiling usually
                                    overlaps with other stages of website
                                    creation, and its role can&apos;t be
                                    underestimated. Now, it is necessary to put
                                    in writing the very essence you&apos;d like
                                    to communicate to the target audience and
                                    add call-to-action. Content writing also
                                    involves the creation of catching headlines,
                                    proofreading, writing new blocks of text,
                                    etc., which takes time and effort. As a
                                    rule, the client undertakes to provide
                                    website content ready to migrate to the
                                    site. It is better when all content is
                                    provided before or during coding.
                                </p>

                                <h2 className="h2">Step 5. Coding</h2>
                                <p className="text-stone-50 indent-2 pb-4 pt-4">
                                    You can finally start creating the site
                                    itself. Graphic elements that have been
                                    designed during the previous stages are used
                                    at this stage to develop an actual website.
                                    Usually, the home page is created first, and
                                    then all sub-pages are added, according to
                                    the hierarchy that was previously compiled
                                    in the sitemap. The chosen frameworks and
                                    CMS are implemented to make sure that the
                                    server can handle the installation and
                                    set-up smoothly.
                                </p>

                                <p className="text-stone-50 indent-2 pb-4 pt-4">
                                    All static web page elements that were
                                    designed during the mock-up and layout
                                    creation should be implemented and tested.
                                    Then, special features and interactivity are
                                    added. A deep understanding of every website
                                    development technology that you&apos;re
                                    going to use is crucial at this phase.
                                </p>

                                <p className="text-stone-50 indent-2 pb-4 pt-4">
                                    When you use CMS for site creation, you can
                                    also install CMS plugins at this step if
                                    needed. The other important step is SEO
                                    (Search Engine Optimization). SEO is the
                                    optimization of website elements (e.g.,
                                    title, description, keyword) that can help
                                    your site achieve higher rankings in the
                                    search engines. And, once again, valid code
                                    is pretty important for SEO.
                                </p>

                                <h2 className="h2">
                                    Step 6. Testing, Review, & Launch
                                </h2>
                                <p className="text-stone-50 indent-2 pb-4 pt-4">
                                    Testing software or a website is probably
                                    the most routine part of a process. Every
                                    single link has to be tested to make sure
                                    that there are no broken ones among them.
                                    Check every form, every script, run a
                                    spell-checking software to find possible
                                    typos. Use code validators to check if your
                                    code follows the current web standards.
                                    Valid code is necessary, for example, if
                                    cross-browser compatibility is crucial for
                                    you.
                                </p>

                                <h2 className="h2">
                                    Step 7. <em>Maintenance</em>: Monitoring &
                                    Updating
                                </h2>
                                <p className="text-stone-50 indent-2 pb-4 pt-4">
                                    What&apos;s important to remember is that a
                                    website is more of a service than a product.
                                    It&apos;s not enough to just “deliver” it to
                                    a user. Make sure that everything works
                                    fine, and everybody is satisfied and always
                                    be prepared to make changes in another case.
                                </p>
                                <p className="text-stone-50 indent-2 pb-4 pt-4">
                                    The feedback system added to the site will
                                    allow you to detect possible problems the
                                    end-users face. The highest priority task,
                                    in this case, is to fix the problem as fast
                                    as you can.
                                </p>
                                <p className="text-stone-50 indent-2 pb-4 pt-4">
                                    The other important thing is keeping your
                                    site up to date. If you use a CMS, regular
                                    updates will prevent you from bugs and
                                    decrease security risks. To be sure that
                                    there will be less of them, you can opt to
                                    the custom software development services
                                    provided by outsourcing companies. In this
                                    case, you will be sure that a website or
                                    software is developed by experts, while your
                                    team can deal with other projects.
                                </p>

                                {/* gallery */}
                                <div className="gallery-item">
                                    <Image
                                        src="/images/singleblog.png"
                                        alt=""
                                        width={300}
                                        height={400}
                                        layout="responsive"
                                    />
                                    <Image
                                        src="/images/singleblog-2.png"
                                        alt=""
                                        width={300}
                                        height={400}
                                        layout="responsive"
                                    />
                                    <Image
                                        src="/images/singleblog-3.png"
                                        alt=""
                                        width={300}
                                        height={400}
                                        layout="responsive"
                                    />
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
                                    <strong>Categories:</strong> Development
                                </li>
                                <li>
                                    <strong>Date:</strong> Nov 05, 2023
                                </li>

                                <li>
                                    <strong>Live Preview:</strong>{' '}
                                    <a
                                        href="https://lindseyk.dev"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        personal page
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
