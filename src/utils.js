export const cursor = () => {
  const cursor = document.querySelector(".cursor-follower");
  document.addEventListener("mousemove", function (e) {
    const { pageX: x, pageY: y } = e;
    cursor.style.transform = `translate3d(${x}px,${y}px,0px)`;
  });

  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => cursor.classList.add("cursor-hover"));
    link.addEventListener("mouseleave", () => cursor.classList.remove("cursor-hover"));
  });
};

export const parallax = () => {
  const simpleParallax = require("simple-parallax-js");
  const s_parallax = document.querySelector(".wp-post-image");
  new simpleParallax(s_parallax);
};

export const stickyNav = () => {
  window.addEventListener("scroll", () => {
    const offset = window.scrollY;
    const sticky = document.querySelector(".header");
    if (sticky) {
      if (offset > 100) {
        sticky.classList.add('fixed');
        document.querySelector('body').classList.remove('background-enabled');
      } else {
        sticky.classList.remove('fixed');
        document.querySelector('body').classList.add('background-enabled');
      }
    }
  });
};

export const createSkillsDot = () => {
  const skills_dotted = document.querySelectorAll(".skills .progress");
  skills_dotted.forEach((skill) => {
    skill.insertAdjacentHTML(
      'beforeend',
      '<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>',
    );
    let percentage = skill.querySelector(".percentage");
    percentage.insertAdjacentHTML(
      'beforeend',
      '<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>',
    );
    let width = skill.clientWidth;
    let da = percentage.querySelector(".da");
    da.style.width = `${width}px`;
  });
};

export const dotResize = () => {
  window.addEventListener("resize", () => {
    const skills_dotted = document.querySelectorAll(".skills-list.dotted .progress");
    skills_dotted.forEach((skill) => {
      let width = skill.clientWidth;
      let da = skill.querySelector(".da");
      da.style.width = `${width + 1}px`;
    });
  });
};
