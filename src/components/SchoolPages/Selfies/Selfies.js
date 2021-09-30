import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import SelfiesGallery from './SelfiesGallery';
import SelfiesSection from './SelfiesSection';

function Selfies() {
    return (
        <>
            <SelfiesSection />
            <SelfiesGallery />
            <Footer />
        </>
    )
}

export default Selfies
