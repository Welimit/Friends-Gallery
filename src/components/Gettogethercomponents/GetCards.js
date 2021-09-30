import React from 'react';
import '../Homecomponents/Cards.css';
import CardItem from '../Carditem';

function GetCards() {
    return (
        <div className='cards'>
        <h1>Welcome to Heaven</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                src='images/img-3.jpg'
                text='SPORTS "I always felt that my greatest asset was not my physical ability, it was my mental ability."'
                label='Mystery'
                path='/Sports'
                />
                <CardItem
                src='images/img-4.jpg'
                text='Conversations'
                label='done'
                path='/Conversation'
                />
            </ul>
            <ul className='cards__items'>
                <CardItem
                src='images/img-4.jpg'
                text='Wasted Moments'
                label='Adventure'
                path='/Wasted'
                />
                <CardItem
                src='images/img-3.jpg'
                text='MEMORIES "Whenever I think of the past, it brings back so many memories."'
                label='Mystery'
                path='/Memories'
                />
            </ul>
            </div>
        </div>
        </div>
    );
}

export default GetCards
