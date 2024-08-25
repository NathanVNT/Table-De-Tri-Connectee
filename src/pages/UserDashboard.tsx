// Dans UserDashboard.tsx

import React, { useEffect } from 'react';
import { Stack } from '@mui/material';
import config from '../helpers/ConfAPI';
import UserDashboardCard from '../components/UserDashboardCard';
import {
    useDechetsUtilisateurStore,
    useMoisDataUtilisateurStore,
    useSemaineDataUtilisateurStore,
    useTokenStore,
    useTotalUtilisateurBrut,
    useUserStore
} from '../helpers/GlobalDataStore';
import Pie_Chart from '../components/Pie_Chart';
import Line_Chart from '../components/Line_Chart';
import Bar_Chart from '../components/Bar_Chart';
import Stats_Brut from '../components/Stats_Brut';

interface Semaine_Utilisateur {
    jour: string;
    totalJournalier: number;
}
export interface User {
    username: string;
}
interface Mois_Utilisateur {
    jour: number;
    totalDuJourDuMois: number;
}

export const UserDashboard = () => {
    let user:User;
    const { setUserData, userData } = useUserStore();
    const { setDechetsData } = useDechetsUtilisateurStore();
    const { setTotalBrut } = useTotalUtilisateurBrut();
    const { setDataSemaine } = useSemaineDataUtilisateurStore();
    const { setMoisData } = useMoisDataUtilisateurStore();
    const tokenData = useTokenStore(state => state.tokenData);

    useEffect(() => {
        document.title = `Tableau de bord DEMO`;
        const token = tokenData.token;
        if (token && token !== null) {
            sendTokenToAPI(token);
        }
    }, [tokenData.token, userData?.username]);

    async function sendTokenToAPI(token: string) {
        try {
            const apiUrl = `${config.api.ip}:${config.api.port}/`;
            const data = { token };

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la requête');
            }

            const responseData = await response.json();
            console.log(responseData.user);
            user =  { username: responseData.user };
            console.log(user);
            setUserData(user);
            const dechetsData = {
                emballage: parseFloat(responseData.resultat.emballage),
                pain: parseFloat(responseData.resultat.pain),
                alimentaire: parseFloat(responseData.resultat.alimentaire),
            };
            setDechetsData(dechetsData);

            const totalBrutData = {
                totalJour: parseFloat(responseData.general.total_jour),
                totalMois: parseFloat(responseData.mois.total_mois),
                totalAnnee: parseFloat(responseData.annee[0].total_annee),
                total: parseFloat(responseData.depuis_creation.total_creation),
            };
            setTotalBrut(totalBrutData);

            const semaineActuelleData: Semaine_Utilisateur[] = [{
                jour: responseData.semaine_actuelle.jour,
                totalJournalier: parseFloat(responseData.semaine_actuelle.total_journalier),
            }];
            setDataSemaine(semaineActuelleData);

            const moisActuelData: Mois_Utilisateur[] = [{
                jour: responseData.jours_dans_le_mois.jour_du_mois,
                totalDuJourDuMois: parseFloat(responseData.jours_dans_le_mois.total_dujour_dumois),
            }];
            setMoisData(moisActuelData);

            console.log('Données mises à jour :', responseData);
        } catch (error) {
            console.error('Erreur :', error);
        }
    }


    return (
        <>
            <UserDashboardCard/>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} width={'fit-content'} useFlexGap flexWrap={'wrap'}>
                <Pie_Chart />
                <Bar_Chart />
                <Line_Chart />
                <Stats_Brut />
            </Stack>
        </>
    );
};
