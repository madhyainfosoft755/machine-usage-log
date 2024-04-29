import { API_URL } from "../constants/constant";
import axios from "axios";

const formatDate = (isoDateString) => {
  const dateObject = new Date(isoDateString);

  // Extract date and time components
  const year = dateObject.getUTCFullYear();
  const month = String(dateObject.getUTCMonth() + 1).padStart(2, '0'); // Month is zero-indexed
  const day = String(dateObject.getUTCDate()).padStart(2, '0');
  const hours = String(dateObject.getUTCHours()).padStart(2, '0');
  const minutes = String(dateObject.getUTCMinutes()).padStart(2, '0');
  const seconds = String(dateObject.getUTCSeconds()).padStart(2, '0');

  // Construct the formatted date string 'Y-m-d H:i:s'
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return formattedDate;
};

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

export const updateUser = async (data, id) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');

		result = await axios.post(`${API_URL}/UserUpdate/${id}`, data, {
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

export const deactivateUser = async (id) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');

		result = await axios.post(`${API_URL}/deactive/${id}`, {}, {
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

export const updateMachines = async (data, id) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.post(`${API_URL}/MachinesUpdate/${id}`,data, {
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


// Shifts
export const getShifts = async () => {

	
	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.get(`${API_URL}/fetchAllShift_user`, {
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

export const addShifts = async (data) => {
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
		const result = await axios.get(`${API_URL}/fetchAllUsage_logsData`, {
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

export const getAllCheckedLogs = async (pageValue) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.get(`${API_URL}/fetch_UsageLogs_By_CheckBy_ID`, {
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
	data.date = formatDate(data.date);

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');

		result = await axios.post(`${API_URL}/Usage_logsInsert`, JSON.stringify(data), {
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

export const updateUsageLog = async (data) => {
	let result = {};
// data.date = formatDate(data.date);

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');

		result = await axios.post(`${API_URL}/Usage_logs_Update/${data}`,{},  {
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
		const result = await axios.get(`${API_URL}/fetchAllUsage_logsData/1/4`, {
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


export const getlogID = async (pageValue) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.get(`${API_URL}/fetchNew_Usage_logsData`, {
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


//cleaning logs
export const getCleaningLogs = async (pageValue) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.get(`${API_URL}/fetchAllCleaning_logsData`, {
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

export const getCleaningCheckedLogs = async (pageValue) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.get(`${API_URL}/fetch_CleaningLogs_By_CheckBy_ID`, {
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


export const addCleaningLog = async (data) => {
	let result = {};
    data.date = formatDate(data.date);

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');

		result = await axios.post(`${API_URL}/Cleaning_logsInsert`, JSON.stringify(data), {
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

export const updateCleaningLog = async (data) => {
	let result = {};


	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');

		result = await axios.post(`${API_URL}/Cleaning_logs_Update/${data}`,  {
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


//maintenance logs'
export const addMaintenanceLog = async (data) => {
	let result = {};
data.date = formatDate(data.date);

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');

		result = await axios.post(`${API_URL}/Maintenance_logsInsert`, JSON.stringify(data), {
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
export const getMaintenanceLogs = async (pageValue) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.get(`${API_URL}/fetchAllMaintenance_logsData`, {
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

export const getMaintenanceCheckedLogs = async (pageValue) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.get(`${API_URL}/fetch_Maintenance_logs_By_CheckBy_ID`, {
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

export const updateMaintenanceLog = async (data) => {
	let result = {};


	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');

		result = await axios.post(`${API_URL}/Maintenance_logs_Update/${data}`,  {
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


//breakdown logs
export const addBreakdownLog = async (data) => {
	let result = {};
data.date = formatDate(data.date);

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');

		result = await axios.post(`${API_URL}/Breakdown_logsInsert`, JSON.stringify(data), {
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
export const getBreakDownLogs = async (pageValue) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.get(`${API_URL}/fetchAllBreakdown_logsData`, {
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

export const getBreakDownCheckedLogs = async (pageValue) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.get(`${API_URL}/fetch_breakdown_logs_By_CheckBy_ID`, {
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

export const updateBreakdownLog = async (data) => {
	let result = {};
data.date = formatDate(data.date);

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');

		result = await axios.post(`${API_URL}/Breakdown_logs_Update/${data}`,  {
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