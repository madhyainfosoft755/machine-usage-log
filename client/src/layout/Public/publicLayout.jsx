
import { Outlet } from 'react-router-dom';
const PublicLayout = () => {
    return <>
        <h1>public</h1>
        <Outlet />
    </>
}

export default PublicLayout;