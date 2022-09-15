import React, {useEffect, useState} from 'react';
import './Notification.css';

const Notification = (props) => {
    const {message, typeNotif, handleNotif} = props
    const [icon, setIcon] = useState('load bi-arrow-clockwise')

    useEffect(()=>{
        if(typeNotif==='success'){
            setIcon('bi-check-circle')
        }else if(typeNotif==='erreur'){
            setIcon('bi-x-octagon')
        }else {
            setIcon('load bi-arrow-clockwise')
        }
    }, [typeNotif])

    return (
        <div className="container">
            <div className={`notification ${typeNotif}`}>
                <span >
                    <i className={icon}/>
                    {message}
                </span>
                <i className="bi-x-lg closeNotif" onClick={()=>{console.log('ok'); handleNotif(false)}}/>
            </div>
        </div>
    );
};

export default Notification;