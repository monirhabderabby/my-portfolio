import React from 'react';
import './Profile.module.css'

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
                </div>
            </div>
        </div>
    );
};

export default Profile;