import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import ShoppingGallery from './ShoppingGallery';
import ShoppingSection from './ShoppingSection';

function Shopping() {
    return (
        <>
            <ShoppingSection />
            <ShoppingGallery />
            <Footer />
        </>
    )
}

export default Shopping
