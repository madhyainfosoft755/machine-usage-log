import { Label, Modal, TextInput, Select } from 'flowbite-react';
import { Alert } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { getDepartments } from '../../../api/AdminApi';
import { HiInformationCircle } from 'react-icons/hi';
const UserForm = ({ userForm, handleInput, setStatus, status, updateId, handleAdd, handleUpdate }) => {
    const [department, setDepartment] = useState(null);

    useEffect(() => {
        async function FetchApi() {
            const result = await getDepartments(0);
            setDepartment(result.data);
        }
        FetchApi();

    }, [])
    return <>
        <div className="space-y-6">

            {/* <h3 className="text-xl font-medium text-gray-900 dark:text-white"></h3> */}
            <div>
                {/* First Input Pair */}
                <div className='flex flex-wrap justify-around md:p-3'>
                    <div className="flex flex-col">
                        <div className="mb-2 block">
                            <Label htmlFor="firstName" />
                        </div>
                        <TextInput id="firstName" name='firstName' placeholder="First Name" value={userForm && userForm.firstName} onChange={handleInput} required />
                    </div>

                    <div className="flex flex-col">
                        <div className="mb-2 block">
                            <Label htmlFor="lastName" />
                        </div>
                        <TextInput id="lastName" name='lastName' placeholder="Last Name" value={userForm && userForm.lastName} onChange={handleInput} required />
                    </div>
                </div>
                {/* Second Input Pair */}
                <div className='flex flex-wrap justify-around  md:p-3'>

                    <div className="flex flex-col">
                        <div className="mb-2 block">
                            <Label htmlFor="contact" />
                        </div>
                        <TextInput id="contact" name='contact' placeholder="Contact" value={userForm && userForm.contact} onChange={handleInput} required />
                    </div>

                    <div className="flex flex-col">
                        <div className="mb-2 block">
                            <Label htmlFor="email" />
                        </div>
                        <TextInput id="email" placeholder="Email" name='email' value={userForm && userForm.email} onChange={handleInput} required />
                    </div>

                </div>
                {/* Third Input Pair */}
                <div className='flex md:p-3 justify-center md:justify-normal'>
                    <div className="w-full p-2">
                        <div className="mb-2 block">
                            <Label htmlFor="department" value="Select your department" />
                        </div>
                        <Select id="department" name='department' required onChange={handleInput}>
                            {/* <option value={0}>select</option> */}
                            {department && department.map((value, index) => {

                                return <option key={index}>{value.department_name}</option>;
                            })}
                        </Select>
                    </div>
                </div>
            </div>


            <div className="w-full md:p-3 flex justify-center">
                <Button onClick={!updateId ? handleAdd : handleUpdate}>{updateId ? "UPDATE" : "ADD"}</Button>
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


export default UserForm;