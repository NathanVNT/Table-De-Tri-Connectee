import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import {Card, CardContent, CardHeader, colors, Stack} from "@mui/material";
import {useTotalBrut, useTotalUtilisateurBrut} from "../helpers/GlobalDataStore";
export default function Stats_Brut(){
    const { totalBrutData, setTotalBrut} = useTotalUtilisateurBrut();
    return (
        <Stack>
            <Card sx={{ width: 600,height: 350, margin: 2 }}>
                <CardContent sx={{textAlign: "left"}}>
                    <h2 style={{textAlign: "center"}}>Poids de déchets jetés</h2>
                    <br/>
                    <h3>Jours: 5 kg</h3>
                    <h3>Mois: 35 kg</h3>
                    <h3>Année: 400 kg</h3>
                    <h3>Depuis l'installation: 4 000 kg</h3>
                </CardContent>
            </Card>
        </Stack>
    );
}
