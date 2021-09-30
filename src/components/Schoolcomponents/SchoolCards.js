import React from 'react';
import '../Homecomponents/Cards.css';
import CardItem from '../Carditem';

function SchoolCards() {
    return (
        <div className='cards'>
        <h1>Welcome to Heaven</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                src='images/img-3.jpg'
                text='Selfies'
                label='Mystery'
                path='/Selfies'
                />
                <CardItem
                src='images/img-4.jpg'
                text='Culturals'
                label='Adventure'
                path='/Culturals'
                />
                <CardItem
                src='images/img-4.jpg'
                text='Theme Parks'
                label='Adventure'
                path='/Park'
                />
            </ul>
            <ul className='cards__items'>
                <CardItem
                src='images/img-3.jpg'
                text='Functions'
                label='Mystery'
                path='/Functions'
                />
                <CardItem
                src='images/img-4.jpg'
                text='School Sports'
                label='Adventure'
                path='/Schsp'
                />
                <CardItem
                src='images/img-4.jpg'
                text='Memories Clips "Everyone in the class felt so proud when the teacher frustratingly said, "You are the worst batch of students I have ever seen"'
                label='Adventure'
                path='/Schmem'
                />
            </ul>
            </div>
        </div>
        </div>
    )
}

export default SchoolCards
