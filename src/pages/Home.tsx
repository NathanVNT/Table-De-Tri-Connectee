import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import { useDechetsStore, useMoisDataStore, useSemaineDataStore, useTotalBrut } from "../helpers/GlobalDataStore";
import config from "../helpers/ConfAPI";
import { MuiLayout } from "../components/MuiLayout";
import Pie_Chart_General from "../components/Pie_Chart_General";
import Bar_Chart_General from "../components/Bar_Chart_General";
import Line_Chart_General from "../components/Line_Chart_General";
import Stats_Brut_General from "../components/Stats_Brut_General";

export const Home = () => {
    const { setDechetsData } = useDechetsStore();
    const { setTotalBrut } = useTotalBrut();
    const { setDataSemaine } = useSemaineDataStore();
    const { setMoisData } = useMoisDataStore();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${config.api.ip}:${config.api.port}/api`);
                if (response.ok) {
                    const jsonData = await response.json();

                    if (jsonData.resultat) {
                        const { resultat, general, mois, annee, depuis_creation, semaine_actuelle, jours_dans_le_mois } = jsonData;

                        // Mettre à jour les données dans les stores avec les valeurs correctement formatées
                        setDechetsData(resultat);
                        setTotalBrut({
                            totalJour: parseFloat(general.total_jour),
                            totalMois: parseFloat(mois.total_mois),
                            totalAnnee: parseFloat(annee.total_annee),
                            total: parseFloat(depuis_creation.total_creation)
                        });

                        // Conversion des données de la semaine actuelle
                        setDataSemaine([{
                            jour: semaine_actuelle.jour,
                            totalJournalier: parseFloat(semaine_actuelle.total_journalier)
                        }]);

                        // Conversion des données du mois
                        setMoisData([{
                            jour: jours_dans_le_mois.jour_du_mois,
                            totalDuJourDuMois: parseFloat(jours_dans_le_mois.total_dujour_dumois)
                        }]);
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
