import { API_URL } from "../constants/constant";
import axios from "axios";

//get logs 
export const getUserCleaningLogs = async (pageValue) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.get(`${API_URL}/fetchAllCleaning_logsUser_Data`, {
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

export const getUserUsageLogs = async (pageValue) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.get(`${API_URL}/fetchAllUsage_logsUser_Data`, {
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

export const getUserMaintenanceLogs = async (pageValue) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.get(`${API_URL}/fetchAllMaintenance_logsUser_Data`, {
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


export const getUserBreakdownLogs = async (pageValue) => {
	let result = {};

	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.get(`${API_URL}/fetchAllBreakdown_logsUser_Data`, {
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


//Get User Profile
export const getUserProfile = async () => {
	
	try {
		// const headers = getAuthToken();
		const accessToken = localStorage.getItem('accessToken');
		const result = await axios.get(`${API_URL}/getUserProfile`, {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		});

		// console.log(result);

		if (!(result.data.status == "success")) {
			return result.data;
		}

		return result.data;
	} catch (err) {
		console.log(err, "An exception occured");
		return { status: "error", message: "Exception" };
	}
};