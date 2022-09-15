import React from 'react';
import './Input.css'

function Input(props) {
    const {inputLabel, buttonLabel, OnClick, collectInfo, type} = props;
  
    return (
        <div className='LoginContainer__Forms__input'>
            <div className='id'>{inputLabel}</div>
            <div  className="LoginContainer__Forms__element">
                <input type={type} className="items form" onChange={(e)=>{collectInfo(e.target.value)}}/>
            </div>
            <button className={buttonLabel?'ButtonAdd':'noBackground ButtonAdd'}
                onClick={OnClick}>
                {buttonLabel}
            </button>
        </div>
    )
}

export default Input;