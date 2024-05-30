import {Avatar, Box, Button, Card, Container, Stack, TextField, Typography} from "@mui/material";
import React from "react";

export const ChangePassword_Component= () => {
    return(
        <>
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
                                Changement du mot de passe
                            </Typography>
                            <Box component="form"  noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Nouveau mot de passe"
                                    name="password"
                                    type="password"
                                    autoComplete="login"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Répéter le nouveau mot de passe"
                                    type="password"
                                    id="repeatpassword"
                                    autoComplete="current-password"
                                />

                                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                    Enregistrer
                                </Button>
                            </Box>
                        </Box>
                    </Container>
                </Card>
            </Stack>

        </>
    )
}

