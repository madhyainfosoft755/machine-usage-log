import { useEffect, useState } from "react";
import TasksTable from "../../components/Organisms/task-table"
import { addInstitute, addUser, deactivateUser, getEmployees, getInstitutes, updateInstitute, updateUser } from "../../api/AdminApi";
import { Button } from 'flowbite-react';
import { Modal } from 'flowbite-react';
import InstituteForm from "../../components/Organisms/institute-form/institute-form";
import DepartmentForm from "../../components/Organisms/department-form/department-form";
import UserForm from "../../components/Organisms/user-form/user-form";
import UsersTable from "../../components/Organisms/users-table/users-table";

const Employees = () => {

    const [rows, setRows] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [instituteName, setInstituteName] = useState(null);
    const [status, setStatus] = useState(null);
    const [updateId, setUpdateId] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [userForm, setUserForm] = useState(null);

    const columns = ['USER NAME', 'CONTACT', 'EMAIL', 'DEPARTMENT', 'ACTION'];
    const keys = ['user_name', 'user_contact', 'user_email', 'department_id'];


    const handleAdd = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        console.log(userForm, "user form tehat");
        if (userForm && (userForm.confpassword == userForm.password)) {
            formdata.append("user_name", userForm.firstName + " " + userForm.lastName);
            formdata.append("user_email", userForm.email);
            formdata.append("user_password", userForm.password);
            formdata.append("user_contact", userForm.contact);
            formdata.append("is_admin", 0);
            formdata.append("is_superadmin", 0);
            formdata.append("is_active", 1);
            // formdata.append("department", userForm.department);
            const addedinst = await addUser(formdata);
            setStatus(addedinst);

            // setUserForm(null);
        }
    }

    const handleUpdate = async (e) => {
        e.preventDefault();

        const formdata = new FormData();

        if (userForm && (userForm.confpassword == userForm.password)) {
            formdata.append("user_name", userForm.firstName + " " + userForm.lastName);
            formdata.append("user_email", userForm.email);
            formdata.append("user_password", userForm.password);
            formdata.append("user_contact", userForm.contact);
            formdata.append("is_admin", 0);
            formdata.append("is_superadmin", 0);
            formdata.append("is_active", 1);
            // formdata.append("department", userForm.department);
            // formdata.append("user_id", updateId);
            const addedinst = await updateUser(formdata, updateId);
            console.log(addedinst, 'value from api ');
            setStatus(addedinst);
        }
    }

    const handleDeactivate = async () => {
        if (updateId) {
            const deactivate = await deactivateUser(updateId);
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

            {rows ? <UsersTable columns={columns} rows={rows && rows} keys={keys} setUpdateId={setUpdateId} setOpenModal={setOpenModal} action={"user_id"} nameA={"user_name"} setCurrentUser={setCurrentUser} setDeleteModal={setDeleteModal} /> : <h3> Loading... </h3>}

            <Modal show={openModal} size="lg" onClose={() => { setOpenModal(false); setUpdateId(null); setCurrentUser(null); }}>
                <Modal.Header>{updateId ? "UPDATE USER" : "ADD USER"} {currentUser && "(" + currentUser + ")"}</Modal.Header>
                <Modal.Body>
                    <UserForm status={status} handleInput={handleInput} userForm={userForm} handleAdd={handleAdd} updateId={updateId} handleUpdate={handleUpdate} setStatus={setStatus} setCurrentUser={setCurrentUser} />
                </Modal.Body>
            </Modal>
            <Modal show={deleteModal} size="lg" >
                <Modal.Body>
                    <div class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        <button type="button" onClick={() => { setDeleteModal(false); setUpdateId(null); setCurrentUser(null); }} class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="deleteModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only" >Close modal</span>
                        </button>
                        <svg class="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                        <p class="mb-4 text-gray-500 dark:text-gray-300">Are you sure you want to deactivate user {currentUser && "(" + currentUser + ")"} ?</p>
                        <div class="flex justify-center items-center space-x-4">
                            <button onClick={() => { setDeleteModal(false); setUpdateId(null); setCurrentUser(null); }} data-modal-toggle="deleteModal" type="button" class="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                No, cancel
                            </button>
                            <button onClick={() => { handleDeactivate(); setDeleteModal(false); hadleDeactivate() }} type="submit" class="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                                Yes, I'm sure
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </div>
    </>
}

export default Employees;