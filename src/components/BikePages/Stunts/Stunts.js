import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import StuntsGallery from './StuntsGallery';
import StuntsSection from './StuntsSection';

function Stunts() {
    return (
        <>
            <StuntsSection />
            <StuntsGallery />
            <Footer />
        </>
    )
}

export default Stunts
