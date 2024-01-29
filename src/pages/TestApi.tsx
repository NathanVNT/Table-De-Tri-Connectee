import {useEffect, useState } from "react";

// Définissez un modèle pour représenter la structure des données utilisateur
interface UserDataModel {
    id: number;
    login: string;
    password: string;
    firstname: string;
    lastname: string;
}

// ...

export const TestApi = () => {
    const [userData, setUserData] = useState<UserDataModel | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://10.0.0.156:3000/api');
                const jsonData = await response.json();
                setUserData(jsonData.data[0]);
            } catch (error) {
                console.error('Erreur lors de la récupération des données : ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {userData ? (
                <div>
                    <p>ID: {userData.id}</p>
                    <p>Login: {userData.login}</p>
                    <p>Prénom: {userData.firstname}</p>
                    <p>Nom: {userData.lastname}</p>
                </div>
            ) : (
                <p>Chargement...</p>
            )}
        </div>
    );
};
