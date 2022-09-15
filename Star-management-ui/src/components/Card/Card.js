import React from 'react';
import './Card.css';

const Card = ({children}) => {
    return (
        <div className='LoginContainer__Forms__Container'>
            {children}
        </div>
    );
};

export default Card;