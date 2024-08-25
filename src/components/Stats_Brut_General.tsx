import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import {Card, CardContent, CardHeader, colors, Stack} from "@mui/material";
import {useTotalBrut} from "../helpers/GlobalDataStore";
export default function Stats_Brut_General(){
    const { totalBrutData, setTotalBrut} = useTotalBrut();
    return (
        <Stack>
            <Card sx={{ width: 600,height: 350, margin: 2 }}>
                <CardContent sx={{textAlign: "left"}}>
                    <h2 style={{textAlign: "center"}}>Poids de déchets jetés</h2>
                    <br/>
                    <h3>Jours: 300 kg</h3>
                    <h3>Mois: 2 500 kg</h3>
                    <h3>Année: 14 000 kg</h3>
                    <h3>Depuis l'installation: 250 000 kg</h3>
                </CardContent>
            </Card>
        </Stack>
    );
}
