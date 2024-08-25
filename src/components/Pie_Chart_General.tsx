import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Card, CardContent, Stack } from "@mui/material";

export default function Pie_Chart_General() {
    // Données statiques avec des valeurs plus élevées
    const dechetsData = {
        pain: 500,        // Par exemple, 500 unités de pain jetées
        alimentaire: 800, // Par exemple, 800 unités de déchets alimentaires
        emballage: 300,   // Par exemple, 300 unités de déchets d'emballage
    };

    return (
        <Stack>
            <Card sx={{ width: '100%' }}>
                <CardContent>
                    <h2>Type de déchets jetés</h2>
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: dechetsData.pain, label: 'Pain' },
                                    { id: 1, value: dechetsData.alimentaire, label: 'Alimentaire' },
                                    { id: 2, value: dechetsData.emballage, label: 'Emballage' },
                                ],
                            },
                        ]}
                        width={600}
                        height={200}
                    />
                </CardContent>
            </Card>
        </Stack>
    );
}
