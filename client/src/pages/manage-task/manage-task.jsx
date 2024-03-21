import { useEffect, useState } from "react";
import TasksTable from "../../components/Organisms/task-table"
import { addInstitute, getAllLogs, getEmployees, getInstitutes, updateInstitute } from "../../api/AdminApi";
import { Button, Select } from 'flowbite-react';
import { Modal } from 'flowbite-react';
import DepartmentForm from "../../components/Organisms/department-form/department-form";
import LogForm from "../../components/Organisms/log-form/log-form";
import ExcelExport from "../../components/Molecules/excel-export/excel-export";

const ManageTask = () => {

    const [rows, setRows] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [instituteName, setInstituteName] = useState(null);
    const [status, setStatus] = useState(null);
    const [updateId, setUpdateId] = useState(null);
    const [userForm, setUserForm] = useState(null);
    const [combinedData, setCombinedData] = useState([]);
    const [logtypes, setLogtypes] = useState([{ shift: 'A' }, { shift: 'B' }]);

    const columns = ['DATE', 'LOCATION', 'FORMAT', 'SHIFT', 'MACNINE', 'BATCH', 'DONE BY', 'CHECK BY', 'ACTION'];
    const keys = ['date', 'location', 'format', 'shift', 'machine', 'batch', 'done_by', 'check_by'];


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
            const institutes = await getAllLogs();
            // Combine data from all APIs into a single array
            // const combinedArray = [...api1Data, ...api2Data, ...api3Data, ...api4Data];

            // Sort the combined array by date
            // combinedArray.sort((a, b) => new Date(a.date) - new Date(b.date));
            setRows(institutes.data);
        }
        FetchApi();
    }, [status]);

    return <>
        <div className="w-screen p-3">
            {/* <Button onClick={() => { setOpenModal(true) }} className="mb-3" size={"xs"} > Add Machine Usage </Button> */}
            <div class="mb-6 p-3">
                {/* <div className="mb-2 block">
                        <Label htmlFor="machine" value="" />
                    </div> */}
                <Select id="machine" name='machine' required onChange={handleInput}>
                    {/* <option value={0}>select</option> */}
                    {logtypes && logtypes.map((value, index) => {

                        return <option key={index} value={value.shift}>{value.shift}</option>;
                    })}
                </Select>

            </div>
            {rows && <ExcelExport data={rows} keys={keys} columns={columns} />}

            {rows ? <TasksTable columns={columns} rows={rows && rows} keys={keys} setUpdateId={setUpdateId} setOpenModal={setOpenModal} /> : <h3> Loading... </h3>}

            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)}>
                <Modal.Header >Add Log</Modal.Header>
                <Modal.Body>
                    <LogForm status={status} handleInput={handleInput} userForm={userForm} handleAdd={handleAdd} updateId={updateId} handleUpdate={handleUpdate} setStatus={setStatus} />
                </Modal.Body>
            </Modal>

        </div>
    </>
}

export default ManageTask;