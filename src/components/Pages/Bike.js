import React from 'react'
import '../../App';
import BikeCards from '../Bikecomponents/BikeCards';
import BikeSection from '../Bikecomponents/BikeSection';
import Footer from '../Footer';


function Bike() {
    return (
        <>
            <BikeSection />
            <BikeCards />
            <Footer />
        </>
    )
}

export default Bike
