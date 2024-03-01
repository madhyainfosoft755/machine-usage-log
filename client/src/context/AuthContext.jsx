import { createContext, useReducer, useEffect, useState } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			return { user: action.payload, isAuthenticated: true };
		case "LOGOUT":
			return { user: null, isAuthenticated: false };
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
	});

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		const user = JSON.parse(localStorage.getItem('user'));

		if (user) {
			dispatch({ type: "LOGIN", payload: user });
			setIsLoading(false);

		}
		setIsLoading(false);

	}, []);

	console.log("AuthContext state:", state);

	return (
		<AuthContext.Provider value={{ ...state, dispatch, isLoading }}>
			{children}
		</AuthContext.Provider>
	);
};
