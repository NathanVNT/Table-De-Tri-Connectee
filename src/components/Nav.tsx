import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'; // Importer Link depuis React Router
import { useUserStore } from '../helpers/GlobalDataStore'; // Import du Datastore de l'utilisateur

const pages = [''];
const links = ['/logout']; // Utilisez un tableau unique pour stocker les liens

const connected = ['Logout'];
const notconnect = ['Login'];

interface Props {
    auth: boolean;
}

const Nav: React.FC<Props> = ({ auth }) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const { userData } = useUserStore(); // Utilisation des données de l'utilisateur depuis le Datastore

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <DeleteIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link} // Utilisez Link au lieu de 'a'
                        to="/" // Définir l'URL de destination
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        TRI
                    </Typography>

                    <DeleteIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        TRI
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                component={Link} // Utilisez Link au lieu de 'a'
                                to={links[index]} // Définir l'URL de destination
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={userData?.username.toUpperCase()|| ""} src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {/* Afficher soit le lien de connexion, soit le lien de déconnexion en fonction de l'état de l'authentification */}
                            {userData ? (
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">
                                        <Link to="/logout" style={{ textDecoration: 'none' }}>
                                            {connected}
                                        </Link>
                                    </Typography>
                                </MenuItem>
                            ) : (
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">
                                        <Link to="/login" style={{ textDecoration: 'none' }}>
                                            {notconnect}
                                        </Link>
                                    </Typography>
                                </MenuItem>
                            )}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Nav;
