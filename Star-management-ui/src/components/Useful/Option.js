import React from 'react';

function Option(props) {
    const {optionLabel, buttonLabel, OnClick, collectInfo, index, choiceAvaible, select} = props;


    return (
        <div className='LoginContainer__Forms__input'>
            <div className='id'>{optionLabel}</div>
            <div  className="LoginContainer__Forms__element">
                <select id='composant' className="items form option" 
                    onChange={(e)=>{collectInfo(e.target.value,index)}}>
                    {choiceAvaible.map((element, idx)=>(
                        <option key={idx} selected={(select === element && 'selected')}>{element}</option>
                    ))}
                </select>
            </div>
            {buttonLabel && 
                <button className={buttonLabel?'ButtonAdd':'noBackground ButtonAdd'}
                    onClick={()=>{OnClick(index)}}>
                    {buttonLabel}
                </button>
            }
    </div>
    )
}

export default Option
