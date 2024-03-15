import { useState } from "react";
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import LogForm from "../../components/Organisms/log-form/log-form";
import { addLog } from "../../api/AdminApi";
// import MainTenanceLogForm from "../../components/Organisms/log-form/cleaning-log";
import CleaningLogForm from "../../components/Organisms/log-form/cleaning-log";
import MainTenanceLogForm from "../../components/Organisms/log-form/maintanance-log";
import BreakDownLogForm from "../../components/Organisms/log-form/breakdown-log";

const AddLog = () => {

    const [status, setStatus] = useState(null);
    const [updateId, setUpdateId] = useState(null);
    const [userForm, setUserForm] = useState({ location: "bhopal", format: "QA/035-F01-00" });

    const handleAdd = async () => {
        // const formdata = new FormData();
        console.log(userForm, "user form tehat");
        if (userForm) {
            // formdata.append("firstName", userForm.firstName);
            // formdata.append("lastName", userForm.lastName);
            // formdata.append("email", userForm.email);
            // formdata.append("contact", userForm.contact);
            // formdata.append("department", userForm.department);
            const addedinst = await addLog(userForm);
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
        console.log(userForm, "curren form data");
    }

    const handleDate = (e) => {
        console.log(e, 'current date');
        setUserForm({ ...userForm, 'date': e });
        console.log(userForm, "curren form data");
    }
    return <>
        <Tabs aria-label="Tabs with icons" style="underline" className="p-3">
            <Tabs.Item active title="Usage Log" icon={HiClipboardList}>
                <div className="p-5 flex justify-center w-screen">
                    <div className="w-full p-10">
                        <LogForm status={status} handleInput={handleInput} handleDate={handleDate} userForm={userForm} handleAdd={handleAdd} updateId={updateId} handleUpdate={handleUpdate} setStatus={setStatus} />
                    </div>
                </div>
            </Tabs.Item>
            <Tabs.Item active title="Cleaning Log" icon={HiAdjustments}>
                <div className="p-5 flex justify-center w-screen">
                    <div className="w-full p-10">
                        <CleaningLogForm status={status} handleInput={handleInput} handleDate={handleDate} userForm={userForm} handleAdd={handleAdd} updateId={updateId} handleUpdate={handleUpdate} setStatus={setStatus} />
                    </div>
                </div>
            </Tabs.Item>
            <Tabs.Item active title="Maintenance" icon={HiClipboardList}>
                <div className="p-5 flex justify-center w-screen">
                    <div className="w-full p-10">
                        <MainTenanceLogForm status={status} handleInput={handleInput} handleDate={handleDate} userForm={userForm} handleAdd={handleAdd} updateId={updateId} handleUpdate={handleUpdate} setStatus={setStatus} />
                    </div>
                </div>
            </Tabs.Item>
            <Tabs.Item active title="Breakdown Log" icon={HiClipboardList}>
                <div className="p-5 flex justify-center w-screen">
                    <div className="w-full p-10">
                        <BreakDownLogForm status={status} handleInput={handleInput} handleDate={handleDate} userForm={userForm} handleAdd={handleAdd} updateId={updateId} handleUpdate={handleUpdate} setStatus={setStatus} />
                    </div>
                </div>
            </Tabs.Item>
        </Tabs>

    </>;
}

export default AddLog;