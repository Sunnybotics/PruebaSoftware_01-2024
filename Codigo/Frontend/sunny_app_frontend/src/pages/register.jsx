import React from "react";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

// server URL
const serverURL = "http://127.0.0.1:8000/";

// Define the Register functional component
export function Register() {
  // State variables for username, email, password, and confirm password
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const navigate = useNavigate();

  // Function to send user registration data to the server
  async function SendData() {
    event.preventDefault();

    let data = {
      username: username,
      email: email,
      userpassword: userpassword,
      confirmpassword: confirmpassword,
    };

    // Send a POST request to the server with user registration data
    const response = await fetch(serverURL + "register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // Check the response status and navigate accordingly
    if (response.status === 201) {
      navigate("/login");
    } else {
      alert("Something Wrong");
    }
  }

  return (
    <main className="flex flex-col items-center text-center h-screen font-source-code-pro bg-black">
      <a href="/" className="font-bold text-7xl mt-9 text-yellow-500 pt-0">
        Ho<span className="text-orange-600">me</span>
      </a>
      <form
        id="form"
        className="flex flex-col items-center justify-center rounded shadow-lg p-8 mt-5"
        onSubmit={SendData}
      >
        <div className="flex flex-row">
          <div className="flex flex-col">
            <label
              className="font-semibold text-yellow-500"
              htmlFor="usernameField"
            >
              Username
            </label>
            <input
              required
              className="h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col ml-7">
            <label
              className="font-semibold text-yellow-500"
              htmlFor="usernameField"
            >
              Email
            </label>
            <input
              required
              className="h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <label
              className="font-semibold mt-3 text-yellow-500"
              htmlFor="passwordField"
            >
              Password
            </label>
            <input
              required
              className="h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
              type="password"
              name="userpassword"
              value={userpassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col ml-7">
            <label
              className="font-semibold mt-3 text-yellow-500"
              htmlFor="passwordField"
            >
              Confirm Password
            </label>
            <input
              required
              className="h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
              type="password"
              name="confirmpassword"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
          </div>
        </div>
        <button className="h-12 px-6 w-64 text-black bg-yellow-500 mt-8 rounded font-semibold  hover:text-orange-600 duration-300">
          Register
        </button>
        <a
          className="h-12 px-6 w-64 pt-3 text-black bg-orange-600 mt-4 rounded font-semibold hover:text-yellow-500 duration-300"
          href="/login"
        >
          Login
        </a>
      </form>
    </main>
  );
}
