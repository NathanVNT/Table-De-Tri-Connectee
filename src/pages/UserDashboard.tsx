import { Card, CardContent, Stack, Typography } from "@mui/material";
import Pie_Chart from "../components/Pie_Chart";
import Bar_Chart from "../components/Bar_Chart";
import Line_Chart from "../components/Line_Chart";
import Stats_Brut from "../components/Stats_Brut";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserDashboard = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    let user = "";

    if (token == null || token === "") {
        user = "Vide";
    } else {
        user = "Victor";
        // Envoyer le token à votre API
        sendTokenToAPI(token);
    }

    useEffect(() => {
        document.title = `Dashboard ${user} - Table de Tri`;
    }, []);

    console.log(localStorage.getItem("token"));

    function sendTokenToAPI(token:string) {
        // URL de votre API
        const apiUrl = "http://localhost:3000/";

        // Données à envoyer à l'API
        const data = {
            token: token,
        };

        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((responseData) => {
                // Traitement de la réponse de l'API si nécessaire
                console.log("Réponse de l'API :", responseData);
            })
            .catch((error) => {
                console.error("Erreur lors de l'envoi du token à l'API :", error);
            });
    }
    return (
        <>
            <Stack
                padding={5}
                spacing={4}
                direction={"row"}
                useFlexGap
                flexWrap={"wrap"}
                justifyContent="center"
                alignItems="center"
            >
                <Card sx={{ width: "90%" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Bienvenue {user}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Ci-dessous, vous pourrez trouver toutes vos données concernant la
                            table de tri.
                        </Typography>
                    </CardContent>
                </Card>
            </Stack>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                width={"fit-content"}
                useFlexGap
                flexWrap={"wrap"}
            >
                <Pie_Chart />
                <Bar_Chart />
                <Line_Chart />
                <Stats_Brut />
            </Stack>
        </>
    );
};
