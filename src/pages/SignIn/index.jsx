import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/elements/Button";
import { app } from "../../firebase-config.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        const auth = getAuth();
        try {
            const response = await signInWithEmailAndPassword(auth, data.email, data.password);
            const uid = response.user.uid;
            sessionStorage.setItem('User Id', uid);
            sessionStorage.setItem('Auth token', response._tokenResponse.refreshToken);
            window.dispatchEvent(new Event("storage"));
            toast.success('Successfully signed in! 🎉', {
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
        } catch (error) {
            handleFirebaseError(error);
        } finally {
            setLoading(false);
        }
    };

    const handleFirebaseError = (error) => {
        switch (error.code) {
            case 'auth/wrong-password':
                toast.error('Incorrect password');
                break;
            case 'auth/user-not-found':
                toast.error('Email not found, please sign up');
                break;
            case 'auth/invalid-email':
                toast.error('Invalid email format');
                break;
            case 'auth/user-disabled':
                toast.error('User disabled');
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
                    <h5 className="text-3xl text-gray-800">Sign In</h5>
                    <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
                                autoComplete="current-password"
                            />
                        </div>
                        <Button size="large">{loading ? "Loading..." : 'Sign In'}</Button>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default SignIn;
