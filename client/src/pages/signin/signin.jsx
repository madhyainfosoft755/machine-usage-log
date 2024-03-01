import { useState } from "react";
import loginImage from "../../assets/undraw_remotely_2j6y.svg";
import useLogin from "../../hooks/useSignIn";
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useEffect } from 'react';
const SignIn = () => {
    const { user, isLoading, isAuthenticated } = useAuthContext();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { loading, error, loginUser } = useLogin();

    const handleLogin = (e) => {
        e.preventDefault();
        loginUser(username, password);
        // Reset form after initiating login
        // setUsername('');
        // setPassword('');
    };

    useEffect(() => {
        console.log(user, "is user")
        console.log(isAuthenticated, "is authenteicated")
        console.log(isLoading, "is laoding")
        const auth = user ? isAuthenticated : !isLoading;
        console.log(auth, "chekc auth")

        if (isAuthenticated) {
            if (!isLoading) {
                if (user.userrole == 1)
                    navigate('/admin');
                if (user.userrole == 2)
                    navigate('/admin');
                if (user.userrole == 3)
                    navigate('/user');
            }
        }
    }, [isLoading]);


    if (isLoading) {
        return <h1>Loading ....</h1>
    }
    return <>
        <div className="flex flex-wrap justify-around items-center bg-[#f7fafb] p-5 h-screen">
            <div className="image-box max-w-md">
                <img classNameName="h-auto" src={loginImage} alt="image description" />

            </div>
            <div className="signin-box min-w-52 sm:min-w-[400px]">
                <div class="mb-4">
                    <h3 className="text-3xl">Sign In</h3>
                </div>
                <form className="max-w-md mx-auto" onSubmit={handleLogin}>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="floating_email" id="floating_email" onChange={(e) => { setUsername(e.target.value) }} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" name="floating_password" id="floating_password" onChange={(e) => { setPassword(e.target.value) }} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>

                    {error && <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 mt-2.5" role="alert">
                        <span class="font-mediumn"> ! </span> {error}
                    </div>}

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">{loading ? 'Logging in...' : 'Login'}</button>


                </form>

            </div>

        </div>

    </>
}

export default SignIn