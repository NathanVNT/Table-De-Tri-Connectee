import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import audio from "../autre/Screamer.wav";

function Jscience() {
    useEffect(() => {
        document.title = "Mon papa c'est le meilleur - Table de Tri"
        var son = new Audio(audio)
        son.loop = true
        son.play()
    }, [])

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