
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useEffect } from 'react';
const UserLayout = () => {
    const { user, isLoading, isAuthenticated } = useAuthContext();
    const navigate = useNavigate();



    useEffect(() => {
        console.log(user, "is user")
        console.log(isAuthenticated, "is authenteicated")
        console.log(isLoading, "is laoding")
        const auth = user ? !isAuthenticated : !isLoading;
        console.log(auth, "chekc auth")

        if (auth) {
            navigate('/login')
        }
    }, [isLoading]);

    if (isLoading) {
        return <h1>Loading ....</h1>
    }

    return <>
        <h1>User</h1>
        <Outlet />

    </>
}

export default UserLayout