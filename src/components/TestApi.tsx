import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {ApiTest} from "../helpers/ApiTest";

const TestApi = () => {
    const [apiResponse, setApiResponse] = useState('');
    const [donnees, setDonnees] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://10.0.0.156:3000/api');
                setApiResponse(JSON.stringify(response.data))

            } catch (error) {

                setApiResponse("DISCONNECT")
                console.error('Erreur lors de la récupération des données de l\'API', error);
            }
        };

        fetchData();
    }, []); // Le tableau vide signifie que cet effet ne s'exécute qu'une fois après le montage initial du composant

    return (
        <div>
            <p>Réponse de l'API : {apiResponse}</p>
        </div>
    );
};

export default TestApi;
