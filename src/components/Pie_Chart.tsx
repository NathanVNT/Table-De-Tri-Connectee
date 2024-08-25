import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Card, CardContent, Stack } from "@mui/material";

export default function Pie_Chart() {
    // Données statiques avec des valeurs plus petites
    const dechetsData = {
        pain: 2,        // Par exemple, 2 unités de pain jetées
        alimentaire: 3, // Par exemple, 3 unités de déchets alimentaires
        emballage: 1,   // Par exemple, 1 unité de déchets d'emballage
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
