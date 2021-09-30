import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import SchmemGallery from './Sch-memGallery';
import SchmemSection from './Sch-memSection';

function Schmem() {
    return (
        <>
            <SchmemSection />
            <SchmemGallery />
            <Footer />
        </>
    )
}

export default Schmem
