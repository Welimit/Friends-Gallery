import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import MemoriesGallery from './MemoriesGallery';
import MemoriesSection from './MemoriesSection';

function Memories() {
    return (
        <>
            <MemoriesSection />
            <MemoriesGallery />
            <Footer />
        </>
    )
}

export default Memories
