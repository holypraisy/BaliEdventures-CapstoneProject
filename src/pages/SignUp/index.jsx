import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/elements/Button";
import { app } from "../../firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        const auth = getAuth();
        try {
            const response = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const uid = response.user.uid;
            sessionStorage.setItem('User Id', uid);
            sessionStorage.setItem('Auth token', response._tokenResponse.refreshToken);
            window.dispatchEvent(new Event("storage"));

            const apiResponse = await fetch('http://localhost:8080/api/create-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: data.email,
                    name: data.name,
                    _id: uid
                })
            });

            if (apiResponse.status === 200) {
                toast.success('Account created successfully!🎉', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark'
                });
                navigate('/');
            } else {
                const errorData = await apiResponse.json();
                console.error(errorData);
                toast.error('Failed to create account');
            }
        } catch (error) {
            handleFirebaseError(error);
        } finally {
            setLoading(false);
        }
    };

    const handleFirebaseError = (error) => {
        switch (error.code) {
            case 'auth/email-already-in-use':
                toast.error('Email already in use');
                break;
            case 'auth/invalid-email':
                toast.error('Invalid email format');
                break;
            case 'auth/operation-not-allowed':
                toast.error('Operation not allowed');
                break;
            case 'auth/weak-password':
                toast.error('Password should be at least 6 characters');
                break;
            default:
                toast.error('An error occurred: ' + error.message);
                console.error(error);
        }
    };

    return (
        <div className="h-screen bg-white flex items-center justify-center">
            <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 transition duration-300 animate-pulse blur gradient bg-gradient-to-tr from-green-500 to-orange-500"></div>
                <div className="p-10 rounded-xl z-10 w-full h-full bg-white">
                    <h5 className="text-3xl text-gray-800">Sign Up</h5>
                    <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="name" className="block text-lg font-medium text-gray-800">Name</label>
                            <input
                                {...register('name')}
                                id="name"
                                type="text"
                                className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                autoComplete="name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg font-medium text-gray-800">Email</label>
                            <input
                                {...register('email')}
                                id="email"
                                type="email"
                                className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                autoComplete="email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-lg font-medium text-gray-800">Password</label>
                            <input
                                {...register('password')}
                                id="password"
                                type="password"
                                className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                autoComplete="new-password"
                            />
                        </div>
                        <Button size="large">{loading ? "Loading..." : 'Sign Up'}</Button>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default SignUp;
