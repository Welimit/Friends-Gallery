import React from 'react';
import '../../App';
import Footer from '../Footer';
import OutingCards from '../Outingcomponents/OutingCards';
import OutingSection from '../Outingcomponents/OutingSection';

function Outings() {
    return (
        <>
            <OutingSection />
            <OutingCards />
            <Footer />
        </>
    )
}

export default Outings
