'use client';

import React, { useRef }  from 'react';

import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import { Divider } from 'primereact/divider';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

import FinanceImage from '../assets/finance.png';
import { useState } from 'react';

export default function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
     const [username, setUsername]=useState('');
console.log(setUsername)
    const toast = useRef<Toast>(null);
const Login=(e: { preventDefault: () => void; })=>{
     e.preventDefault(); 
    console.log(username);
    console.log(password);
    if (!username && !password) {
        toast.current?.show({
            severity: 'error',
            summary: 'Missing Fields',
            detail: 'Please enter both username and password.',
            life: 3000,
        });
    } else if (!username) {
        toast.current?.show({
            severity: 'error',
            summary: 'Missing Username',
            detail: 'Please enter your username.',
            life: 3000,
        });
    } else if (!password) {
        toast.current?.show({
            severity: 'error',
            summary: 'Missing Password',
            detail: 'Please enter your password.',
            life: 3000,
        });
    } else {
        // success (you can replace this with actual login logic)
        toast.current?.show({
            severity: 'success',
            summary: 'Login Successful',
            detail: `Welcome, ${username}!`,
            life: 3000,
        });
    

}

}

    return (
        <>
        
        <div className="flex justify-center items-center min-h-screen bg-white p-4">
              <Toast ref={toast} />
            <div className="shadow-md flex flex-col md:flex-row justify-center items-center bg-white w-full max-w-4xl p-6 rounded-md">
                {/* Finance App Illustration */}
             
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={FinanceImage}
                        alt="Finance App Illustration"
                        className="w-full max-w-sm h-auto"
                    />
                </div>

                {/* Login Form */}
                <form className="w-full md:w-1/2 max-w-md bg-white">
                    <h1 className="font-extrabold text-gray-500 text-2xl">Login</h1>
                    <br />
                    <h4 className="font-bold text-gray-500">Enter your username and password to login.</h4>
                    <br />

                    <label htmlFor="username" className="block mb-1 font-medium text-gray-700">
                        Username
                        <span className='text-red-600 ps-1'>*</span>
                    </label>
                    <div className="p-inputgroup w-full mb-4">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user" />
                        </span>
                        <InputText
                            id="username"
                            placeholder="Username"
                            className="w-full my-custom-input"
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-800">
                        Password
                         <span className='text-red-600 ps-1'>*</span>
                    </label>
                    <div className="p-inputgroup w-full mb-4">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-lock" />
                        </span>
                          <InputText
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full my-custom-input"
                required
>
          
                </InputText>
            <span
                className="p-inputgroup-addon cursor-pointer !bg-transparent border-e border-gray-300 "
                onClick={() => setShowPassword((prev: unknown) => !prev)}
            >
              
                 <i className={showPassword ? 'pi pi-eye' : 'pi pi-eye-slash'} />
            </span>
                    </div>

                    <div className="flex justify-center mb-4">
                        <Button
                            label="Login"
                            className="login font-medium px-5 py-2 rounded w-full"
                            severity="success"
                            onClick={Login}
                        />
                    </div>

                    <Divider />
                    <p className="text-center text-sm text-gray-500">Forgot your password?</p>
                </form>
            </div>
        </div>
        </>
    );
}
