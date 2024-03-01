import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from '../pages/home/home';
import SignIn from '../pages/signin/signin';
import SignUp from '../pages/signup/signup';
import UserLayout from '../layout/User/userLayout';
import Account from '../pages/account/account';
import AdminLayout from '../layout/Admin/adminLayout';
import Dashboard from '../pages/dashboard/dashboard';
import Department from '../pages/department/department';
import Designation from '../pages/designation/designation';
import CreateTask from '../pages/create-task/create-task';
import ToDo from '../pages/todo/to-do';
import Employees from '../pages/employees/employees';
import ManageTask from '../pages/manage-task/manage-task';
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route index element={<SignIn />} />
            <Route path="login" element={<SignIn />} />
            <Route path="register" element={<SignUp />} />
            <Route path='user' element={<UserLayout />}>
                <Route path='account' element={<Account />} />

            </Route>
            <Route path='admin' element={<AdminLayout />}>
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='users' element={<Employees />} />
                <Route path='departments' element={<Department />} />
                <Route path='machines' element={<Designation />} />
                <Route path='assign' element={<CreateTask />} />
                <Route path='todo' element={<ToDo />} />
                <Route path='assigned-machines' element={<ManageTask />} />
            </Route>
        </Route>
    ),
)