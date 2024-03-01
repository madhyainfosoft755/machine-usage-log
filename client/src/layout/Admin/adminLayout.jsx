import { Outlet, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useEffect } from 'react';
import SideBar from '../../components/Organisms/sidebar/sidebar';
import SidebarNione from '../../components/Organisms/nionesidebar/nione-sidebar';
import SidebarComponent from '../../components/Organisms/reac-sidebar.jsx';

const AdminLayout = () => {
    const { user, isLoading, isAuthenticated } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(user, "is user")
        console.log(isAuthenticated, "is authenteicated")
        console.log(isLoading, "is laoding")
        const auth = user ? !isAuthenticated : !isLoading;
        console.log(auth, "chekc auth")

        if (!auth) {
            if (!isLoading)
                if (!(user.userrole == 1))
                    navigate('/user');
        } else {
            navigate('/login');
        }
    }, [isLoading]);

    if (isLoading) {
        return <h1>Loading ....</h1>
    }
    return <>
        {/* <SideBar /> */}
        {/* <SidebarNione /> */}
        <div className='sm:flex'>
            <SidebarComponent />
            <Outlet />
        </div>

    </>
}

export default AdminLayout;