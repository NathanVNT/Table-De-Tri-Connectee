import * as React from 'react';
import {Card, CardContent, CardHeader, colors, Stack} from "@mui/material";
import {BarChart} from "@mui/x-charts";

export default function Line_Chart() {
    return (
        <Stack>
            <Card sx={{ MaxWidth: 500,MaxHeight: 350, margin: 2}}>
                <CardContent>
                    <h2>Déchets jetés cette semaine</h2>
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'] }]}
                        series={[{ data: [4, 6, 2, 5, 9]}]}
                        width={500}
                        height={200}
                    />
                </CardContent>
            </Card>
        </Stack>
    );
}
