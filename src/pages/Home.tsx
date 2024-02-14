import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import Pie_Chart from "../components/Pie_Chart";
import Bar_Chart from "../components/Bar_Chart";
import Line_Chart from "../components/Line_Chart";
import Stats_Brut from "../components/Stats_Brut";
import { MuiLayout } from "../components/MuiLayout";
import {useDechetsStore, useMoisDataStore, useSemaineDataStore, useTotalBrut} from "../helpers/GlobalDataStore";

interface SemaineActuelleItem {
    jour: string;
    total_journalier: number;
}

interface MoisActuelItem {
    jour_du_mois:number,
    total_dujour_dumois:number
}

export const Home = () => {
    const { dechetsData, setDechetsData } = useDechetsStore();
    const { totalBrutData, setTotalBrut } = useTotalBrut();
    const {semaineData, setDataSemaine } = useSemaineDataStore();
    const {moisData, setMoisData } = useMoisDataStore();

    console.log(localStorage.getItem("token"))
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://10.0.0.156:3000/api');
                if (response.ok) {
                    const jsonData = await response.json();

                    if (jsonData.resultat && jsonData.resultat.length > 0) {
                        const pieChartData = jsonData.resultat[0];
                        const dayBrutData = jsonData.general[0];
                        const monthBrutData = jsonData.mois[0];
                        const yearBrutData = jsonData.annee[0];
                        const totalBrutData = jsonData.depuis_creation[0]
                        const semaineActuelleData: SemaineActuelleItem[] = jsonData.semaine_actuelle;
                        const moisActuelJour: MoisActuelItem[] = jsonData.jours_dans_le_mois
                        // Convertir les valeurs de total_journalier en nombres
                        const semaineData = semaineActuelleData.map((item) => ({
                            jour: item.jour,
                            total_journalier: Number(item.total_journalier),
                        }));

                        // Mettre à jour le state avec les données de la semaine actuelle
                        setDataSemaine(semaineData);
                        const monthData = moisActuelJour.map((item) => ({
                            jour_du_mois: item.jour_du_mois,
                            total_dujour_dumois: Number(item.total_dujour_dumois),
                        }));
                        setMoisData(monthData)

                        setTotalBrut(({
                            totalJour: dayBrutData.total_jour,
                            totalMois: monthBrutData.total_mois,
                            totalAnnee: yearBrutData.total_annee,
                            total: totalBrutData.total_creation,
                        }));
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
                <Pie_Chart />
                <Bar_Chart />
                <Line_Chart />
                <Stats_Brut />
            </Stack>
        </>
    );
};
