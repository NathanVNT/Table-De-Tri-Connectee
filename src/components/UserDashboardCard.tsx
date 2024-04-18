import { Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import { useUserStore } from "../helpers/GlobalDataStore";
const card_img = require("../images/logo.png")

export default function UserDashboardCard() {
    const { userData } = useUserStore(); // Récupérer les données utilisateur depuis le store

    return (
        <Stack
            padding={5}
            spacing={4}
            direction="row"
            useFlexGap
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
        >
            <Card sx={{ width: "90%" }}>
                <img src={card_img} alt="LOGO" width={100} /> {/* Utiliser une largeur fixe pour l'image */}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Bienvenue {userData?.username}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Ci-dessous, vous pourrez trouver toutes vos données concernant la table de tri.
                    </Typography>
                </CardContent>
            </Card>
        </Stack>
    );
}
