// Login.tsx
import React, { useEffect, useState } from 'react';
import {Avatar, Box, Button, Card, Container, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface InterfaceLogin {
    success?: boolean;
    token?: string;
    message: string;
}

export default function Login() {
    const navigate = useNavigate();
    const [loginState, setLoginState] = useState<InterfaceLogin | null>(null);

    useEffect(() => {
        document.title = 'Se connecter - Table de Tri';
        if (loginState && loginState.success) {
            navigate('/user');
            localStorage.setItem("token", loginState.token || "")

        } else if (loginState && !loginState.success) {
            alert('Echec de connexion');
        }
    }, [loginState, navigate]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const login = formData.get('login') as string;
        const password = formData.get('password') as string;

        const data = { login, password };

        try {
            const url = 'http://localhost:3000/login';

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();

            setLoginState(responseData);
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données:', error);
        }
    };

    return (
        <Stack padding={5} spacing={4} direction={'row'} useFlexGap flexWrap={'wrap'} justifyContent="space-evenly" alignItems="flex-start">
            <Card sx={{ maxWidth: 345 }}>
                <Container component="main" maxWidth="xs">
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
                        <Typography component="h1" variant="h5">
                            Se Connecter
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="login"
                                label="Nom d'utilisateur"
                                name="login"
                                autoComplete="login"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Mot de Passe"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />

                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                Connexion
                            </Button>
                            <p>{loginState?.message}</p>
                        </Box>
                    </Box>
                </Container>
            </Card>
        </Stack>
    );
}
