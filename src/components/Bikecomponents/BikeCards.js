import React from 'react';
import '../Homecomponents/Cards.css';
import CardItem from '../Carditem';

function BikeCards() {
    return (
        <div className='cards'>
        <h1>Welcome to Heaven</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                src='images/img-3.jpg'
                text='CHENNAI BEACH "Ungalukku prechana naan varuven. Engalukku prechana nee varuva. Namalukku prechana yaar varuva. TamilNadey kelambum da"'
                label='Mystery'
                path='/Beach'
                />
                <CardItem
                src='images/img-4.jpg'
                text='Sembrabakkam DAM'
                label='Adventure'
                path='/Dam'
                />
            </ul>
            <ul className='cards__items'>
                <CardItem
                src='images/img-3.jpg'
                text='Area Roundings'
                label='Mystery'
                path='/Area'
                />
                <CardItem
                src='images/img-4.jpg'
                text='Fun Stunts'
                label='Adventure'
                path='/Stunts'
                />
            </ul>
            </div>
        </div>
        </div>
    );
}

export default BikeCards
