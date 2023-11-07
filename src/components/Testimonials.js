import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);

const Testimonials = () => {
  const props = {
    loop: true,
    spaceBetween: 70,
    slidesPerView: 2,
    autoplay: {
      delay: 6000,
    },
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
    breakpoints: {
      720: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 70,
      },
    },
  };
  return (
    <div className='section testimonials' id='section-testimonials'>
      <div className='content'>
        {/* title */}
        <div className='title'>
          <div className='title_inner'>Testimonials</div>
        </div>
        {/* testimonials items */}
        <div className='reviews-carousel'>
          <Swiper {...props} className='swiper-container'>
            <div className='swiper-wrapper'>
              <SwiperSlide className='swiper-slide'>
                <div className='reviews-item content-box'>
                  <div className='image'>
                    <img src='images/rev1.jpg' alt='' />
                  </div>
                  <div className='info'>
                    <div className='name'>Precious Gartrell</div>
                    <div className='company'>Tech Support</div>
                  </div>
                  <div className='text'>
                    Lindsey is always participating in class and problem solves
                    well. She is a team player, always ready to help her
                    classmates in whatever way she can. She even took the
                    initiative to reach out to me personally regarding a
                    question I had in class for my teacher. I&apos;m confident
                    she will be a good addition to any team!
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className='reviews-item content-box'>
                  <div className='image'>
                    <img src='images/rev1.jpg' alt='' />
                  </div>
                  <div className='info'>
                    <div className='name'>Anne Racel</div>
                    <div className='company'>Branch Chief at US Air Force</div>
                  </div>
                  <div className='text'>
                    I mentored Lindsey through her online training program. I
                    found her intelligent and eager to learn. I would highly
                    recommend her for any web development opportunity.
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          {/* navigation */}
          <div className='swiper-nav'>
            <a className='prev swiper-button-prev fas fa-long-arrow-alt-left' />
            <a className='next swiper-button-next fas fa-long-arrow-alt-right' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
