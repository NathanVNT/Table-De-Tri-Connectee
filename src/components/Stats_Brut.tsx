import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import {Card, CardContent, CardHeader, colors, Stack} from "@mui/material";
export default function Stats_Brut(){
    return (
        <Stack>
            <Card sx={{ width: 500,height: 350, margin: 2 }}>
                <CardContent sx={{textAlign: "left"}}>
                    <h2 style={{textAlign: "center"}}>Poids de déchets jetés</h2>
                    <br/>
                    <h3>Jours: 435343422</h3>
                    <h3>Mois: 423</h3>
                    <h3>Année: 213222</h3>
                    <h3>Depuis l'installation: 45454324232</h3>
                </CardContent>
            </Card>
        </Stack>
    );
}
