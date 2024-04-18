import * as React from 'react';
import {Card, CardContent, CardHeader, colors, Stack} from "@mui/material";
import {LineChart} from "@mui/x-charts";
import {useMoisDataStore, useSemaineDataStore} from "../helpers/GlobalDataStore";
interface DataMois {
    jour_du_mois: number;
    total_dujour_dumois: number;
}

export default function Line_Chart_General() {
    const { moisData } = useMoisDataStore();

    // Données de votre store
    const rawData = moisData;

    const daysOfWeek = [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

    // Traitement des données pour inclure les jours manquants avec une valeur de 0
    const processedData: { jour: number; total_journalier: number }[] = daysOfWeek.map(day => {
        const found = Array.isArray(rawData) ? rawData.find(item => item.jour === day) : null;
        return {
            jour: day,
            total_journalier: found ? found.totalDuJourDuMois : 0,
        };
    });

    return (
        <Stack>
            <Card sx={{ width: '100%'}}>
                <CardContent>
                    <h2>Évolution des déchets jetés</h2>
                    <LineChart
                        xAxis={[{ scaleType: 'band', data: processedData.map(item => item.jour) }]}
                        series={[
                            { data: processedData.map(item => item.total_journalier) },
                        ]}
                        width={600}
                        height={200}
                    />
                </CardContent>
            </Card>
        </Stack>
    );
}
