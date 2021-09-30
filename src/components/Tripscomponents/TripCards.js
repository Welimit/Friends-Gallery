import React from 'react';
import '../Homecomponents/Cards.css';
import CardItem from '../Carditem';

function TripCards() {
    return (
        <div className='cards'>
        <h1>Welcome to Heaven</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                src='images/trichy.jpg'
                text='“Travel is the only thing you buy that makes you richer” (Chennai To Trichy)'
                label='Mystery'
                path='/Trichy'
                />
                <CardItem
                src='images/bengaluru.jpg'
                text='“Travel is the only thing you buy that makes you richer” (Chennai to Bengaluru)'
                label='Adventure'
                path='/Bengaluru'
                />
            </ul>
            </div>
        </div>
        </div>
    );
}

export default TripCards
