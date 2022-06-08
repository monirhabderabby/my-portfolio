import React from 'react';
import './Profile.module.css'
import Typical from 'react-typical'

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-detail'>
                    <div className='colz'>
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
                                    1000,
                                    "React Developer 💻",
                                    1000,
                                    "MERN Stack Developer 🖥",
                                    1000,
                                    "Full Stack Developer 💻",
                                    1000,
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
            </div>
        </div>
    );
};

export default Profile;