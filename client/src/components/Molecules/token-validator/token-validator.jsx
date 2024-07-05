import React, { useEffect } from 'react';
import { getUserProfile } from '../../../api/UserApi';
import useLogin from '../../../hooks/useSignIn';

const TokenValidator = () => {
    const { logOut } = useLogin();

    useEffect(() => {
        const validateToken = async () => {
            const response = await getUserProfile();
            if (response.status != "success") {
                logOut();
            }
        };

        // Call the validateToken function when the component mounts
        validateToken();

    }, []);

};

export default TokenValidator;
