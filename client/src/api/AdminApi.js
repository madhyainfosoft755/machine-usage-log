import { API_URL } from "../constants/constant";
import axios from "axios";

export const addInstitute = async (data) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		result = await axios.post(`${API_URL}/addInstitutes`, data);

		console.log(result);

		if (!(result.data.status == "success")) {
			return { status: "error", message: "did not get any user" };
		}

		return result.data;
	} catch (err) {
		console.log(err, "An exception occured");
		return { status: "error", message: "Exception" };
	}
};

export const getInstitutes = async () => {
	let result = {};

	try {
		// const headers = getAuthToken();
		result = await axios.get(`${API_URL}/getInstitutes`);

		console.log(result);

		if (!(result.data.status == "success")) {
			return { status: "error", message: "did not get any user" };
		}

		return result.data;
	} catch (err) {
		console.log(err, "An exception occured");
		return { status: "error", message: "Exception" };
	}
};


export const updateInstitute = async (data) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		result = await axios.put(`${API_URL}/updateInstitute`,data);

		console.log(result);

		if (!(result.data.status == "success")) {
			return { status: "error", message: "did not get any user"};
		}

		return result.data;
	} catch (err) {
		console.log(err, "An exception occured");
		return { status: "error", message: "Exception" };
	}
};

//todo

export const addTodo = async (data) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		result = await axios.post(`${API_URL}/addTodo`, data);

		console.log(result);

		if (!(result.data.status == "success")) {
			return { status: "error", message: "did not get any user" };
		}

		return result.data;
	} catch (err) {
		console.log(err, "An exception occured");
		return { status: "error", message: "Exception" };
	}
};

export const getTodo = async (pageValue) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		result = await axios.get(`${API_URL}/getTodo`,  {params: {
			page: pageValue
		}});

		console.log(result);

		if (!(result.data.status == "success")) {
			return { status: "error", message: "did not get any user" };
		}

		return result.data;
	} catch (err) {
		console.log(err, "An exception occured");
		return { status: "error", message: "Exception" };
	}
};

//Employees 
export const getEmployees = async (pageValue) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.get(`${API_URL}/fetchAllUserData`, {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		});

		console.log(result);

		if (!(result.data.status == "success")) {
			return { status: "error", message: "did not get any user" };
		}

		return result.data;
	} catch (err) {
		console.log(err, "An exception occured");
		return { status: "error", message: "Exception" };
	}
};


export const addUser = async (data) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');

		result = await axios.post(`${API_URL}/UserInsert`, data, {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		});

		console.log(result);

		if (!(result.data.status == "success")) {
			return { status: "error", message: "did not get any user" };
		}

		return result.data;
	} catch (err) {
		console.log(err, "An exception occured");
		return { status: "error", message: "Exception" };
	}
};

export const updateUser = async (data) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		result = await axios.post(`${API_URL}/updateEmployee`, data);

		console.log(result);

		if (!(result.data.status == "success")) {
			return { status: "error", message: "did not get any user" };
		}

		return result.data;
	} catch (err) {
		console.log(err, "An exception occured");
		return { status: "error", message: "Exception" };
	}
};

//Department
export const getDepartments = async () => {
	
	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.get(`${API_URL}/fetchAllDepartmentData`, {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		});

		// console.log(result);

		if (!(result.data.status == "success")) {
			return { status: "error", message: "did not get any user" };
		}

		return result.data;
	} catch (err) {
		console.log(err, "An exception occured");
		return { status: "error", message: "Exception" };
	}
};

export const addDepartment = async (data) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		result = await axios.post(`${API_URL}/addDepartment`, data);

		console.log(result);

		if (!(result.data.status == "success")) {
			return { status: "error", message: "did not get any user" };
		}

		return result.data;
	} catch (err) {
		console.log(err, "An exception occured");
		return { status: "error", message: "Exception" };
	}
};

export const updateDepartment = async (data) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		result = await axios.post(`${API_URL}/updateDepartment`,data);

		console.log(result);

		if (!(result.data.status == "success")) {
			return { status: "error", message: "did not get any user"};
		}

		return result.data;
	} catch (err) {
		console.log(err, "An exception occured");
		return { status: "error", message: "Exception" };
	}
};

//Machine
export const getMachines = async () => {
	
	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.get(`${API_URL}/fetchAllMachinesData`, {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		});

		// console.log(result);

		if (!(result.data.status == "success")) {
			return { status: "error", message: "did not get any user" };
		}

		return result.data;
	} catch (err) {
		console.log(err, "An exception occured");
		return { status: "error", message: "Exception" };
	}
};

export const addMachines = async (data) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.post(`${API_URL}/MachinesInsert`, JSON.stringify({machine_name:data}) ,{
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		});

		console.log(result);

		if (!(result.data.status == "success")) {
			return { status: "error", message: "did not get any user" };
		}

		return result.data;
	} catch (err) {
		console.log(err, "An exception occured");
		return { status: "error", message: "Exception" };
	}
};

export const updateMachines = async (data) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.get(`${API_URL}/fetchAllDepartmentData`, {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		});

		console.log(result);

		if (!(result.data.status == "success")) {
			return { status: "error", message: "did not get any user"};
		}

		return result.data;
	} catch (err) {
		console.log(err, "An exception occured");
		return { status: "error", message: "Exception" };
	}
};

//Designation
export const getDesignations = async (pageValue) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		result = await axios.get(`${API_URL}/getDesignations`,  { params: {
			page: pageValue
		}});

		console.log(result);

		if (!(result.data.status == "success")) {
			return { status: "error", message: "did not get any user" };
		}

		return result.data;
	} catch (err) {
		console.log(err, "An exception occured");
		return { status: "error", message: "Exception" };
	}
};


//Assign Machines
export const getAssignedMachines = async () => {

	
	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.get(`${API_URL}/fetchAllAssignData`, {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		});

		// console.log(result);

		if (!(result.data.status == "success")) {
			return { status: "error", message: "did not get any user" };
		}

		return result.data;
	} catch (err) {
		console.log(err, "An exception occured");
		return { status: "error", message: "Exception" };
	}
};

export const assignMachines = async (data) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.post(`${API_URL}/AssignInsert`, JSON.stringify(data) ,{
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		});

		console.log(result);

		if (!(result.data.status == "success")) {
			return { status: "error", message: "did not get any user" };
		}

		return result.data;
	} catch (err) {
		console.log(err, "An exception occured");
		return { status: "error", message: "Exception" };
	}
};




//Tasks
export const getTasks = async (pageValue) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		result = await axios.get(`${API_URL}/getTasks`,  {params: {
			page: pageValue
		}});

		console.log(result);

		if (!(result.data.status == "success")) {
			return { status: "error", message: "did not get any user" };
		}

		return result.data;
	} catch (err) {
		console.log(err, "An exception occured");
		return { status: "error", message: "Exception" };
	}
};

//LOGS 
export const getAllLogs = async (pageValue) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.get(`${API_URL}/fetchAllMachine_logsUser_Data`, {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		});

		console.log(result);

		if (!(result.data.status == "success")) {
			return { status: "error", message: "did not get any user" };
		}

		return result.data;
	} catch (err) {
		console.log(err, "An exception occured");
		return { status: "error", message: "Exception" };
	}
};


export const addLog = async (data) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');

		result = await axios.post(`${API_URL}/Machine_logsInsert`, JSON.stringify(data), {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		});

		console.log(result);

		if (!(result.data.status == "success")) {
			return { status: "error", message: "did not get any user" };
		}

		return result.data;
	} catch (err) {
		console.log(err, "An exception occured");
		return { status: "error", message: "Exception" };
	}
};

export const getUserlogs = async (pageValue) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.get(`${API_URL}/fetchAllUserData`, {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		});

		console.log(result);

		if (!(result.data.status == "success")) {
			return { status: "error", message: "did not get any user" };
		}

		return result.data;
	} catch (err) {
		console.log(err, "An exception occured");
		return { status: "error", message: "Exception" };
	}
};
