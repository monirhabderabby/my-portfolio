import React from 'react';
import './Profile.css'
import Typical from 'react-typical'
import Navbar from '../../Shared/Navbar';

const Profile = () => {
    return (
        <section className='container-pro'>
            <Navbar />
                <div className='profile-container'>
                    <div className='profile-parent'>
                        <div className='profile-details'>
                            <div className='colz'>
                                <div className='colz-icon'>
                                <a href="https://www.facebook.com/monirhabderabby/">
                                    <i className='fa fa-facebook-square'></i>
                                </a>
                                <a href="https://www.linkedin.com/in/monirhabderabby/">
                                    <i className='fa fa-linkedin'></i>
                                </a>
                                <a href="https://www.instagram.com/monirhabderabby/">
                                    <i className='fa fa-instagram'></i>
                                </a>
                                <a href="https://github.com/monirhabderabby">
                                    <i className='fa fa-github'></i>
                                </a>
                                <a href="https://twitter.com/monirhabderabby">
                                    <i className='fa fa-twitter'></i>
                                </a>
                                </div>
                                
                            </div>
                            <div className='profile-details-name'>
                                <span className='primary-text'>
                                    {" "}
                                    Hello, I'M <span className='highlighted-text'>Monir Hossain</span>
                                </span>
                            </div>
                            <div className='profile-details-role'>
                                <span className='primary-text'>
                                    {" "}
                                    <h1>
                                        {" "}
                                        <Typical 
                                        loop={Infinity}
                                        steps={[
                                            "Front End Developer 🖥",
                                            3000,
                                            "React Developer 💻",
                                            3000,
                                            "MERN Stack Developer 🖥",
                                            3000,
                                            "Full Stack Developer 💻",
                                            3000,
                                        ]}
                                        />
                                    </h1>
                                    <span className='profile-role-tagline'>
                                        Knock of building web application with front and back end operations.
                                    </span>
                                </span>
                            </div>
                            <div className='profile-options'>
                                <button className='btn primary-btn'>
                                    {""}
                                    Hire me{" "}
                                </button>
                                <a href="Monir-Hossain-Resume.pdf" download="Monir-Hossain-Resume.pdf">
                                    <button className='btn highlighted-btn'>Get Resume</button>
                                </a>
                            </div>
                        </div>
                        <div className='profile-picture'>
                            <div className='profile-picture-background'>

                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Profile;