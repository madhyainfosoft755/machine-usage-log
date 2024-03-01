import { Label, Modal, TextInput } from 'flowbite-react';
import { Alert } from 'flowbite-react';
import { Button, Select } from 'flowbite-react';

const DesignationForm = ({ setInstituteName, setStatus, status, instituteName, updateId, handleAdd, handleUpdate }) => {
    return <>
        <div className="space-y-6">

            <h3 className="text-xl font-medium text-gray-900 dark:text-white">ADD DESIGNATION</h3>
            <div className="max-w-md">
                <div className="mb-2 block">
                    <Label htmlFor="countries" value="Choose Department" />
                </div>
                <Select id="countries" required>
                    <option>Medicine</option>
                    <option>Surgery</option>
                    <option>Anatomy</option>
                    <option>Bio Chemistry</option>
                </Select>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="institute" />
                </div>
                <TextInput id="institute" placeholder="DESIGNATION" value={instituteName} onChange={(e) => { setInstituteName(e.target.value) }} required />
            </div>
            <div className="w-full">
                <Button onClick={!updateId ? handleAdd : handleUpdate}>ADD</Button>
            </div>
            {status && (status == "success" ? <Alert color="success" onDismiss={() => setStatus(null)}>
                <span className="font-medium">Success !</span> Added Successfully
            </Alert> : <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 mt-2.5" role="alert">
                <span class="font-mediumn"> ! </span> {'Unable to add please try again'}
            </div>)}
        </div>
    </>
}


export default DesignationForm;