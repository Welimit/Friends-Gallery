import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import WastedGallery from './WastedGallery';
import WastedSection from './WastedSection';

function Wasted() {
    return (
        <>
            <WastedSection />
            <WastedGallery />
            <Footer />
        </>
    )
}

export default Wasted
