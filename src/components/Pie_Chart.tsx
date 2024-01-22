import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import {Card, CardContent, CardHeader, colors, Stack} from "@mui/material";
export default function Pie_Chart() {
    return (
        <Stack>
        <Card sx={{ width: 500,height: 350, margin: 2 }}>
            <CardContent>
                <h2>Type de déchets jetés</h2>
        <PieChart
            series={[
                {
                    data: [
                        { id: 0, value: 10, label: 'series A' },
                        { id: 1, value: 15, label: 'series B' },
                        { id: 2, value: 20, label: 'series C' },
                    ],
                },
            ]}
            width={400}
            height={200}
        />
            </CardContent>
        </Card>
        </Stack>
    );
}
