import React, { useState, useEffect } from 'react';
import useLogin from '../../../hooks/useSignIn';
import { useAuthContext } from '../../../hooks/useAuthContext';

const LogoutTimer = () => {
    const [logoutTime, setLogoutTime] = useState(60);
    const { user } = useAuthContext();
    const { logOut } = useLogin()
    useEffect(() => {
        // Function to handle user activity
        const handleUserActivity = () => {
            // Reset the timer whenever there's user activity
            clearTimeout(logoutTime);

            // Set a new timer for logout after 1 minute (60000 milliseconds)
            const timeoutId = setTimeout(() => {
                // Perform logout action here (e.g., clear user session)
                if (user) {
                    alert('Logging out due to inactivity...');
                }
                // Implement your logout logic (e.g., redirect, clear session, etc.)
                // Example: 
                // logoutUser(); // Function to logout user
                // logOut();
            }, 240000);

            // Update the logoutTime state with the new timer ID
            setLogoutTime(timeoutId);
        };

        // Attach event listeners to detect user activity
        window.addEventListener('mousemove', handleUserActivity);
        window.addEventListener('keydown', handleUserActivity);

        // Clean up event listeners on component unmount
        return () => {
            window.removeEventListener('mousemove', handleUserActivity);
            window.removeEventListener('keydown', handleUserActivity);
            clearTimeout(logoutTime); // Clear timeout on component unmount
        };
    }, [logoutTime]);

    // return <div>Your application content...</div>;
};

export default LogoutTimer;
