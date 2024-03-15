import { useEffect, useState } from "react";
import TasksTable from "../../components/Organisms/task-table"
import { addInstitute, addMachines, getDepartments, getDesignations, getInstitutes, getMachines, updateInstitute } from "../../api/AdminApi";
import { Button } from 'flowbite-react';
import { Modal } from 'flowbite-react';
import InstituteForm from "../../components/Organisms/institute-form/institute-form";
import DepartmentForm from "../../components/Organisms/department-form/department-form";
import DesignationForm from "../../components/Organisms/designation-form/designation-form";

const Designation = () => {

    const [rows, setRows] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [instituteName, setInstituteName] = useState(null);
    const [departments, setDepartments] = useState(null);
    const [status, setStatus] = useState(null);
    const [updateId, setUpdateId] = useState(null);

    const columns = ['MACHINE NAME', 'ACTION'];
    const keys = ['machine_name'];


    const handleAdd = async () => {
        const formdata = new FormData();
        if (instituteName) {
            formdata.append("machine_name", instituteName);
            const addedinst = await addMachines(instituteName);
            setStatus(addedinst.status);
        } else {

        }
    }

    const handleUpdate = async () => {
        const formdata = new FormData();
        formdata.append("institute_name", instituteName);
        formdata.append("institute_id", updateId);
        const addedinst = await updateInstitute(formdata);
        console.log(updateId, "item to be updated")
        setStatus(addedinst.status);
    }

    useEffect(() => {
        async function FetchApi() {
            const institutes = await getMachines();
            setRows(institutes.data);
        }
        FetchApi();
    }, [status]);

    useEffect(() => {
        async function FetchApi() {
            const institutes = await getDepartments();
            setDepartments(institutes.data);
        }
        FetchApi();
    }, []);

    return <>
        <div className="w-screen p-3">
            <Button onClick={() => { setOpenModal(true) }} className="mb-3" size={"xs"} >Add Machine</Button>

            {rows ? <TasksTable columns={columns} rows={rows && rows} keys={keys} setUpdateId={setUpdateId} setOpenModal={setOpenModal} /> : <h3> Loading... </h3>}

            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)}>
                <Modal.Header >ADD MACHINE</Modal.Header>
                <Modal.Body>
                    <DesignationForm status={status} departments={departments} setInstituteName={setInstituteName} instituteName={instituteName} handleAdd={handleAdd} updateId={updateId} handleUpdate={handleUpdate} />
                </Modal.Body>
            </Modal>

        </div>
    </>
}

export default Designation;