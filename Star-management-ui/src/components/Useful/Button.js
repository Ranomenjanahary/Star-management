import React from 'react';
import './Button.css';

function Button(props) {
const {buttonLabel, OnClick} = props;

    return (
        <div className='LoginContainer__Forms__input'>
            <div className='label'></div>
            <div  className="LoginContainer__Forms__element">
            <button className='form LoginContainer__Forms__input__button' onClick={()=>OnClick()}>
                    {buttonLabel}
            </button>
            </div>
            <div className='noBackground'></div>
        </div>
    )
}

export default Button
