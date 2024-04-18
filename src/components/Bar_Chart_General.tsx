// Dans Bar_Chart_General.tsx
import * as React from 'react';
import { Card, CardContent, Stack } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { useSemaineDataStore } from "../helpers/GlobalDataStore";

export default function Bar_Chart_General() {
    const { semaineData } = useSemaineDataStore();

    // Données de votre store
    const rawData = semaineData;

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    // Traitement des données
    const processedData = daysOfWeek.map(day => {
        const found = rawData.find(item => item.jour === day);
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
