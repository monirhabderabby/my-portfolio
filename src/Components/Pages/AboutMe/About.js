import React from 'react';
import './About.css'
import img from '../../../Assets/Home/aboutpic.jpg';
const About = () => {
    return (
        
            
        <section className='about'>
            <div className="heading-container">
                <div className="screan-heading" id='aboutme'>
                    <span>About Me</span>
                </div>
                <div className='screan-sub-heading'>
                    <span style={{ fontSize: "30px" }}>Why Choose My?</span>
                </div>
                <div className='a-heading-separator'>
                    <div className='a-separator-line'></div>
                    <div className='a-separator-blob'><div></div></div>
                </div>
            </div>
            <div className='about-main-container'>
            <div className="about-card">
                <div className='img-container'>
                    <img src={img} alt="" />
                </div>
                <div className='about-me-details'>
                    <span className='about-me-description'>Front End Web Developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.</span>
                    <div className='about-me-hightlights'>
                        <div className='hightlight-heading'>
                            <span>Here are few highlights: </span>
                        </div>
                        <div className="highlight">
                            <div className='highlight-blob'></div>
                            <span>Full Stack Web Development</span>
                        </div>
                        <div className="highlight">
                            <div className='highlight-blob'></div>
                            <span>React Developement</span>
                        </div>
                        <div className="highlight">
                            <div className='highlight-blob'></div>
                            <span>Front End Engineer</span>
                        </div>
                        <div className="highlight">
                            <div className='highlight-blob'></div>
                            <span>Building Rest Api</span>
                        </div>
                        <div className="highlight">
                            <div className='highlight-blob'></div>
                            <span>Managing MongoDB Database</span>
                        </div>
                    </div>

                    <div>
                    <a href="Monir-Hossain-Resume.pdf" download="Monir-Hossain-Resume.pdf">
                                    <button className='btn highlighted-btn'>Get Resume</button>
                                </a>
                    </div>
                </div>
            </div>
        </div>
        </section>
        
    );
};

export default About;