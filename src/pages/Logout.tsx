import { useEffect } from 'react';
import { useTokenStore } from '../helpers/GlobalDataStore';

const Logout = () => {
    const { logout } = useTokenStore();

    useEffect(() => {
        const handleLogout = async () => {
            logout();
            window.location.href = '/'; // Redirige vers la page d'accueil après la déconnexion
        };

        handleLogout();
    }, [logout]);

    return null;
};

export default Logout;
