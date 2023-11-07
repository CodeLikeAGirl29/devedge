import Isotope from 'isotope-layout';
import Link from 'next/link';
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
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? 'glitch-effect' : '');

  useEffect(() => {
    const circle = document.querySelectorAll('.circle');
    circle.forEach((e) => {
      e.addEventListener('mouseenter', (m) => {
        console.log(
          m.pageY,
          e.offsetParent.offsetParent.offsetParent.offsetParent.offsetLeft,
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
      e.addEventListener('mouseleave', (m) => {
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
      <div className='filter-menu content-box'>
        <div className='filters'>
          <div className='btn-group'>
            <label
              data-text='All'
              className={`c-pointer ${activeBtn('box-item')}`}
              onClick={handleFilterKeyChange('box-item')}
            >
              <input type='radio' name='fl_radio' defaultValue='.box-item' />
              All
            </label>
          </div>
          <div className='btn-group'>
            <label
              className={`c-pointer ${activeBtn('f-design')}`}
              onClick={handleFilterKeyChange('f-design')}
              data-text='design'
            >
              <input type='radio' name='fl_radio' defaultValue='.f-design' />
              Design
            </label>
          </div>
          <div className='btn-group'>
            <label
              className={`c-pointer ${activeBtn('f-frontend')}`}
              onClick={handleFilterKeyChange('f-frontend')}
              data-text='frontend'
            >
              <input type='radio' name='fl_radio' defaultValue='.f-frontend' />
              Frontend
            </label>
          </div>
          <div className='btn-group'>
            <label
              className={`c-pointer ${activeBtn('f-brand')}`}
              onClick={handleFilterKeyChange('f-brand')}
              data-text='brand'
            >
              <input type='radio' name='fl_radio' defaultValue='.f-brand' />
              Branding
            </label>
          </div>
          <div className='btn-group'>
            <label
              className={`c-pointer ${activeBtn('f-image')}`}
              onClick={handleFilterKeyChange('f-image')}
              data-text='Image'
            >
              <input type='radio' name='fl_radio' defaultValue='.f-image' />
              Image
            </label>
          </div>

          <div className='btn-group'>
            <label
              className={`c-pointer ${activeBtn('f-content')}`}
              onClick={handleFilterKeyChange('f-content')}
              data-text='Content'
            >
              <input type='radio' name='fl_radio' defaultValue='.f-content' />
              Content
            </label>
          </div>
        </div>
      </div>
      {/* portfolio items */}
      <div className='box-items portfolio-items'>
        <div className='box-item f-design'>
          {' '}
          {/* add class "animate-to-page" if need animated transition to page and delete target="_blank" rel="noreferrer" */}
<<<<<<< HEAD
          <div className="image">
            <a href="#gallery-1" className="has-popup-gallery hover-animated">
              <img src="/images/work1.png" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centralize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-images" />
                    <span className="desc">
                      <span className="category">design</span>
                      <span className="name">Blog Template</span>
=======
          <div className='image'>
            <a href='#gallery-1' className='has-popup-gallery hover-animated'>
              <img src='images/work1.png' className='wp-post-image' alt='' />
              <span className='info circle'>
                <span className='centrize full-width'>
                  <span className='vertical-center'>
                    <span className='icon fas fa-images' />
                    <span className='desc'>
                      <span className='category'>design</span>
                      <span className='name'>Blog Template</span>
>>>>>>> 8ee3b4267dae07d402aa248f0e32223e568e3dd9
                    </span>
                  </span>
                </span>
              </span>
            </a>
<<<<<<< HEAD
            <div id="gallery-1" className="mfp-hide">
              <a href="/images/work1.png" />
              <a href="images/work5.png" />
              <a href="/images/work3.png" />
              <a href="images/work4.png" />
=======
            <div id='gallery-1' className='mfp-hide'>
              <a href='images/work1.png' />
              <a href='images/work5.png' />
              <a href='images/work3.png' />
              <a href='images/work4.png' />
>>>>>>> 8ee3b4267dae07d402aa248f0e32223e568e3dd9
            </div>
          </div>
        </div>
        <div className='box-item f-design'>
          <div className='image'>
            <a
              href='https://scjbuildinggroup.com/'
              className='has-popup-link hover-animated'
              target='_blank'
              rel='noreferrer'
            >
<<<<<<< HEAD
              <img src="/images/work2.png" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centralize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link" />
                    <span className="desc">
                      <span className="category">design</span>
                      <span className="name">SCJ Building Group</span>
=======
              <img src='images/work2.png' className='wp-post-image' alt='' />
              <span className='info circle'>
                <span className='centrize full-width'>
                  <span className='vertical-center'>
                    <span className='icon fas fa-link' />
                    <span className='desc'>
                      <span className='category'>design</span>
                      <span className='name'>SCJ Building Group</span>
>>>>>>> 8ee3b4267dae07d402aa248f0e32223e568e3dd9
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className='box-item f-design'>
          <div className='image'>
            <a
              href='https://www.youtube.com/embed/S4L8T2kFFck'
              className='has-popup-design hover-animated'
            >
<<<<<<< HEAD
              <img src="images/work2.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centralize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-design" />
                    <span className="desc">
                      <span className="category">design</span>
                      <span className="name">Fertility of Some Plants</span>
=======
              <img src='images/work2.jpg' className='wp-post-image' alt='' />
              <span className='info circle'>
                <span className='centrize full-width'>
                  <span className='vertical-center'>
                    <span className='icon fas fa-design' />
                    <span className='desc'>
                      <span className='category'>design</span>
                      <span className='name'>Fertility of Some Plants</span>
>>>>>>> 8ee3b4267dae07d402aa248f0e32223e568e3dd9
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className='box-item f-image'>
          <div className='image'>
            <a
              href='images/work4.jpg'
              className='has-popup-image hover-animated'
            >
<<<<<<< HEAD
              <img src="images/work4.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centralize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-image" />
                    <span className="desc">
                      <span className="category">Image</span>
                      <span className="name">Inspiration in Cap Haitian</span>
=======
              <img src='images/work4.jpg' className='wp-post-image' alt='' />
              <span className='info circle'>
                <span className='centrize full-width'>
                  <span className='vertical-center'>
                    <span className='icon fas fa-image' />
                    <span className='desc'>
                      <span className='category'>Image</span>
                      <span className='name'>Inspiration in Cap Haitian</span>
>>>>>>> 8ee3b4267dae07d402aa248f0e32223e568e3dd9
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className='box-item f-image'>
          <div className='image'>
            <a
              href='images/work7.jpg'
              className='has-popup-image hover-animated'
            >
<<<<<<< HEAD
              <img src="images/work7.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centralize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-image" />
                    <span className="desc">
                      <span className="category">Image</span>
                      <span className="name">Water and Shore</span>
=======
              <img src='images/work7.jpg' className='wp-post-image' alt='' />
              <span className='info circle'>
                <span className='centrize full-width'>
                  <span className='vertical-center'>
                    <span className='icon fas fa-image' />
                    <span className='desc'>
                      <span className='category'>Image</span>
                      <span className='name'>Water and Shore</span>
>>>>>>> 8ee3b4267dae07d402aa248f0e32223e568e3dd9
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className='box-item f-frontend'>
          <div className='image'>
            <a
              href='https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true'
              className='has-popup-frontend hover-animated'
            >
<<<<<<< HEAD
              <img src="images/work6.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centralize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-frontend" />
                    <span className="desc">
                      <span className="category">frontend</span>
                      <span className="name">Dark Bike</span>
=======
              <img src='images/work6.jpg' className='wp-post-image' alt='' />
              <span className='info circle'>
                <span className='centrize full-width'>
                  <span className='vertical-center'>
                    <span className='icon fas fa-frontend' />
                    <span className='desc'>
                      <span className='category'>frontend</span>
                      <span className='name'>Dark Bike</span>
>>>>>>> 8ee3b4267dae07d402aa248f0e32223e568e3dd9
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
<<<<<<< HEAD
        <div className="box-item f-gallery">
          <div className="image">
            <a href="#gallery-2" className="has-popup-gallery hover-animated">
              <img src="images/work5.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centralize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-images" />
                    <span className="desc">
                      <span className="category">Gallery</span>
                      <span className="name">Undulating Space</span>
=======
        <div className='box-item f-gallery'>
          <div className='image'>
            <a href='#gallery-2' className='has-popup-gallery hover-animated'>
              <img src='images/work5.jpg' className='wp-post-image' alt='' />
              <span className='info circle'>
                <span className='centrize full-width'>
                  <span className='vertical-center'>
                    <span className='icon fas fa-images' />
                    <span className='desc'>
                      <span className='category'>Gallery</span>
                      <span className='name'>Undulating Space</span>
>>>>>>> 8ee3b4267dae07d402aa248f0e32223e568e3dd9
                    </span>
                  </span>
                </span>
              </span>
            </a>
            <div id='gallery-2' className='mfp-hide'>
              <a href='images/work5.jpg' />
              <a href='images/work1.jpg' />
              <a href='images/work2.jpg' />
              <a href='images/work3.jpg' />
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="box-item f-content">
          <div className="image">
            <a href="#popup-1" className="has-popup-media hover-animated">
              <img src="images/work8.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centralize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-plus" />
                    <span className="desc">
                      <span className="category">Content</span>
                      <span className="name">Curved Ceiling Ribs</span>
=======
        <div className='box-item f-content'>
          <div className='image'>
            <a href='#popup-1' className='has-popup-media hover-animated'>
              <img src='images/work8.jpg' className='wp-post-image' alt='' />
              <span className='info circle'>
                <span className='centrize full-width'>
                  <span className='vertical-center'>
                    <span className='icon fas fa-plus' />
                    <span className='desc'>
                      <span className='category'>Content</span>
                      <span className='name'>Curved Ceiling Ribs</span>
>>>>>>> 8ee3b4267dae07d402aa248f0e32223e568e3dd9
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div id='popup-1' className='popup-box mfp-fade mfp-hide'>
            <div className='content'>
              <div
                className='image'
                style={{ backgroundImage: 'url(images/work8.jpg)' }}
              />
              <div className='desc single-post-text'>
                <div className='category'>Content</div>
                <h4>Hand holding pyramid painting</h4>
                <p>
                  Now there is more fashion. There is no so-called trends. Now
                  chase after anything not necessary — nor for fashionable color
                  nor the shape, nor for style. Think about the content that you
                  want to invest in a created object, and only then will form.
                  The thing is your spirit. A spirit unlike forms hard copy.
                </p>
                <ul>
                  <li>
                    Now there is more fashion. There is no so-called trends.
                  </li>
                  <li>
                    Now chase after anything not necessary — nor for fashionable
                    color nor the shape, nor for style.
                  </li>
                  <li>
                    Think about the content that you want to invest in a created
                    object, and only then will form.
                  </li>
                  <li>
                    The thing is your spirit. A spirit unlike forms hard copy.
                  </li>
                </ul>
                <p>
                  Now there is more fashion. There is no so-called trends. Now
                  chase after anything not necessary — nor for fashionable color
                  nor the shape, nor for style. Think about the content that you
                  want to invest in a created object, and only then will form.
                  The thing is your spirit. A spirit unlike forms hard copy.
                </p>
                <Link href='/works_single_1' className='btn hover-animated'>
                  <span className='circle' />
                  <span className='lnk'>View Project</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ItemIsotope;
