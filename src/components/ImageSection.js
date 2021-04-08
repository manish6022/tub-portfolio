import React from 'react'
import about from '../images/about.png'
import {Paper} from '@material-ui/core'
function ImageSection() {
    const Age = () => {
        var date = new Date();
        var year = date.getFullYear();
        const YOB = 1992;
        var age = year-YOB
        return age
    }
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=''/>
            </div>
            <div className="about-info">
                <h4>I am<span> Manish Kumar</span></h4>
                <p className="about-text">I am a self-taught web developer with a strong eye for innovative design and a keen understanding of techniques geared toward optimum user experience. To work in an environment where my skill and knowledge reflects the growth of the company and enhance my knowledge as well as experience.
                </p>
                    <div className="about-details">
                        <div className="left-section">
                            <p>Full Name</p>
                            <p>Age</p>
                            <p>Nationality</p>
                            <p>Languages</p>
                            <p>Address</p>
                            <p>Qualiication</p>
                        </div>
                        <div className="right-section">
                            <p>: Manish Kumar</p>
                            <p>: <Age/></p>
                            <p>: Indian</p>
                            <p>: Hindi, English</p>
                            <p>: Mukherjee Nagar, New Delhi, Delhi 110009</p>
                            <p>: B.Tech Computer Science And Engineering.</p>
                        </div>
                    </div>
                    <form target="_blank">
                    <button  type="submit" className="btn" formAction='https://drive.google.com/file/d/1JBX48zv3nCgL1S9uUJQnJZOGcsjFbunC/view?usp=sharing'>Download CV</button>
                    </form>
            </div>
        </div>
    )
}

export default ImageSection
