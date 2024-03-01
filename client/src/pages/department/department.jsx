import { useEffect, useState } from "react";
import TasksTable from "../../components/Organisms/task-table"
import { addDepartment, addInstitute, getDepartments, getInstitutes, updateDepartment, updateInstitute } from "../../api/AdminApi";
import { Button } from 'flowbite-react';
import { Modal } from 'flowbite-react';
import InstituteForm from "../../components/Organisms/institute-form/institute-form";
import DepartmentForm from "../../components/Organisms/department-form/department-form";

const Department = () => {

    const [rows, setRows] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [instituteName, setInstituteName] = useState(null);
    const [status, setStatus] = useState(null);
    const [updateId, setUpdateId] = useState(null);

    const columns = ['DEPARTMENT NAME', 'ACTION'];
    const keys = ['department_name'];


    const handleAdd = async () => {
        const formdata = new FormData();
        if (instituteName) {
            formdata.append("institute_name", instituteName);
            const addedinst = await addDepartment(formdata);
            setStatus(addedinst.status);
        } else {

        }
    }

    const handleUpdate = async () => {
        const formdata = new FormData();
        formdata.append("department_name", instituteName);
        formdata.append("department_id", updateId);
        const addedinst = await updateDepartment(formdata);
        console.log(updateId, "item to be updated");
        setStatus(addedinst.status);
    }

    useEffect(() => {
        async function FetchApi() {
            const institutes = await getDepartments(0);
            setRows(institutes.data);
        }
        FetchApi();
    }, [status]);

    return <>
        <div className="w-screen p-3">
            <Button onClick={() => { setOpenModal(true); setUpdateId(null) }} className="mb-3" size={"xs"} >Add Department</Button>

            {rows ? <TasksTable columns={columns} rows={rows && rows} keys={keys} setUpdateId={setUpdateId} action="department_id" setOpenModal={setOpenModal} /> : <h3> Loading... </h3>}

            <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
                <Modal.Header />
                <Modal.Body>
                    <DepartmentForm status={status} setStatus={setStatus} setInstituteName={setInstituteName} instituteName={instituteName} handleAdd={handleAdd} updateId={updateId} handleUpdate={handleUpdate} />
                </Modal.Body>
            </Modal>

        </div>
    </>
}

export default Department;