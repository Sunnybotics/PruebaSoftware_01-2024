import React from "react"

import { useState } from "react"

import { useNavigate } from "react-router-dom";

export function Login(){

    const [email, setEmail] = useState("")
    const [userpassword, setUserPasword] = useState("")
    const navigate = useNavigate()
    const [showErrorToast, setShowErrorToast] = useState(false);

    async function sendData() {

        event.preventDefault();

        let data = {
            "email": email,
            "userpassword": userpassword
        }
        try {
            const response = await fetch("http://127.0.0.1:8000/login/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.status === 202) {
                const responseData = await response.json();
                localStorage.setItem("user_token", responseData.token)
                return navigate("/posts")

            } else {
                alert("Invalid credentials")
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }


    return (
    <main className="flex flex-col items-center text-center h-screen font-source-code-pro">
        <a href="/" className="font-bold text-7xl mt-9 text-yellow-500 pt-0">Ho<span className="text-orange-600">me</span></a>
        <form className="flex flex-col items-center justify-center bg-black rounded shadow-lg p-8 w-96 mt-5" onSubmit={sendData}>
            <label className="font-semibold text-yellow-500" htmlFor="usernameField">Email</label>
            <input className="h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" name="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label className="font-semibold text-yellow-500 mt-3" htmlFor="passwordField">Password</label>
            <input className="h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" name="userpassword" required value={userpassword} onChange={(e) => setUserPasword(e.target.value)} />
            <button className="h-12 px-6 w-64 text-black bg-yellow-500 mt-8 rounded font-semibold  hover:text-orange-600 duration-300">Login</button>
            <a className="h-12 px-6 w-64 pt-3 text-black bg-orange-600 mt-4 rounded font-semibold hover:text-yellow-500 duration-300" href="/register">Register</a>
        </form>
    </main>
    )
}