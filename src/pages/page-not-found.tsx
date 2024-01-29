import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function PageNotFound(){
    useEffect(() => {
        document.title = "404 - Table de Tri"
    }, [])
return (
    <div className="center">
        <p></p>
        <img src={require('../images/erreur404.png')} alt="Pas non trouvée"/>
        <h1>Hey, cette page n'existe pas !</h1>
        <Link to="/" className="waves-effect waves-teal btn-flat">
            Retourner à l'accueil
        </Link>
    </div>
)

}

export default PageNotFound;