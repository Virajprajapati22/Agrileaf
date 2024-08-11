import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@/config/firebaseConfig';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const AuthForm = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');

    const toggleAuthMode = () => setIsSignUp(!isSignUp);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isSignUp) {
                const timestamp = new Date().getTime();
                const uniqueUserId = timestamp;
                setUserId(uniqueUserId);
                await createUserWithEmailAndPassword(auth, email, password);
                setIsSignUp(false);
            } else {
                try {
                    let v = await signInWithEmailAndPassword(auth, email, password);
                    localStorage.setItem("agrileaf-userToken", v?.user?.accessToken);
                    router.push('/');
                } catch (e) {
                    console.log(e);
                    setPassword('');
                }
            }
        } catch (error) {
            console.error("Authentication error:", error);
        }
    };

    return (
        <div className="flex justify-center bg-opacity-10 items-center bg-green-200">
            <div className="p-8 bg-white rounded-lg shadow-lg w-[50em] bg-opacity-70">
                <h2 className="text-2xl font-semibold text-green-900 mb-6">{isSignUp ? 'Sign Up' : 'Login'}</h2>
                <form onSubmit={handleSubmit}>
                    {isSignUp && (
                        <div className="mb-4">
                            <label htmlFor="userId" className="block text-green-700 text-sm font-bold mb-2">Generated User ID</label>
                            <input
                                type="text"
                                id="userId"
                                value={userId}
                                readOnly
                                className="w-full px-3 py-2 text-green-700 border border-green-300 rounded-lg focus:outline-none focus:border-green-500"
                            />
                        </div>
                    )}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-green-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 text-green-700 border border-green-300 rounded-lg focus:outline-none focus:border-green-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-green-700 text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 text-green-700 border border-green-300 rounded-lg focus:outline-none focus:border-green-500"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-green-800"
                        >
                            {isSignUp ? 'Sign Up' : 'Login'}
                        </button>
                        <button
                            type="button"
                            onClick={toggleAuthMode}
                            className="text-green-700 hover:text-green-900 font-semibold"
                        >
                            {isSignUp ? 'Already have an account? Login' : 'Don’t have an account? Sign Up'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AuthForm;
