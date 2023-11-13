import Image from 'next/image';

const About = () => {
    return (
        <div className="section about" id="next_section">
            <div className="content content-box">
                {/* image */}
                <div className="image">
                    <Image
                        src="/images/avatar-img.png"
                        alt=""
                        height={200}
                        width={200}
                    />
                </div>
                {/* desc */}
                <div className="desc">
                    <p>
                        Hello! I&apos;m Lindsey. 👩‍💻 Coding my way through
                        pixel-perfection with a dash of creativity and a
                        sprinkle of caffeine, I am the frontend sorceress
                        you&apos;ve been searching for. When I&apos;m not
                        turning coffee into code, you&apos;ll find me making
                        browsers dance and user interfaces sing. With a penchant
                        for pretty pixels and an eye for design that would make
                        Pantone blush, I&apos;m your web wizard, your CSS
                        conjurer, and your JavaScript juggler all rolled into
                        one. Ready to turn your web dreams into reality, one
                        line of code at a time! 💻🪄🦄 #FrontendFinesse
                    </p>
                    <div className="info-list">
                        <ul>
                            <li>
                                <strong>Age:</strong> 32
                            </li>
                            <li>
                                <strong>Residence:</strong> FL
                            </li>
                            <li>
                                <strong>Freelance:</strong> Available
                            </li>
                            <li>
                                <strong>Address:</strong> Fort Walton Beach, FL
                            </li>
                            <li>
                                <strong>Phone:</strong> 850.865.2684
                            </li>
                            <li>
                                <strong>E-mail:</strong>{' '}
                                codelikeagirl91@gmail.com
                            </li>
                        </ul>
                    </div>
                    <div className="bts">
                        <a href="#" className="btn hover-animated">
                            <span className="circle" />
                            <span className="lnk">Download CV</span>
                        </a>
                    </div>
                </div>
                <div className="clear" />
            </div>
        </div>
    );
};
export default About;
