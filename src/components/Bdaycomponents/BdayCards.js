import React from 'react';
import '../Homecomponents/Cards.css';
import CardItem from '../Carditem';

function BdayCards() {
    return (
        <div className='cards'>
        <h1>Let's go to Heaven</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                src='images/group-2.jpg'
                text=' School Days “I ve always loved the first day of school better than the last day of school
                        wekrwqe wertewjrt weruwef rtwqeruwqertf oiuwerfn'            
                label='Family'
                path='/'
                />
            </ul>
            <ul className='cards__items'>
                <CardItem
                src='images/aftab.jpg'
                text='Aftab'
                label='Sengal Physcho'
                path='/Aftab'
                />
                <CardItem
                src='images/aj.jpg'
                text='Ajay Kumar'
                label='Kaka'
                path='/Ajay'
                />
                <CardItem
                src='images/kumarn.jpg'
                text='Kumaran'
                label='pampers'
                path='/Kumaran'
                />
            </ul>
            <ul className='cards__items'>
                <CardItem
                src='images/josh.jpg'
                text='Franklin Joshua'
                label='Aya Paal'
                path='/Franklin'
                />
                <CardItem
                src='images/hari.jpg'
                text=' HariHaran'
                label='sori'
                path='/Hari'
                />
                <CardItem
                src='images/yokesh.jpg'
                text=' Yokesh'            
                label='sotta'
                path='/Yokesh'
                />
            </ul>
            <ul className='cards__items'>
                <CardItem
                src='images/bero.jpg'
                text='Prasanth'            
                label='Bero'
                path='/Bero'
                />
                <CardItem
                src='images/oona.jpg'
                text=' JoshuaThomas'
                label='Oona'
                path='/Joshua'
                />
                <CardItem
                src='images/rish.jpg'
                text='Rishvanth'            
                label='Sevala'
                path='/Rishvanth'
                />
            </ul>
            <ul className='cards__items'>
                <CardItem
                src='images/deepak.jpg'
                text='Deepak'            
                label='Romeo'
                path='/Deepak'
                />
                <CardItem
                src='images/small.jpg'
                text='ArunRajan'            
                label='Small'
                path='/Arun'
                />
                <CardItem
                src='images/rithik.jpg'
                text='Rithik'            
                label='kolaru'
                path='/Rithik'
                />
            </ul>
            </div>
        </div>
        </div>
    )
}

export default BdayCards
