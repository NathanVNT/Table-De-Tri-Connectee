import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Card, Container, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import config from "../helpers/ConfAPI";
import { useTokenStore } from "../helpers/GlobalDataStore";
import DeconnexionAuto from "../helpers/DeconnexionAuto";

interface InterfaceLogin {
    success?: boolean;
    token?: string;
    message: string;
}

export default function Login() {
    const navigate = useNavigate();
    const { setTokenData } = useTokenStore();
    const [loginState, setLoginState] = useState<InterfaceLogin | null>(null);
    const [apiState, setApiState] = useState<'idle' | 'loading' | 'error'>('idle');

    useEffect(() => {
        document.title = 'Se connecter - Table de Tri';
        if (loginState && loginState.success && loginState.token) {
            setTokenData({ expire: 0, token: loginState.token });
            navigate('/user');
        }
    }, [loginState, navigate, setTokenData]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const login = formData.get('login') as string;
        const password = formData.get('password') as string;

        const data = { login, password };

        try {
            setApiState('loading');

            const url = `${config.api.ip}:${config.api.port}/login`;

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('La requête a échoué');
            }

            const responseData = await response.json();
            setLoginState(responseData);

            if (responseData.token) {
                setTokenData({ expire: 0, token: responseData.token });
                DeconnexionAuto.deconnexionAuto(563434, responseData.token);
            } else {
                console.error('Le jeton (token) n\'a pas été renvoyé dans la réponse.');
                // Gérer le cas où le token n'est pas renvoyé dans la réponse
            }

            setApiState('idle');
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données:', error);
            // Gérer l'erreur liée à l'échec de la requête
            setApiState('error');
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
                            {apiState === 'loading' && <p>⏳ Chargement...</p>}
                            {apiState === 'error' && <p>⛔️ Une erreur est survenue lors de la connexion.</p>}
                            {loginState?.message && <p>⛔️ {loginState.message}</p>}
                        </Box>
                    </Box>
                </Container>
            </Card>
        </Stack>
    );
}
