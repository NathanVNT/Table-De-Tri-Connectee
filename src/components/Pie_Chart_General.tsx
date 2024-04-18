import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import {Card, CardContent, CardHeader, colors, Stack} from "@mui/material";
import {useState} from "react";
import {useDechetsStore} from "../helpers/GlobalDataStore";

export default function Pie_Chart_General() {
    const { dechetsData, setDechetsData } = useDechetsStore();

    return (
        <Stack>
        <Card sx={{ width: '100%' }}>
            <CardContent>
                <h2>Type de déchets jetés</h2>
        <PieChart
            series={[
                {
                    data: [
                        { id: 0, value: dechetsData?.pain ||0, label: 'Pain' },
                        { id: 1, value: dechetsData?.alimentaire||0, label: 'Alimentaire' },
                        { id: 2, value: dechetsData?.emballage||0, label: 'Emballage' },
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
