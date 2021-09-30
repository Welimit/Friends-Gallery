import React from 'react';
import '../../App';
import TripCards from '../Tripscomponents/TripCards';
import TripSection from '../Tripscomponents/TripSection';
import Footer from '../Footer';

function Trips() {
    return (
        <>
        <TripSection />
        <TripCards />
        <Footer /> 
        </>
    )
}

export default Trips
