import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import MallGallery from './MallGallery';
import MallSection from './MallSection';

function Mall() {
    return (
        <>
            <MallSection />
            <MallGallery />
            <Footer/>
        </>
    )
}

export default Mall
