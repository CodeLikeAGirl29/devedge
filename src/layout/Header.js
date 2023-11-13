import Link from 'next/link';
import { Fragment, useState } from 'react';

const Menu = () => (
    <Fragment>
        <div className="logo hover-masks-logo">
            <a href="#">
                <span className="mask-lnk">
                    Lindsey <strong>Howard</strong>
                </span>
                <span className="mask-lnk mask-lnk-hover">
                    Download <strong>CV</strong>
                </span>
            </a>
        </div>
        {/* top menu */}
        <div className="top-menu hover-masks">
            <div className="top-menu-nav">
                <div className="menu-topmenu-container">
                    <ul className="menu">
                        <li className="menu-item menu-item-has-children">
                            <Link href="/">
                                <span className="mask-lnk">Home</span>
                                <span className="mask-lnk mask-lnk-hover">
                                    Home
                                </span>
                            </Link>
                            <ul className="sub-menu">
                                <li className="menu-item">
                                    <Link href="/index_creative">
                                        <span className="mask-lnk">
                                            Home Creative
                                        </span>
                                        <span className="mask-lnk mask-lnk-hover">
                                            Home Creative
                                        </span>
                                    </Link>
                                </li>

                                <li className="menu-item">
                                    <Link href="/index_personal">
                                        <span className="mask-lnk">
                                            Home Personal
                                        </span>
                                        <span className="mask-lnk mask-lnk-hover">
                                            Home Personal
                                        </span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link href="/index_onepage" target="blank">
                                        <span className="mask-lnk">
                                            Home OnePage
                                        </span>
                                        <span className="mask-lnk mask-lnk-hover">
                                            Home OnePage
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item menu-item-has-children">
                            <Link href="/resume_creative">
                                <span className="mask-lnk">Resume</span>
                                <span className="mask-lnk mask-lnk-hover">
                                    Resume
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item menu-item-has-children">
                            <Link href="/works">
                                <span className="mask-lnk">Projects</span>
                                <span className="mask-lnk mask-lnk-hover">
                                    Projects
                                </span>
                            </Link>
                            <ul className="sub-menu">
                                <li className="menu-item">
                                    <Link href="/works">
                                        <span className="mask-lnk">
                                            Projects Default
                                        </span>
                                        <span className="mask-lnk mask-lnk-hover">
                                            Projects Default
                                        </span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link href="/works_creative">
                                        <span className="mask-lnk">
                                            Projects Creative
                                        </span>
                                        <span className="mask-lnk mask-lnk-hover">
                                            Projects Creative
                                        </span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link href="/work_single">
                                        <span className="mask-lnk">
                                            Projects Single
                                        </span>
                                        <span className="mask-lnk mask-lnk-hover">
                                            Projects Single
                                        </span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link href="/work_single_image">
                                        <span className="mask-lnk">
                                            Projects Single Image
                                        </span>
                                        <span className="mask-lnk mask-lnk-hover">
                                            Projects Single Image
                                        </span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link href="/work_single_creative">
                                        <span className="mask-lnk">
                                            Projects Single Creative
                                        </span>
                                        <span className="mask-lnk mask-lnk-hover">
                                            Projects Single Creative
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item menu-item-has-children">
                            <Link href="/blog">
                                <span className="mask-lnk">Blog</span>
                                <span className="mask-lnk mask-lnk-hover">
                                    Blog
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item menu-item-has-children">
                            <Link href="/contacts_creative">
                                <span className="mask-lnk">Contact</span>
                                <span className="mask-lnk mask-lnk-hover">
                                    Contact
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Fragment>
);

const Header = () => {
    return (
        <Fragment>
            <MobileHeader />
            <DeskTopHeader />
        </Fragment>
    );
};
export default Header;

const DeskTopHeader = () => (
    <header className={`header desktopHeader`}>
        <div className="head-top">
            <Menu />
        </div>
    </header>
);

const MobileHeader = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <header className={`header mobileHeader ${toggle ? 'active' : ''}`}>
            <div className="head-top">
                {/* menu button */}
                <a
                    href="#"
                    className="menu-btn"
                    onClick={() => setToggle(!toggle)}
                >
                    <span />
                </a>
                {/* logo */}
                <Menu />
            </div>
        </header>
    );
};
