import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import CinemaGallery from './CinemaGallery';
import CinemaSection from './CinemaSection';

function Cinema() {
    return (
        <>
            <CinemaSection />
            <CinemaGallery />
            <Footer />
        </>
    )
}

export default Cinema
