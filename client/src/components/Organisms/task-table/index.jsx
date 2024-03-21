const rows = [
    { id: 1, name: 'John', age: 25, country: 'USA' },
    { id: 2, name: 'Alice', age: 30, country: 'Canada' },
    { id: 3, name: 'Bob', age: 22, country: 'UK' },
    // Add more rows as needed
];

const columns = ['id', 'name', 'age', 'country', "action"];
import { Pagination } from 'flowbite-react';
import { useState } from 'react';

const TasksTable = ({ rows, columns, keys, setUpdateId, setOpenModal, action }) => {
    const [currentPage, setCurrentPage] = useState(1);


    const onPageChange = (page) => setCurrentPage(page);
    return <>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg flex flex-col justify-center">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            USAGE TYPE
                        </th>
                        {columns.map(((value, index) => {
                            return <th scope="col" class="px-6 py-3">
                                {value}
                            </th>
                        }))}

                    </tr>
                </thead>
                <tbody>
                    {rows.map((value, index) => {
                        return <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                USAGE
                            </th>
                            {keys.map((key, i) => {
                                return <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {value[key]}
                                </th>
                            })}

                            <td class="px-6 py-4">
                                <a onClick={() => { setOpenModal(true); setUpdateId(value[action]); }} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    })}

                </tbody>

            </table>
            <div className="flex overflow-x-auto sm:justify-center mb-3">
                {/* <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} /> */}

            </div>
        </div>

    </>
}
export default TasksTable;