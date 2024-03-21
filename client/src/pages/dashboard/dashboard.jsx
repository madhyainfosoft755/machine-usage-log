import { useEffect, useState } from "react"
import DashboardCard from "../../components/Atoms/dashboard-card"
import { getDepartments, getEmployees, getMachines } from "../../api/AdminApi";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [userNum, setUserNum] = useState(0);
    const [machineNum, setMachineNum] = useState(0);
    const [departmentNum, setDepartmentNum] = useState(0);
    useEffect(() => {
        const fetchUser = async () => {
            const response = await getEmployees();
            if (response.data)
                setUserNum(response.data.length);

        }

        const fetchMachine = async () => {
            const response = await getMachines();
            if (response.data)
                setMachineNum(response.data.length);

        }

        const fetchDepartment = async () => {
            const response = await getDepartments();
            if (response.data)
                setDepartmentNum(response.data.length);

        }

        fetchUser()
        fetchMachine()
        fetchDepartment()

    }, []);
    return <>
        <div className="flex flex-wrap justify-around w-full">
            <Link to="/admin/users">
                <DashboardCard title={'OPERATORS'} value={userNum} />
            </Link>
            <Link to="/admin/machines">
                <DashboardCard title={'MACHINES'} value={machineNum} />
            </Link>
            <Link to="/admin/departments">
                <DashboardCard title={'DEPARTMENT'} value={departmentNum} />
            </Link>


        </div>
    </>
}

export default Dashboard