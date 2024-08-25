import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Card, Container, Stack, TextField, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTokenStore } from "../helpers/GlobalDataStore";

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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const login = formData.get('login') as string;
        const password = formData.get('password') as string;

        // Vérification des identifiants "demo"
        if (login === 'demo' && password === 'demo') {
            const demoToken = 'demo_token'; // Un jeton fictif pour la démo
            setLoginState({ success: true, token: demoToken, message: 'Connexion réussie' });
            setTokenData({ expire: 0, token: demoToken });
            navigate('/user');
        } else {
            setApiState('error');
            setLoginState({ success: false, message: 'Identifiants incorrects' });
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            {/* Message d'information */}
            <Alert severity="info" sx={{ mt: 2 }}>
                Utilisez le nom d'utilisateur <strong>demo</strong> et le mot de passe <strong>demo</strong> pour vous connecter.
            </Alert>

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
        </Container>
    );
}
