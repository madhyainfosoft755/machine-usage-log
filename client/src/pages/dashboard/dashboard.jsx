import { useEffect, useState } from "react"
import DashboardCard from "../../components/Atoms/dashboard-card"
import { getDepartments, getEmployees, getMachines } from "../../api/AdminApi";

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
            <DashboardCard title={'OPERATORS'} value={userNum} />
            <DashboardCard title={'MACHINES'} value={machineNum} />
            <DashboardCard title={'DEPARTMENT'} value={departmentNum} />
        </div>
    </>
}

export default Dashboard