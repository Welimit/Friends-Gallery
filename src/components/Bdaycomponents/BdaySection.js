import React from 'react';
import Button from '../Button';
import '../../App';
import '../Homecomponents/HomeSection.css';

function BdaySection() {
    return (
        <>
        <div className="hero-container">
            {/*<video src="/videos/video-1.mp4" autoPlay loop muted/> */}
            < img src="\images\bday.jpg" alt="/" />
            <h1>BirthDay Collections</h1>
            <p>Collecting Memories </p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline'
                        buttonSize='btn-large'>Get Started</Button>
            </div>
        </div>
        </>
    )
}

export default BdaySection
