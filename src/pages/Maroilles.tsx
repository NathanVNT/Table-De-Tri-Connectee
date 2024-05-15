import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import audio from "../autre/Screamer.wav";

function Maroilles() {
    useEffect(() => {
        document.title = "JE PUE - Table de Tri"
        var son = new Audio(audio)
        son.loop = true
        son.play()
    }, [])

    return (
        <div className="center">
            <p></p>
            <img src={require('../images/Vieux Boulogne cheese.jpg')}/>
            <br/>
            <Link to="/" className="waves-effect waves-teal btn-flat">
                Retourner à l'accueil
            </Link>

        </div>)

}

export default Maroilles;