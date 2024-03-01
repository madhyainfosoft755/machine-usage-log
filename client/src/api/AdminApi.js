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
		result = await axios.get(`${API_URL}/getEmployees`,  {params: {
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


export const addUser = async (data) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		result = await axios.post(`${API_URL}/addEmployee`, data);

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
export const getDepartments = async (pageValue) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		result = await axios.get(`${API_URL}/getDepartments`,  {params: {
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


//Tasks
//Designation
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