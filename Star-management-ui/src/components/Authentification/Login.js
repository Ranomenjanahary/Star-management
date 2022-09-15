import React, { useState, useEffect } from 'react';
import './Login.css';
import Card from '../Card/Card';
import {Link, useNavigate} from 'react-router-dom';
import Input from '../Useful/Input';
import Button from '../Useful/Button';
import Notification from "../notification/Notification";

const Login = () => {
    const [password, setPassword] = useState("");
    const [identifier, setIndentifier] = useState("");
    const [notif, setNotif] = useState(false)

    const navigate = useNavigate();


    return (
        <div className="LoginContainer">
            {notif && <Notification message=' loading please wait' typeNotif='loading' handleNotif={setNotif}/>}
            <span className="LoginContainer__TitleBar">
                Star Madagascar
            </span>
            <Card>
                <div className='LoginContainer__description'>
                    Connectez-vous pour gérer les boissons
                </div>
                <div className="LoginContainer__Forms">
                    <Input type="text" inputLabel="Identifiant :" collectInfo={setIndentifier}/>
                    <Input type="password" inputLabel="Mot de passe :" collectInfo={setPassword}/>
                    <Button buttonLabel="CONNEXION" OnClick={()=>setNotif(true)}/>
                </div>
            </Card>
        </div>
        
    );
};

export default Login;