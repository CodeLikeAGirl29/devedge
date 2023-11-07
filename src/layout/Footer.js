const Footer = () => {
  return (
    <footer className='footer'>
      <div className='copy'>
        <p>E: codelikeagirl91@gmail.com</p>
        <p>T: (850) 865.2684</p>
      </div>
      <div className='soc-box'>
        <div className='follow-label'>Follow Me</div>
        <div className='soc'>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/lindsey-howard'
          >
            <span className='icon fab fa-linkedin' />
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.github.com/codelikeagirl29'
          >
            <span className='icon fab fa-github' />
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://dribbble.com/codelikeagirl29'
          >
            <span className='icon fab fa-dribbble' />
          </a>
        </div>
      </div>
      <div className='clear' />
    </footer>
  );
};
export default Footer;
