import { Label, Modal, TextInput, Select, Datepicker, Textarea } from 'flowbite-react';
import { Alert } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { getDepartments, getEmployees, getMachines } from '../../../api/AdminApi';
import { HiInformationCircle } from 'react-icons/hi';

function formatNumberWithLeadingZeros(number, length) {
    return String(number).padStart(length, '0');
}

const LogForm = ({ userForm, handleInput, setStatus, status, updateId, handleAdd, handleUpdate, handleDate, logID }) => {
    const [department, setDepartment] = useState(null);
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();

    const [machines, setMachines] = useState(null);
    const [shift, setShift] = useState([{ shift: 1 }, { shift: 2 }, { shift: 3 }]);
    const [area, setArea] = useState(["area 1", "area 2", "area 3"]);
    const [user, setUsers] = useState(null);

    useEffect(() => {

        async function FetchApi() {
            const result = await getMachines();
            setMachines(result.data);
        }
        async function FetchUsers() {
            const result = await getEmployees();
            setUsers(result.data);
        }
        FetchApi();
        FetchUsers();

    }, [])
    return <>
        <div className="space-y-6">

            <div className='flex flex-wrap justify-between'>
                <h3 className="text-xl font-medium text-gray-700 dark:text-white">FORMAT NO: QA/035-F01-{formatNumberWithLeadingZeros(logID, 4)}</h3>
                <h2 className="text-xl font-medium text-gray-700 dark:text-white">ID NUMBER: {formatNumberWithLeadingZeros(logID, 4)}</h2>
                <h2 className="text-xl font-medium text-gray-700 dark:text-white">LOCATION: BHOPAL</h2>
                <h2 className="text-xl font-medium text-gray-700 dark:text-white"> {currentMonth} {currentYear}</h2>
            </div>
            <form className='flex flex-wrap justify-between' onSubmit={handleAdd}>

                <div class="mb-6 p-3">
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="date" value="Choose Date" />
                        </div>
                        <Datepicker name='date' onSelectedDateChanged={handleDate} />
                    </div>
                </div>
                <div class="mb-6 p-3">
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="shift" value="Select your Shift" />
                        </div>
                        <Select id="shift" name='shift' required onChange={handleInput}>
                            {/* <option value={0}>select</option> */}
                            {shift && shift.map((value, index) => {

                                return <option key={index}>{value.shift}</option>;
                            })}
                        </Select>
                    </div>
                </div>

                <div class="mb-6 p-3">
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="area" value="Area" />
                        </div>
                        <Select id="area" name='area' required onChange={handleInput}>
                            {/* <option value={0}>select</option> */}
                            {area && area.map((value, index) => {

                                return <option key={index}>{value}</option>;
                            })}
                        </Select>
                    </div>
                </div>

                <div class="mb-6 p-3">
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="machine" value="Select your Machine" />
                        </div>
                        <Select id="machine" name='machine' required onChange={handleInput}>
                            {/* <option value={0}>select</option> */}
                            {machines && machines.map((value, index) => {

                                return <option key={index} value={value.machine_id}>{value.machine_name}</option>;
                            })}
                        </Select>
                    </div>
                </div>


                <div class="mb-6 p-3">
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="product" value="Select Product" />
                        </div>
                        <TextInput name='product' placeholder='Product' onChange={handleInput} />

                    </div>
                </div>
                <div class="mb-6 p-3">
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="batch" value="Select Batch" />
                        </div>
                        <TextInput name='batch' placeholder='Batch Number' onChange={handleInput} />

                    </div>
                </div>
                <div className="w-full"></div>

                <div className='p-3'>
                    <h3 className='mb-3'>Operation</h3>
                    <div className='flex flex-wrap justify-between'>
                        <div class="mb-6 p-2">
                            <label for="start_time" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Time</label>
                            <input type="time" id="start_time" name='op_st_time' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required onChange={handleInput} />
                        </div>
                        <div class="mb-6 p-2">
                            <label for="end_time" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Time</label>
                            <input type="time" id="end_time" name='op_ed_time' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required onChange={handleInput} />
                        </div>
                    </div>
                </div>
                <div class="mb-6 p-3 mt-8">
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="done_by" value="Done By" />
                        </div>
                        <Select id="done_by" name='done_by' required onChange={handleInput}>
                            {/* <option value={0}>select</option> */}
                            {user && user.map((value, index) => {

                                return <option key={index}>{value.user_name}</option>;
                            })}
                        </Select>
                    </div>
                </div>

                <div class="mb-6 p-3 mt-8">
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="check_by" value="Checked By" />
                        </div>
                        <Select id="check_by" name='check_by' required onChange={handleInput}>
                            {/* <option value={0}>select</option> */}
                            {user && user.map((value, index) => {

                                return <option key={index}>{value.user_name}</option>;
                            })}
                        </Select>
                    </div>
                </div>
                <div className="w-full"></div>

                <div class="mb-6 p-3">
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="remarks" value="Remarks" />
                        </div>
                        <Textarea name='remarks' placeholder='Remarks' onChange={handleInput} rows={3} cols={100} />

                    </div>
                </div>

            </form>
            <button type="submit" onClick={handleAdd} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

            {status && (status == "success" ? <Alert color="success" onDismiss={() => setStatus(null)}>
                <span className="font-medium">Success !</span> Added Successfully
            </Alert> : (status == "already" ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 mt-2.5" role="alert">
                <span class="font-mediumn"> ! </span> {'Unable to add please try again'}
            </div> : <Alert color="failure" icon={HiInformationCircle} onDismiss={() => setStatus(null)}>
                <span className="font-medium"> !</span> Email Already Exist
            </Alert>))}
        </div>
    </>
}


export default LogForm;