import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import useSound from "use-sound";

function Jscience() {
    useEffect(() => {
        document.title = "Mon papa c'est le meilleur - Table de Tri"
    }, [])
    const [playSound] = useSound('../autre/jscience.mp3', {volume: 1});

    return (
        <div className="center">
            <p></p>

            <img src={require('../images/jscience.png')}/>
            <br/>
            <Link to="/" className="waves-effect waves-teal btn-flat">
                Retourner à l'accueil
            </Link>
        </div>)

}

export default Jscience;