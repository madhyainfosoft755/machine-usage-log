import { useEffect, useState } from "react";
import TasksTable from "../../components/Organisms/task-table"
import { addInstitute, getAllLogs, getBreakDownLogs, getCleaningLogs, getEmployees, getInstitutes, getMaintenanceLogs, updateInstitute } from "../../api/AdminApi";
import { Button, Label, Select } from 'flowbite-react';
import { Modal } from 'flowbite-react';
import DepartmentForm from "../../components/Organisms/department-form/department-form";
import LogForm from "../../components/Organisms/log-form/log-form";
import ExcelExport from "../../components/Molecules/excel-export/excel-export";
import ExcelExportJS from "../../components/Molecules/excel-export/exceljs-export";
import LogTable from "../../components/Organisms/log-table/log-table";

const ManageTask = () => {

    const [rows, setRows] = useState();
    const [openModal, setOpenModal] = useState(false);
    const [instituteName, setInstituteName] = useState(null);
    const [status, setStatus] = useState(null);
    const [updateId, setUpdateId] = useState(null);
    const [userForm, setUserForm] = useState(null);
    const [combinedData, setCombinedData] = useState([]);
    const [logtypes, setLogtypes] = useState([{ name: 'Usage', value: "op" }, { name: 'Cleaning', value: "cl" }, { name: 'Maintenance', value: "m" }, { name: 'Breakdown', value: "break" }]);

    const columns = ['DATE', 'LOCATION', 'FORMAT', 'SHIFT', 'MACNINE', 'BATCH', "START TIME", "END TIME", 'DONE BY', 'CHECK BY'];
    const keys = ['date', 'location', 'format', 'shift', 'machine_name', 'batch', `${userForm && userForm.category}_st_time`, `${userForm && userForm.category}_ed_time`, 'done_by_name', 'check_by'];
    const keysForTable = ['date', 'shift', 'machine_name', 'batch', `${userForm && userForm.category}_st_time`, `${userForm && userForm.category}_ed_time`, 'done_by_name', 'check_by', 'remarks'];


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

    const handleUpdate = async () => {
        const formdata = new FormData();
        if (userForm) {
            formdata.append("firstName", userForm.firstName);
            formdata.append("lastName", userForm.lastName);
            formdata.append("email", userForm.email);
            formdata.append("contact", userForm.contact);
            formdata.append("department", userForm.department);
            formdata.append("user_id", updateId);
            const addedinst = await addUser(formdata);
            setStatus(addedinst.status);
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
                logs = await getAllLogs();
            }
            if (userForm.category == 'm') {
                logs = await getMaintenanceLogs();

            }
            if (userForm.category == 'cl') {
                logs = await getCleaningLogs();

            }
            if (userForm.category == 'break') {
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

    return <>
        <div className="w-screen p-3">
            <div className="flex">

            </div>

            <div className="flex">
                <div class="mb-6 p-3">
                    <div className="mb-2 block">
                        <Label htmlFor="category" value="Logs" />
                    </div>
                    <Select id="categor" name='category' required onChange={handleInput}>
                        {/* <option value={0}>select</option> */}
                        <option value={0}>select</option>

                        {logtypes && logtypes.map((value, index) => {

                            return <option key={index} value={value.value}>{value.name}</option>;
                        })}
                    </Select>

                </div>

                <div class="mb-6 p-3">
                    <div className="mb-2 block">
                        <Label htmlFor="type" value="Type" />
                    </div>
                    <Select id="type" name='machine' required onChange={handleInput}>
                        <option value={0}>select</option>


                        <option key={1} value={1}>{"Checked"}</option>
                        <option key={2} value={2}>{"Unchecked"}</option>

                    </Select>

                </div>


                {rows && <div className="mt-11"> < ExcelExportJS tableData={rows && rows} keysForTable={keysForTable} category={userForm.category} /></div>}
            </div>


            {rows ? <LogTable columns={columns} rows={rows && rows} keys={keys} setUpdateId={setUpdateId} setOpenModal={setOpenModal} /> : <h3> Loading... </h3>}

            {/* <Modal show={openModal} size="md" onClose={() => setOpenModal(false)}>
                <Modal.Header >Add Log</Modal.Header>
                <Modal.Body>
                    <LogForm status={status} handleInput={handleInput} userForm={userForm} handleAdd={handleAdd} updateId={updateId} handleUpdate={handleUpdate} setStatus={setStatus} />
                </Modal.Body>
            </Modal> */}

        </div>
    </>
}

export default ManageTask;