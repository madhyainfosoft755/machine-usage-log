import { useEffect, useState } from "react";
import { Tabs } from 'flowbite-react';
import { HiClipboardList } from 'react-icons/hi';
import LogForm from "../../components/Organisms/log-form/log-form";
import { addLog, getlogID } from "../../api/AdminApi";
// import MainTenanceLogForm from "../../components/Organisms/log-form/cleaning-log";
import CleaningLogForm from "../../components/Organisms/log-form/cleaning-log";
import MainTenanceLogForm from "../../components/Organisms/log-form/maintanance-log";
import BreakDownLogForm from "../../components/Organisms/log-form/breakdown-log";
import { GiHammerBreak } from "react-icons/gi";
import { BiSpreadsheet } from "react-icons/bi";
import { FaSoap } from "react-icons/fa";

const formatDate = (inputDateString) => {
    const dateObj = new Date(inputDateString);

    // Extract date and time components
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
    const day = String(dateObj.getDate()).padStart(2, '0');
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    const seconds = String(dateObj.getSeconds()).padStart(2, '0');

    // Construct the formatted date string 'Y-m-d H:i:s'
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    return formattedDate;
};

const AddLog = () => {

    const [status, setStatus] = useState(null);
    const [message, setMessage] = useState(null);

    const [updateId, setUpdateId] = useState(null);
    const [logID, setLogID] = useState(null);
    const [usageForm, setUsageForm] = useState({ location: "bhopal", format: "QA/035-F01-00" });
    const [cleaningForm, setCleaningForm] = useState({ location: "bhopal", format: "QA/035-F01-00" });
    const [maintenance, setMaintenance] = useState({ location: "bhopal", format: "QA/035-F01-00" });
    const [breakdown, setBreakdown] = useState({ location: "bhopal", format: "QA/035-F01-00" });

    const handleAdd = async () => {
        // const formdata = new FormData();
        console.log(usageForm, "user form tehat");
        if (usageForm) {
            // formdata.append("firstName", userForm.firstName);
            // formdata.append("lastName", userForm.lastName);
            // formdata.append("email", userForm.email);
            // formdata.append("contact", userForm.contact);
            // formdata.append("department", userForm.department);
            const addedinst = await addLog(usageForm);
            setStatus(addedinst.status);
            setMessage(addedinst.message);
        }
    }

    const handleUpdate = async () => {
        const formdata = new FormData();
        if (usageForm) {
            formdata.append("firstName", usageForm.firstName);
            formdata.append("lastName", usageForm.lastName);
            formdata.append("email", usageForm.email);
            formdata.append("contact", usageForm.contact);
            formdata.append("department", usageForm.department);
            formdata.append("user_id", updateId);
            const addedinst = await addUser(formdata);
            setStatus(addedinst.status);
        }
    }

    const handleInput = (e) => {
        let { name, value } = e.target;
        if (name.includes("st_time") || name.includes("ed_time")) {
            const currentDate = usageForm.date.toISOString().slice(0, 10);
            value = `${currentDate} ${value}:00`;
        }
        setUsageForm({ ...usageForm, [name]: value });
        console.log(usageForm, "current form data");
    }

    const handleDate = (e) => {
        console.log(e, 'current date');
        const formattedDate = formatDate(e);
        console.log(formattedDate);
        setUsageForm({ ...usageForm, 'date': formattedDate });
        console.log(usageForm, "curren form data");
    }

    useEffect(() => {
        async function fetchApi() {
            const id = await getlogID();
            setLogID(id.data.log_id);
        }
        fetchApi();
    }, []);

    return <>
        <Tabs aria-label="Tabs with icons" style="underline" className="p-3">
            <Tabs.Item title="Usage Log" icon={HiClipboardList}>
                <div className="p-5 flex justify-center">
                    <div className="w-full p-10">
                        <LogForm status={status} handleInput={handleInput} handleDate={handleDate} userForm={usageForm} handleAdd={handleAdd} updateId={updateId} handleUpdate={handleUpdate} setStatus={setStatus} logID={parseInt(logID) + 1} message={message} />
                    </div>
                </div>
            </Tabs.Item>
            <Tabs.Item title="Cleaning Log" icon={FaSoap}>
                <div className="p-5 flex justify-center">
                    <div className="w-full p-10">
                        <CleaningLogForm status={status} handleInput={handleInput} handleDate={handleDate} userForm={usageForm} handleAdd={handleAdd} updateId={updateId} handleUpdate={handleUpdate} setStatus={setStatus} />
                    </div>
                </div>
            </Tabs.Item>
            <Tabs.Item title="Maintenance" icon={BiSpreadsheet}>
                <div className="p-5 flex justify-center">
                    <div className="w-full p-10">
                        <MainTenanceLogForm status={status} handleInput={handleInput} handleDate={handleDate} userForm={usageForm} handleAdd={handleAdd} updateId={updateId} handleUpdate={handleUpdate} setStatus={setStatus} />
                    </div>
                </div>
            </Tabs.Item>
            <Tabs.Item title="Breakdown Log" icon={GiHammerBreak}>
                <div className="p-5 flex justify-center">
                    <div className="w-full p-10">
                        <BreakDownLogForm status={status} handleInput={handleInput} handleDate={handleDate} userForm={usageForm} handleAdd={handleAdd} updateId={updateId} handleUpdate={handleUpdate} setStatus={setStatus} />
                    </div>
                </div>
            </Tabs.Item>
        </Tabs>

    </>;
}

export default AddLog;