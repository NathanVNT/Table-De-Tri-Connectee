import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import Pie_Chart_General from "../components/Pie_Chart_General";
import Bar_Chart_General from "../components/Bar_Chart_General";
import Line_Chart_General from "../components/Line_Chart_General";
import Stats_Brut_General from "../components/Stats_Brut_General";
import { MuiLayout } from "../components/MuiLayout";
import { useDechetsStore, useMoisDataStore, useSemaineDataStore, useTotalBrut } from "../helpers/GlobalDataStore";
import config from "../helpers/ConfAPI";
import {createOrJoinSocket} from "react-use-websocket/dist/lib/create-or-join";

interface SemaineActuelleItem {
    jour: string;
    total_journalier: number;
}

interface MoisActuelItem {
    jour_du_mois: number;
    total_dujour_dumois: number;
}

export const Home = () => {
    const { setDechetsData } = useDechetsStore();
    const { setTotalBrut } = useTotalBrut();
    const { setDataSemaine, semaineData } = useSemaineDataStore();
    const { setMoisData } = useMoisDataStore();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${config.api.ip}:${config.api.port}/api`);
                if (response.ok) {
                    const jsonData = await response.json();

                    if (jsonData.resultat && jsonData.resultat.length > 0) {
                        const pieChartData = jsonData.resultat[0];
                        const dayBrutData = jsonData.general[0];
                        const monthBrutData = jsonData.mois[0];
                        const yearBrutData = jsonData.annee[0];
                        const totalBrutData = jsonData.depuis_creation[0];
                        const semaineActuelleData: SemaineActuelleItem[] = jsonData.semaine_actuelle;
                        const moisActuelJour: MoisActuelItem[] = jsonData.jours_dans_le_mois;

                        // Convertir les valeurs de total_journalier en nombres
                        const semaineData = semaineActuelleData.map((item) => ({
                            jour: item.jour,
                            totalJournalier: Number(item.total_journalier),
                        }));

                        // Mettre à jour le state avec les données de la semaine actuelle
                        setDataSemaine(semaineData);
                        // Convertir les valeurs de total_dujour_dumois en nombres
                        const monthData = moisActuelJour.map((item) => ({
                            jour: item.jour_du_mois,
                            totalDuJourDuMois: Number(item.total_dujour_dumois),
                        }));
                        setMoisData(monthData);

                        // Mettre à jour les données brutes
                        setTotalBrut({
                            totalJour: dayBrutData.total_jour,
                            totalMois: monthBrutData.total_mois,
                            totalAnnee: yearBrutData.total_annee,
                            total: totalBrutData.total_creation,
                        });

                        // Mettre à jour les données des déchets
                        setDechetsData({
                            pain: pieChartData.pain,
                            alimentaire: pieChartData.alimentaire,
                            emballage: pieChartData.emballage,
                        });
                    } else {
                        console.error('Le tableau "resultat" est vide ou indéfini.');
                    }
                } else {
                    console.error('Erreur lors de la récupération des données : ', response.status);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données : ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <MuiLayout />

            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                width={"fit-content"}
                useFlexGap
                flexWrap={"wrap"}
            >
                <Pie_Chart_General />
                <Bar_Chart_General />
                <Line_Chart_General />
                <Stats_Brut_General />
            </Stack>
        </>
    );
};
