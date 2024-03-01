import { useEffect, useState } from "react";
import TasksTable from "../../components/Organisms/task-table"
import { addInstitute, addUser, getEmployees, getInstitutes, updateInstitute } from "../../api/AdminApi";
import { Button } from 'flowbite-react';
import { Modal } from 'flowbite-react';
import InstituteForm from "../../components/Organisms/institute-form/institute-form";
import DepartmentForm from "../../components/Organisms/department-form/department-form";
import UserForm from "../../components/Organisms/user-form/user-form";

const Employees = () => {

    const [rows, setRows] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [instituteName, setInstituteName] = useState(null);
    const [status, setStatus] = useState(null);
    const [updateId, setUpdateId] = useState(null);
    const [userForm, setUserForm] = useState(null);

    const columns = ['USER NAME', 'CONTACT', 'EMAIL', 'DEPARTMENT', 'ACTION'];
    const keys = ['user_name', 'user_contact', 'user_email', 'department_id'];


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
            const institutes = await getEmployees(0);
            setRows(institutes.data);
        }
        FetchApi();
    }, [status]);

    return <>
        <div className="w-screen p-3">
            <Button onClick={() => { setOpenModal(true); setStatus(null) }} className="mb-3" size={"xs"} >Add User</Button>

            {rows ? <TasksTable columns={columns} rows={rows && rows} keys={keys} setUpdateId={setUpdateId} setOpenModal={setOpenModal} /> : <h3> Loading... </h3>}

            <Modal show={openModal} size="lg" onClose={() => setOpenModal(false)}>
                <Modal.Header>{updateId ? "UPDATE USER" : "ADD USER"}</Modal.Header>
                <Modal.Body>
                    <UserForm status={status} handleInput={handleInput} userForm={userForm} handleAdd={handleAdd} updateId={updateId} handleUpdate={handleUpdate} setStatus={setStatus} />
                </Modal.Body>
            </Modal>

        </div>
    </>
}

export default Employees;