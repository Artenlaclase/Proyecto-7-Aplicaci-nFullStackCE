import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../../contexts/users/UserContext';
import { CircularProgress, Box } from '@mui/material';

export default function PrivateRoute({ element: Component, ...props }) {
    const userCtx = useContext(UserContext);
    const { authStatus, verifyingToken } = userCtx;

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verify = async () => {
            await verifyingToken();
            setLoading(false);
        };
        verify();
    }, [authStatus]);

    if (loading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    return authStatus ? <Component {...props} /> : <Navigate to="/" />;
}
