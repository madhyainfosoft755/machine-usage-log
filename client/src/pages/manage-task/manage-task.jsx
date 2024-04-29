import { useEffect, useState } from "react";
import TasksTable from "../../components/Organisms/task-table"
import { addInstitute, getAllCheckedLogs, getAllLogs, getBreakDownCheckedLogs, getBreakDownLogs, getCleaningCheckedLogs, getCleaningLogs, getEmployees, getInstitutes, getMaintenanceCheckedLogs, getMaintenanceLogs, updateBreakdownLog, updateCleaningLog, updateInstitute, updateMaintenanceLog, updateUsageLog } from "../../api/AdminApi";
import { Button, Label, Select } from 'flowbite-react';
import { Modal } from 'flowbite-react';
import DepartmentForm from "../../components/Organisms/department-form/department-form";
import LogForm from "../../components/Organisms/log-form/log-form";
import ExcelExport from "../../components/Molecules/excel-export/excel-export";
import ExcelExportJS from "../../components/Molecules/excel-export/exceljs-export";
import LogTable from "../../components/Organisms/log-table/log-table";
import { useAuthContext } from "../../hooks/useAuthContext";
import { getUserBreakdownLogs, getUserCleaningLogs, getUserMaintenanceLogs, getUserUsageLogs } from "../../api/UserApi";

const ManageTask = () => {

    const [rows, setRows] = useState();
    const [openModal, setOpenModal] = useState(false);
    const [instituteName, setInstituteName] = useState(null);
    const [status, setStatus] = useState(null);
    const [updateId, setUpdateId] = useState(null);
    const [userForm, setUserForm] = useState({
        category: 'op'
    });
    const [combinedData, setCombinedData] = useState([]);
    const [logtypes, setLogtypes] = useState([{ name: 'Usage', value: "op" }, { name: 'Cleaning', value: "cl" }, { name: 'Maintenance', value: "m" }, { name: 'Breakdown', value: "break" }]);


    const columns = ['DATE', 'LOCATION', 'FORMAT', 'SHIFT', 'MACNINE', 'BATCH', "START TIME", "END TIME", 'DONE BY', 'CHECK BY', 'ACTIONS'];
    const keys = ['date', 'location', 'format', 'shift', 'machine_name', 'batch', `${userForm && userForm.category}_st_time`, `${userForm && userForm.category}_ed_time`, 'done_by_name', 'check_by_name'];
    const keysForTable = ['date', 'shift', 'machine_name', 'batch', `${userForm && userForm.category}_st_time`, `${userForm && userForm.category}_ed_time`, 'done_by_name', 'check_by', 'remarks'];

    const { user, isLoading, isAuthenticated } = useAuthContext();

    const handleAdd = async () => {
        const formdata = new FormData();
        console.log(userForm, "user form tehat");
        if (userForm) {
            formdata.append("firstName", userForm.firstName);
            formdata.append("lastName", userForm.lastName);
            formdata.append("email", userForm.email);
            formdata.append("contact", userForm.contact);
            formdata.append("department", userForm.department);
            const addedinst = await addUser(formdata);
            setStatus(addedinst.status);
        }
    }

    const handleUpdate = async (id) => {
        let logs;
        if (userForm.category == 'op') {
            logs = await updateUsageLog(id);
        }
        if (userForm.category == 'm') {
            logs = await updateCleaningLog(id);

        }
        if (userForm.category == 'cl') {
            logs = await updateMaintenanceLog(id);

        }
        if (userForm.category == 'break') {
            logs = await updateBreakdownLog(id);

        }

    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserForm({ ...userForm, [name]: value });
    }


    useEffect(() => {
        async function FetchApi() {
            let logs;
            if (userForm.category == 'op') {
                console.log(user, "user role")
                if (user.role == 'user')
                    logs = await getUserUsageLogs();
                else
                    logs = await getAllLogs();

            }
            if (userForm.category == 'm') {
                if (user.role == 'user')
                    logs = await getUserMaintenanceLogs();
                else
                    logs = await getMaintenanceLogs();

            }
            if (userForm.category == 'cl') {
                if (user.role == 'user')
                    logs = await getUserCleaningLogs();
                else
                    logs = await getCleaningLogs();

            }
            if (userForm.category == 'break') {
                if (user.role == 'user')
                    logs = await getUserBreakdownLogs();
                else
                    logs = await getBreakDownLogs();

            }


            // Combine data from all APIs into a single array
            // const combinedArray = [...api1Data, ...api2Data, ...api3Data, ...api4Data];

            // Sort the combined array by date
            // combinedArray.sort((a, b) => new Date(a.date) - new Date(b.date));
            setRows(logs.data);
        }
        FetchApi();
    }, [status, userForm]);

    useEffect(() => {
        async function FetchApiCheck() {
            let logs;
            if (userForm.category == 'op') {
                if (userForm.checks == 1)
                    logs = await getAllCheckedLogs();

            }
            if (userForm.category == 'm') {
                if (userForm.checks == 1)
                    logs = await getMaintenanceCheckedLogs();

            }
            if (userForm.category == 'cl') {
                if (userForm.checks == 1)
                    logs = await getCleaningCheckedLogs();

            }
            if (userForm.category == 'break') {
                if (userForm.checks == 1)
                    logs = await getBreakDownCheckedLogs();

            }


            // Combine data from all APIs into a single array
            // const combinedArray = [...api1Data, ...api2Data, ...api3Data, ...api4Data];

            // Sort the combined array by date
            // combinedArray.sort((a, b) => new Date(a.date) - new Date(b.date));
            setRows(logs.data);
        }
        FetchApiCheck();
    }, [status, userForm]);

    return <>
        <div className="w-screen p-3 relative overflow-x-auto">
            <div className="flex">

            </div>

            <div className="flex">
                <div class="mb-6 p-3">
                    <div className="mb-2 block">
                        <Label htmlFor="category" value="Logs" />
                    </div>
                    <Select id="categor" name='category' required onChange={handleInput}>

                        <option value={0}>select</option>

                        {logtypes && logtypes.map((value, index) => {

                            return <option key={index} value={value.value}>{value.name}</option>;
                        })}
                    </Select>

                </div>

                {user && user.role == 'admin' && <div class="mb-6 p-3">
                    <div className="mb-2 block">
                        <Label htmlFor="type" value="Type" />
                    </div>
                    <Select id="type" name='checks' required onChange={handleInput}>
                        <option value={0}>select</option>
                        <option key={1} value={1}>{"Checked"}</option>
                        <option key={2} value={2}>{"Unchecked"}</option>

                    </Select>

                </div>}


                {rows && <div className="mt-11"> < ExcelExportJS tableData={rows && rows} keysForTable={keysForTable} category={userForm.category} /></div>}
            </div>


            {rows ? <LogTable columns={columns} rows={rows && rows} keys={keys} setUpdateId={setUpdateId} setOpenModal={setOpenModal} handleUpdate={handleUpdate} category={userForm.category} userRole={user && user.role} /> : <h3> Loading... </h3>}

            {
                /* <Modal show={openModal} size="md" onClose={() => setOpenModal(false)}>
                    <Modal.Header >Add Log</Modal.Header>
                    <Modal.Body>
                        <LogForm status={status} handleInput={handleInput} userForm={userForm} handleAdd={handleAdd} updateId={updateId} handleUpdate={handleUpdate} setStatus={setStatus} />
                    </Modal.Body>
                </Modal> */
            }

        </div>
    </>
}

export default ManageTask;