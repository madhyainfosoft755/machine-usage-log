import { useEffect, useState } from "react";
import TasksTable from "../../components/Organisms/task-table"
import { addInstitute, getDesignations, getInstitutes, updateInstitute } from "../../api/AdminApi";
import { Button } from 'flowbite-react';
import { Modal } from 'flowbite-react';
import InstituteForm from "../../components/Organisms/institute-form/institute-form";
import DepartmentForm from "../../components/Organisms/department-form/department-form";
import DesignationForm from "../../components/Organisms/designation-form/designation-form";

const Designation = () => {

    const [rows, setRows] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [instituteName, setInstituteName] = useState(null);
    const [status, setStatus] = useState(null);
    const [updateId, setUpdateId] = useState(null);

    const columns = ['DESIGNATION NAME', 'DEPARTMENT NAME', 'INSTITUTE NAME', 'ACTION'];
    const keys = ['name', 'institute_id', 'institute_id'];


    const handleAdd = async () => {
        const formdata = new FormData();
        if (instituteName) {
            formdata.append("institute_name", instituteName);
            const addedinst = await addInstitute(formdata);
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
            const institutes = await getDesignations(0);
            setRows(institutes.data);
        }
        FetchApi();
    }, [status]);

    return <>
        <div className="w-screen p-3">
            <Button onClick={() => { setOpenModal(true) }} className="mb-3" size={"xs"} >Add Designaion</Button>

            {rows ? <TasksTable columns={columns} rows={rows && rows} keys={keys} setUpdateId={setUpdateId} setOpenModal={setOpenModal} /> : <h3> Loading... </h3>}

            <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
                <Modal.Header />
                <Modal.Body>
                    <DesignationForm status={status} setInstituteName={setInstituteName} instituteName={instituteName} handleAdd={handleAdd} updateId={updateId} handleUpdate={handleUpdate} />
                </Modal.Body>
            </Modal>

        </div>
    </>
}

export default Designation;