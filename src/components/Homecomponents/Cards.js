import React from 'react';
import './Cards.css';
import CardItem from '../Carditem';

function Cards() {
return (
    <div className='cards'>
    <h1>Welcome to Heaven</h1>
    <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
            src='images/bday.jpg'
            text='BirthDay Party'
            label='Mystery'
            path='/Bday'
            />
            <CardItem
            src='images/img-9.jpg'
            text='Trips'
            label='Adventure'
            path='/Trips'
            />
            <CardItem
            src='images/group-1.jpg'
            text='Memories'
            label='Adrenaline'
            path='/Gettogether'
            />
        </ul>
        <ul className='cards__items'>
            <CardItem
            src='images/bike.jpg'
            text='Bike Trips'
            label='Adventure'
            path='/Bike'
            />
            <CardItem
            src='images/outing.jpg'
            text=' Outings'
            label='Luxury'
            path='/Outings'
            />
        </ul>
        <ul className='cards__items'>
            <CardItem
            src='images/school.jpg'
            text=' School Days “I ve always loved the first day of school better than the last day of school '            label='Luxury'
            path='/School'
            />
        </ul>
        </div>
    </div>
    </div>
);
}

export default Cards;
