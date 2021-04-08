import React from 'react'
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">Hi, I am
                <span> Manish Kumar.</span>
                </h1>
                <p className="h-sub-text">
                I’m a front-end developer with a keen eye for creating engaging UI, bringing products to life.
                </p>
                <div className="icons">
                    <Link to={{pathname:"https://www.facebook.com/Manish6022"}} target='_blank' className='icon-holder' >
                    <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link to={{pathname:"https://github.com/manish6022"}} target="_blank" className='icon-holder'>
                    <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                    </Link>
                    <Link to={{pathname:"https://www.instagram.com/theunsettledbihari"}} target="_blank" className='icon-holder'>
                    <FontAwesomeIcon icon={faInstagram} className="icon ig"/>
                    </Link>
                    <Link to={{pathname:"https://www.youtube.com/channel/UCjZvxuBfIIFW5lSr-fA2UQw"}} target="_blank" className='icon-holder'>
                    <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Home
