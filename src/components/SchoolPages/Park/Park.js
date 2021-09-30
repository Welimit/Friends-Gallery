import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import ParkGallery from './ParkGallery';
import ParkSection from './ParkSection';

function Park() {
    return (
        <>
            <ParkSection />
            <ParkGallery />
            <Footer />
        </>
    )
}

export default Park
