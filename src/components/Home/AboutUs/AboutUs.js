import React from 'react';
import './AboutUs.css'
import about from '../../../images/about.25446d91.jpg'

const AboutUs = () => {
    return (
        <section id="about">
            <div className="section-header">
                <h1>About Us</h1>
            </div>
            <div className="about-container">
                <h1>We Are Awesome</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, non voluptate est quis quia nam recusandae ea, quam laboriosam aspernatur explicabo? Sit magni quibusdam quia facere dolores incidunt, dolore cumque.</p>
                <img className="about-img" src={about} alt="" />
            </div>
        </section>
    );
};

export default AboutUs;