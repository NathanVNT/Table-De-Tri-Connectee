import React from 'react';
import { Link } from 'react-router-dom';

const Teapot = () => (
    <div className="center">
        <p></p>
        <h1>Hey, je suis une théière!</h1>
        <img src={require('../images/erreur418.jpg')}/>
        <br/>
        <Link to="/" className="waves-effect waves-teal btn-flat">
            Retourner à l'accueil
        </Link>
    </div>
);

export default Teapot;