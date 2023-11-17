import Isotope from 'isotope-layout';
import Link from 'next/link';
import Image from 'next/image';
import { Fragment, useEffect, useRef, useState } from 'react';
import { parallax } from '../utils';

const ItemIsotope = () => {
    useEffect(() => {
        parallax();
    }, []);

    // Isotope
    const isotope = useRef();
    const [filterKey, setFilterKey] = useState('box-item');
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope('.portfolio-items', {
                itemSelector: '.box-item',
                //    layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: '.box-item',
                },
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                },
            });
        }, 1000);
        //     return () => isotope.current.destroy();
    }, []);
    useEffect(() => {
        if (isotope.current) {
            filterKey === '*'
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` });
        }
    }, [filterKey]);
    const handleFilterKeyChange = key => () => {
        setFilterKey(key);
    };
    const activeBtn = value => (value === filterKey ? 'glitch-effect' : '');

    useEffect(() => {
        const circle = document.querySelectorAll('.circle');
        circle.forEach(e => {
            e.addEventListener('mouseenter', m => {
                console.log(
                    m.pageY,
                    e.offsetParent.offsetParent.offsetParent.offsetParent
                        .offsetLeft,
                    e.offsetTop,
                );
                if (!e.getElementsByClassName('ink')[0]) {
                    const span = document.createElement('span');
                    span.classList.add('ink');
                    e.appendChild(span);
                    span.classList.add('ink-animate');
                    // span.style.height = `${e.clientHeight}px`;
                    // span.style.width = `${e.clientWidth}px`;
                    // span.style.top = `${m.pageY - e.offsetTop - e.clientHeight / 2}px`;
                    // span.style.left = `${m.pageX - e.offsetLeft - e.clientWidth / 2}px`;
                }
            });
            e.addEventListener('mouseleave', () => {
                const span = document.querySelector('.ink');
                if (span) {
                    span.classList.remove('ink-animate');
                }
            });
        });
    }, []);

    return (
        <Fragment>
            {/* portfolio filter */}
            <div className="filter-menu content-box">
                <div className="filters">
                    <div className="btn-group">
                        <label
                            data-text="All"
                            className={`c-pointer ${activeBtn('box-item')}`}
                            onClick={handleFilterKeyChange('box-item')}
                        >
                            <input
                                type="radio"
                                name="fl_radio"
                                defaultValue=".box-item"
                            />
                            All
                        </label>
                    </div>
                    <div className="btn-group">
                        <label
                            className={`c-pointer ${activeBtn('f-design')}`}
                            onClick={handleFilterKeyChange('f-design')}
                            data-text="design"
                        >
                            <input
                                type="radio"
                                name="fl_radio"
                                defaultValue=".f-design"
                            />
                            Design
                        </label>
                    </div>
                    <div className="btn-group">
                        <label
                            className={`c-pointer ${activeBtn('f-frontend')}`}
                            onClick={handleFilterKeyChange('f-frontend')}
                            data-text="frontend"
                        >
                            <input
                                type="radio"
                                name="fl_radio"
                                defaultValue=".f-frontend"
                            />
                            Frontend
                        </label>
                    </div>
                    <div className="btn-group">
                        <label
                            className={`c-pointer ${activeBtn('f-brand')}`}
                            onClick={handleFilterKeyChange('f-brand')}
                            data-text="brand"
                        >
                            <input
                                type="radio"
                                name="fl_radio"
                                defaultValue=".f-brand"
                            />
                            Branding
                        </label>
                    </div>
                    <div className="btn-group">
                        <label
                            className={`c-pointer ${activeBtn('f-image')}`}
                            onClick={handleFilterKeyChange('f-image')}
                            data-text="Image"
                        >
                            <input
                                type="radio"
                                name="fl_radio"
                                defaultValue=".f-image"
                            />
                            Image
                        </label>
                    </div>

                    <div className="btn-group">
                        <label
                            className={`c-pointer ${activeBtn('f-content')}`}
                            onClick={handleFilterKeyChange('f-content')}
                            data-text="Content"
                        >
                            <input
                                type="radio"
                                name="fl_radio"
                                defaultValue=".f-content"
                            />
                            Content
                        </label>
                    </div>
                </div>
            </div>
            {/* portfolio items */}
            <div className="box-items portfolio-items">
                <div className="box-item f-design">
                    {' '}
                    {/* add class "animate-to-page" if need animated transition to page and delete target="_blank" rel="noreferrer" */}
                    <div className="image">
                        <a
                            href="https://codelikeagirl29.github.io/blog/"
                            className="has-popup-gallery hover-animated"
                        >
                            <Image
                                src="/images/work1.png"
                                className="wp-post-image"
                                alt=""
                                width={700}
                                height={1000}
                                layout={'responsive'}
                            />
                            <span className="info circle">
                                <span className="centralize full-width">
                                    <span className="vertical-center">
                                        <span className="icon fas fa-code" />
                                        <span className="desc">
                                            <span className="category">
                                                code
                                            </span>
                                            <span className="name">
                                                Blog Template
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </a>
                        {/*<div id="gallery-1" className="mfp-hide">
                            <a href="/images/work1.png" />
                            <a href="/images/work5.png" />
                            <a href="/images/work3.png" />
                            <a href="images/work4.png" />
                        </div>*/}
                    </div>
                </div>
                <div className="box-item f-design">
                    <div className="image">
                        <a
                            href="https://scjbuildinggroup.com/"
                            className="has-popup-link hover-animated"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                src="/images/work2.png"
                                className="wp-post-image"
                                alt=""
                                width={700}
                                height={1000}
                                layout={'responsive'}
                            />
                            <span className="info circle">
                                <span className="centralize full-width">
                                    <span className="vertical-center">
                                        <span className="icon fas fa-palette" />
                                        <span className="desc">
                                            <span className="category">
                                                design
                                            </span>
                                            <span className="name">
                                                SCJ Building Group
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="box-item f-frontend">
                    <div className="image">
                        <a
                            href="https://www.github.com/codelikeagirl29/gitprofile"
                            className="has-popup-design hover-animated"
                        >
                            <Image
                                src="/images/gitprofile-screenshot.png"
                                className="wp-post-image"
                                alt=""
                                width={1000}
                                height={800}
                                layout={'responsive'}
                            />
                            <span className="info circle">
                                <span className="centralize full-width">
                                    <span className="vertical-center">
                                        <span className="icon fas fa-code" />
                                        <span className="desc">
                                            <span className="category">
                                                frontend
                                            </span>
                                            <span className="name">
                                                GitProfile
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="box-item f-design">
                    <div className="image">
                        <a
                            href="/images/galaxy-ventures.png"
                            className="has-popup-image hover-animated"
                        >
                            <Image
                                src="/images/galaxy-ventures.png"
                                className="wp-post-image"
                                alt=""
                                width={700}
                                height={1000}
                                layout={'responsive'}
                            />
                            <span className="info circle">
                                <span className="centralize full-width">
                                    <span className="vertical-center">
                                        <span className="icon fas fa-palette" />
                                        <span className="desc">
                                            <span className="category">
                                                design
                                            </span>
                                            <span className="name">
                                                Galaxy Ventures
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="box-item f-image">
                    <div className="image">
                        <a
                            href="https://image-gallery-eight-lac.vercel.app/"
                            className="has-popup-image hover-animated"
                        >
                            <Image
                                src="/images/img-gallery.png"
                                className="wp-post-image"
                                alt=""
                                width={750}
                                height={900}
                                layout={'responsive'}
                            />
                            <span className="info circle">
                                <span className="centralize full-width">
                                    <span className="vertical-center">
                                        <span className="icon fas fa-image" />
                                        <span className="desc">
                                            <span className="category">
                                                image
                                            </span>
                                            <span className="name">
                                                Imgs w/ Cloudinary API
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="box-item f-frontend">
                    <div className="image">
                        <a
                            href="http://dictionarium.vercel.app/"
                            className="has-popup-frontend hover-animated"
                        >
                            <Image
                                src="/images/work5.png"
                                className="wp-post-image"
                                alt=""
                                width={1000}
                                height={800}
                                layout={'responsive'}
                            />
                            <span className="info circle">
                                <span className="centralize full-width">
                                    <span className="vertical-center">
                                        <span className="icon fas fa-code" />
                                        <span className="desc">
                                            <span className="category">
                                                frontend
                                            </span>
                                            <span className="name">
                                                Dictionarium
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="box-item f-gallery">
                    <div className="image">
                        <a
                            href="#gallery-2"
                            className="has-popup-gallery hover-animated"
                        >
                            <Image
                                src="/images/work7.png"
                                className="wp-post-image"
                                alt=""
                                width={1000}
                                height={800}
                                layout={'responsive'}
                            />
                            <span className="info circle">
                                <span className="centralize full-width">
                                    <span className="vertical-center">
                                        <span className="icon fas fa-palette" />
                                        <span className="desc">
                                            <span className="category">
                                                design
                                            </span>
                                            <span className="name">
                                                Scrimba Projects / Reactjs
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="box-item f-content">
                    <div className="image">
                        <a
                            href="#popup-1"
                            className="has-popup-media hover-animated"
                        >
                            <Image
                                src="/images/work6.png"
                                className="wp-post-image"
                                alt=""
                                width={1000}
                                height={800}
                                layout={'responsive'}
                            />
                            <span className="info circle">
                                <span className="centralize full-width">
                                    <span className="vertical-center">
                                        <span className="icon fas fa-plus" />
                                        <span className="desc">
                                            <span className="category">
                                                content
                                            </span>
                                            <span className="name">
                                                Redux Expenses
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </a>
                    </div>
                    <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                        <div className="content">
                            <div
                                className="image"
                                style={{
                                    backgroundImage: 'url(/images/work6.png)',
                                    backgroundSize: 'cover',
                                }}
                            />
                            <div className="desc single-post-text">
                                <div className="category">content</div>
                                <h4>Redux Expenses</h4>
                                <p className="text-stone-50 indent-2 pb-4">
                                    Managing finances effectively is a
                                    cornerstone of success for any project or
                                    website. As site owners, tracking expenses
                                    and budget allocation is crucial. In this
                                    guide, we&apos;ll explore how to build a
                                    site budgeting application using Redux, a
                                    powerful state management library for
                                    JavaScript applications.
                                </p>
                                <h5>Why Redux for Budgeting?</h5>
                                <p className="text-stone-50 indent-2 pb-4">
                                    Redux offers a centralized store to manage
                                    the application&apos;s state, making it
                                    ideal for handling financial data. Its
                                    unidirectional data flow simplifies tracking
                                    and updating budgets, expenses, and
                                    categories. Here&apos;s a step-by-step
                                    process to create your Redux-powered site
                                    budgeting app:
                                </p>
                                <ul className="text-stone-50 pb-4">
                                    <li>
                                        Define Actions: Create action types &
                                        action creators for adding, deleting, or
                                        updating budgets and expenses.
                                    </li>
                                    <li>
                                        Reducers: Write reducers to handle these
                                        actions and update the state
                                        accordingly. Maintain separate reducers
                                        for budgets, expenses, and categories.
                                    </li>
                                    <li>
                                        Connect Redux to Components: Use
                                        React-Redux to connect your components
                                        with the Redux store. Dispatch actions
                                        from components to update the state.
                                    </li>
                                </ul>
                                <p className="text-stone-50 indent-2 pb-4">
                                    Building a budgeting app with Redux empowers
                                    website owners to effectively manage their
                                    finances. By centralizing data management
                                    and enabling seamless updates, Redux
                                    streamlines the budgeting process.
                                </p>
                                <p className="pt-6 pb-4">
                                    <Link
                                        href="https://expenses-redux.netlify.app/"
                                        className="btn hover-animated"
                                    >
                                        <span className="circle" />
                                        <span className="lnk">
                                            View Project
                                        </span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default ItemIsotope;
