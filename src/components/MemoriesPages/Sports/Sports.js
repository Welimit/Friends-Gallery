import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import SportsGallery from './SportsGallery';
import SportsSection from './SportsSection';

function Sports() {
    return (
        <>
            <SportsSection />
            <SportsGallery />
            <Footer />
        </>
    )
}

export default Sports
