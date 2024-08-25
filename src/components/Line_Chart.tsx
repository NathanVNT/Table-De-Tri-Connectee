import * as React from 'react';
import { Card, CardContent, Stack } from "@mui/material";
import { LineChart } from "@mui/x-charts";

interface DataMois {
    jour_du_mois: number;
    total_dujour_dumois: number;
}

export default function Line_Chart() {
    // Données statiques pour un mois complet (31 jours)
    const rawData: DataMois[] = [
        { jour_du_mois: 1, total_dujour_dumois: 5 },
        { jour_du_mois: 2, total_dujour_dumois: 7 },
        { jour_du_mois: 3, total_dujour_dumois: 8 },
        { jour_du_mois: 4, total_dujour_dumois: 4 },
        { jour_du_mois: 5, total_dujour_dumois: 6 },
        { jour_du_mois: 6, total_dujour_dumois: 9 },
        { jour_du_mois: 7, total_dujour_dumois: 2 },
        { jour_du_mois: 8, total_dujour_dumois: 10 },
        { jour_du_mois: 9, total_dujour_dumois: 3 },
        { jour_du_mois: 10, total_dujour_dumois: 4 },
        { jour_du_mois: 11, total_dujour_dumois: 8 },
        { jour_du_mois: 12, total_dujour_dumois: 7 },
        { jour_du_mois: 13, total_dujour_dumois: 6 },
        { jour_du_mois: 14, total_dujour_dumois: 5 },
        { jour_du_mois: 15, total_dujour_dumois: 9 },
        { jour_du_mois: 16, total_dujour_dumois: 4 },
        { jour_du_mois: 17, total_dujour_dumois: 8 },
        { jour_du_mois: 18, total_dujour_dumois: 6 },
        { jour_du_mois: 19, total_dujour_dumois: 7 },
        { jour_du_mois: 20, total_dujour_dumois: 5 },
        { jour_du_mois: 21, total_dujour_dumois: 10 },
        { jour_du_mois: 22, total_dujour_dumois: 4 },
        { jour_du_mois: 23, total_dujour_dumois: 6 },
        { jour_du_mois: 24, total_dujour_dumois: 9 },
        { jour_du_mois: 25, total_dujour_dumois: 8 },
        { jour_du_mois: 26, total_dujour_dumois: 7 },
        { jour_du_mois: 27, total_dujour_dumois: 5 },
        { jour_du_mois: 28, total_dujour_dumois: 6 },
        { jour_du_mois: 29, total_dujour_dumois: 4 },
        { jour_du_mois: 30, total_dujour_dumois: 7 },
        { jour_du_mois: 31, total_dujour_dumois: 5 },
    ];

    const daysOfMonth = Array.from({ length: 31 }, (_, i) => i + 1);

    // Traitement des données pour chaque jour du mois
    const processedData = daysOfMonth.map(day => {
        const found = rawData.find(item => item.jour_du_mois === day);
        return {
            jour: day,
            total_journalier: found ? found.total_dujour_dumois : 0,
        };
    });

    return (
        <Stack>
            <Card sx={{ width: '100%' }}>
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
