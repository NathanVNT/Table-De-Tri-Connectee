// Dans Bar_Chart.tsx
import * as React from 'react';
import { Card, CardContent, Stack } from "@mui/material";
import { BarChart } from "@mui/x-charts";

interface DataSemaine {
    jour: string;
    total_journalier: number;
}

export default function Bar_Chart_General() {
    // Données statiques à la place de semaineData
    const rawData: DataSemaine[] = [
        { jour: 'Monday', total_journalier: 200 },
        { jour: 'Tuesday', total_journalier: 145 },
        { jour: 'Wednesday', total_journalier: 98 },
        { jour: 'Thursday', total_journalier: 250 },
        { jour: 'Friday', total_journalier: 115 },

    ];

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    // Traitement des données pour inclure les jours manquants avec une valeur de 0
    const processedData: DataSemaine[] = daysOfWeek.map(day => {
        const found = Array.isArray(rawData) ? rawData.find(item => item.jour === day) : null;
        return {
            jour: day,
            total_journalier: found ? found.total_journalier : 0,
        };
    });

    return (
        <Stack>
            <Card sx={{ maxWidth: '100%' }}>
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
