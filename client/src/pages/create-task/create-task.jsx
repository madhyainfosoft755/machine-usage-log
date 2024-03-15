import { useEffect, useState } from "react";
import TasksTable from "../../components/Organisms/task-table"
import { addInstitute, assignMachines, getAssignedMachines, getEmployees, getInstitutes, updateInstitute } from "../../api/AdminApi";
import { Button } from 'flowbite-react';
import { Modal } from 'flowbite-react';
import DepartmentForm from "../../components/Organisms/department-form/department-form";
import LogForm from "../../components/Organisms/log-form/log-form";
import MachineForm from "../../components/Organisms/assign-machine/assign-machine";

const CreateTask = () => {

    const [rows, setRows] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [instituteName, setInstituteName] = useState(null);
    const [status, setStatus] = useState(null);
    const [updateId, setUpdateId] = useState(null);
    const [userForm, setUserForm] = useState(null);

    const columns = ['MACHINE NAME', 'ASSIGN TO', 'ASSIGNED BY', 'DATE OF ASSIGNMENT', 'ACTION'];
    const keys = ['machine_name', 'user_name', 'assigned_by', 'created_at'];


    const handleAdd = async () => {
        // const formdata = new FormData();
        console.log(userForm, "user form tehat");
        if (userForm) {
            const formdata = {
                user_id: userForm.user,
                machine_id: userForm.machine
            }
            const addedinst = await assignMachines(formdata);
            setStatus(addedinst.status);
        }
    }

    const handleUpdate = async () => {
        const formdata = new FormData();
        if (userForm) {
            const formdata = {
                user_id: userForm.user,
                machine_id: userForm.machine_id
            }
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
            const institutes = await getAssignedMachines();
            setRows(institutes.data);
        }
        FetchApi();
    }, [status]);

    return <>
        <div className="w-screen p-3">
            <Button onClick={() => { setOpenModal(true) }} className="mb-3" size={"xs"} > Assign Machine </Button>

            {rows ? <TasksTable columns={columns} rows={rows && rows} keys={keys} setUpdateId={setUpdateId} setOpenModal={setOpenModal} /> : <h3> Loading... </h3>}

            <Modal show={openModal} size="lg" onClose={() => setOpenModal(false)}>
                <Modal.Header >Assign Machine</Modal.Header>
                <Modal.Body>
                    <MachineForm status={status} handleInput={handleInput} userForm={userForm} handleAdd={handleAdd} updateId={updateId} handleUpdate={handleUpdate} setStatus={setStatus} />
                </Modal.Body>
            </Modal>

        </div>
    </>
}

export default CreateTask;