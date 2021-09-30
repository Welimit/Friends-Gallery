import React from 'react';
import '../Homecomponents/Cards.css';
import CardItem from '../Carditem';

function OutingCards() {
    return (
        <div className='cards'>
        <h1>Welcome to Heaven</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                src='images/img-3.jpg'
                text='Mall'
                label='Mystery'
                path='/Mall'
                />
                <CardItem
                src='images/img-4.jpg'
                text='Cinema'
                label='Adventure'
                path='/Cinema'
                />
                <CardItem
                src='images/img-4.jpg'
                text='Truff'
                label='Adventure'
                path='/Truff'
                />
            </ul>
            <ul className='cards__items'>
                <CardItem
                src='images/img-3.jpg'
                text='Hotel'
                label='Mystery'
                path='/Hotel'
                />
                <CardItem
                src='images/img-4.jpg'
                text='Shopping'
                label='Adventure'
                path='/Shopping'
                />
                <CardItem
                src='images/img-4.jpg'
                text='Amusment Park "There is an unspoken bond you create with the friends you travel with."'
                label='Adventure'
                path='/Theme'
                />
            </ul>
            </div>
        </div>
        </div>
    )
}

export default OutingCards
