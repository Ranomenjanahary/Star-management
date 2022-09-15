import React, { useState } from 'react';
import './Nav.css';
import { useNavigate } from 'react-router-dom';
import {useDataProvider} from "../../config/ApiContext";


function Nav(props) {
    const {titre} = props
    const {isAdmin} = useDataProvider();
    const navigate = useNavigate();
    const navigationPublic = ["drink"];
    const navigationPublicElement = ["/drink"];
    const [drop, setDrop] = useState(false)
    console.log(isAdmin)

    return (
        <>
            <div className='ListeContainer__titre'>
                <span className='ListeContainer__titre__barName'>
                     Star.mg
                </span>
                <div className='ListeContainer__titre__context'>
                    <div className='context'>
                        <div>
                            {titre}
                        </div>
                        <div className='bascule'>
                                {navigationPublic.map((element, index) =>(
                                    <div className='menu' onClick={()=>{navigate(navigationPublicElement[index])}}>
                                        {element}
                                    </div>
                                ))}
                                {isAdmin ?
                                    <>
                                        <div className='dropdown' onMouseLeave={()=>{setDrop(false)}}>
                                            <div className='dropContainer menu' 
                                                    >
                                                <span className='ajouter' 
                                                      onMouseOver={()=>{setDrop(true)}}>
                                                    ajout
                                                </span>
                                                <div className={drop?'dropMenuActive':'dropMenu'} >
                                                    <div className='element'
                                                         onClick={()=>{navigate('/newdrink')}}>boisson</div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className='navButton' onClick={()=>{navigate("/login")}}>
                                            log out
                                        </button>
                                    </>:
                                    <button className='navButton' onClick={()=>{navigate("/login")}}>
                                        Je suis admin
                                    </button>
                                }
                        </div>
                    </div>
                </div>
            </div>
            <div className='ListeContainer__titre'>
            </div>
        </>
    )
}

export default Nav
