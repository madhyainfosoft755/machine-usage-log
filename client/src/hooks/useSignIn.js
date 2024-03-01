import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../constants/constant';
import { useAuthContext } from './useAuthContext';
import { useNavigate } from 'react-router-dom'

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const loginUser = async (email, password) => {
    setLoading(true);
    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);

    try {
      const response = await axios.post(`${API_URL}/login`,formdata);

      // Assuming the API returns a success message and user data
      console.log('Login successful:', response.data);
      // Assuming the API returns a success message and user data
      if (response.data.status) {
        const username = response.data.name;
        const userrole = response.data.role;
        const userid = response.data.uid;
        const useremail = response.data.email;
        
        const user = {
          username,
          userrole,
          userid,
          useremail
        }

        // Save user data in localStorage
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({ type: "LOGIN", payload: user });

        // Reset error state after successful login
        setError('');

        if (user.userrole == "1")
            navigate('/admin');
        if (user.userrole == "2")
            navigate('/admin');
        if (user.userrole == "3")
            navigate('/user');
        
      } else {
        setError('Invalid Credentials');
        
      }   
    } catch (error) {
      // Handle login error
      setError('Server Error');
    } finally {
      // Reset loading state
      setLoading(false);
    }
  };

  const logOut = async () => {
    setLoading(true)
      // Assuming you have a key for the item you want to delete
    const itemKey = 'user';
    if (localStorage.getItem(itemKey)) {
      localStorage.removeItem(itemKey);
      dispatch({ type: "LOGOUT"});
      navigate("/login");
      console.log(`Item with key ${itemKey} deleted from localStorage.`);
    } else {
      console.log(`Item with key ${itemKey} not found in localStorage.`);
    }

  }

  return { loading, error, loginUser, logOut };
};

export default useLogin;
