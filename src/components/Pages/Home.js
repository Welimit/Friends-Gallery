import React from 'react'
import '../../App';
import Cards from '../Homecomponents/Cards';
import Footer from '../Footer';
import HomeSection from '../Homecomponents/HomeSection';


function Home() {
    return (
        <>
            <HomeSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;
