import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import ConversationGallery from './ConversationGallery';
import ConversationSection from './ConversationSection';

function Conversation() {
    return (
        <>  
            <ConversationSection />
            <ConversationGallery />
            <Footer />
        </>
    )
}

export default Conversation
