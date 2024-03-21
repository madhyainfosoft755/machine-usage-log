
'use client';

import { Sidebar } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';
import { FaPowerOff, FaSignOutAlt, FaPlus } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import useLogin from '../../../hooks/useSignIn';
import { Link, useLocation } from 'react-router-dom';
function SidebarComponent() {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();
    const { logOut } = useLogin();

    useEffect(() => {
        setIsOpen(false)
    }, [location])
    return (<><div className='bg-[#f8f9fa] flex justify-between'>
        <button onClick={() => { setIsOpen(!isOpen) }} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className={`dark inline-flex items-center p-2 mt-2 ms-3 text-sm sm:hidden text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${isOpen ? 'hidden' : ''}`}>
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
        </button>
        <div className='p-4 text-xl sm:hidden'>
            <FaPowerOff onClick={() => { logOut() }} />

        </div>
        <Sidebar aria-label="Sidebar with multi-level dropdown example" className={`dark drawer z-50 fixed sm:static ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 min-h-screen`}>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item className="sm:hidden ">
                        <button onClick={() => { setIsOpen(!isOpen) }} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span class="sr-only">Open sidebar</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </button>
                    </Sidebar.Item>
                    <Link to={"dashboard"} >
                        <Sidebar.Item icon={HiChartPie}>
                            Dashboard
                        </Sidebar.Item>
                    </Link>
                    {/* <Sidebar.Item href="/admin/todo" icon={HiInbox}>

                    </Sidebar.Item> */}
                    <Sidebar.Collapse icon={HiTable} label="Add">
                        <Link to="users"> <Sidebar.Item >Users</Sidebar.Item></Link>
                        <Link to="departments"> <Sidebar.Item >Departments</Sidebar.Item></Link>
                        <Link to="machines"> <Sidebar.Item >Machines</Sidebar.Item></Link>
                        {/* <Link to="shifts"> <Sidebar.Item >Shifts</Sidebar.Item></Link> */}
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiTable} label="Manage Machines">
                        <Link to="assign">  <Sidebar.Item> Assign</Sidebar.Item></Link>
                        <Link to="machine-logs"> <Sidebar.Item>logs</Sidebar.Item></Link>
                    </Sidebar.Collapse>
                    {/* <Sidebar.Item href="employees" icon={HiInbox}>
                        Employees
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                        Reports
                    </Sidebar.Item> */}
                    <Link to={"add-log"} >
                        <Sidebar.Item icon={FaPlus}>
                            Add Log
                        </Sidebar.Item>
                    </Link>
                    <Sidebar.Item href="#" icon={IoIosSettings}>
                        Settings
                    </Sidebar.Item>
                    <Sidebar.Item onClick={() => { logOut() }} icon={FaSignOutAlt}>
                        Logout
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>

    </div>
    </>
    );
}

export default SidebarComponent
