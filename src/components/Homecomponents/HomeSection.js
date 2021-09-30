import React from 'react';
import '../../App';
import { Button } from '../Button';
import './HomeSection.css';

function HomeSection() {
    return (
        <>
        <div className="hero-container">
            {/*<video src="/videos/video-1.mp4" autoPlay loop muted/> */}
            < img src="\images\friend-1.jpg" alt="/" />
            <h1>Friends Gallery</h1>
            <p>Collecting Memories </p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline'
                        buttonSize='btn-large'>Get Started</Button>
            </div>
        </div>
        <div className="hero-container-1">
            <img  src="\images\img-6.jpg" alt="" />
            <h1>We Are Tie until We Die</h1>
            <p> Family </p>
        </div>
        </>
    )
}

export default HomeSection;
