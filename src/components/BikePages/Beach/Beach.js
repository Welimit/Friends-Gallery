import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import BeachGallery from './BeachGallery';
import BeachSection from './BeachSection';

function Beach() {
    return (
        <>
            <BeachSection />
            <BeachGallery />
            <Footer />
        </>
    )
}

export default Beach
