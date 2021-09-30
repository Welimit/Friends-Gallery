import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import HotelGallery from './HotelGallery';
import HotelSection from './HotelSection';

function Hotel() {
    return (
        <>
            <HotelSection />
            <HotelGallery />
            <Footer />
        </>
    )
}

export default Hotel
