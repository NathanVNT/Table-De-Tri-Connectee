// Dans Bar_Chart.tsx
import * as React from 'react';
import { Card, CardContent, CardHeader, Stack } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import {useSemaineDataUtilisateurStore} from "../helpers/GlobalDataStore";

interface DataSemaine {
    jour: string;
    total_journalier: number;
}

export default function Bar_Chart() {
    const { semaineData } = useSemaineDataUtilisateurStore();

    // Données de votre store
    const rawData = semaineData;

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    // Traitement des données pour inclure les jours manquants avec une valeur de 0
    const processedData: DataSemaine[] = daysOfWeek.map(day => {
        const found = Array.isArray(rawData) ? rawData.find(item => item.jour === day) : null;
        return {
            jour: day,
            total_journalier: found ? found.totalJournalier : 0,
        };
    });

    return (
        <Stack>
            <Card sx={{ maxWidth: '100%'}}>
                <CardContent>
                    <h2>Déchets jetés cette semaine</h2>
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: processedData.map(item => item.jour) }]}
                        series={[{ data: processedData.map(item => item.total_journalier) }]}
                        width={600}
                        height={200}
                    />
                </CardContent>
            </Card>
        </Stack>
    );
}
