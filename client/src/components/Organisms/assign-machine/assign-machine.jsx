import { Label, Modal, TextInput, Select, Datepicker } from 'flowbite-react';
import { Alert } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { getDepartments, getEmployees, getMachines } from '../../../api/AdminApi';
import { HiInformationCircle } from 'react-icons/hi';
const MachineForm = ({ userForm, handleInput, setStatus, status, updateId, handleAdd, handleUpdate }) => {
    const [machines, setMachines] = useState(null);
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

            {/* <h3 className="text-xl font-medium text-gray-900 dark:text-white"></h3> */}

            <div>
                <div class="mb-6">
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
                <div class="mb-6">
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="user" value="Select User" />
                        </div>
                        <Select id="user" name='user' required onChange={handleInput}>
                            {/* <option value={0}>select</option> */}
                            {user && user.map((value, index) => {

                                return <option key={index} value={value.user_id}>{value.user_name} {" ("} {value.user_email} {")"}</option>;
                            })}
                        </Select>
                    </div>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={updateId ? handleUpdate : handleAdd}>Submit</button>
            </div>

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


export default MachineForm;