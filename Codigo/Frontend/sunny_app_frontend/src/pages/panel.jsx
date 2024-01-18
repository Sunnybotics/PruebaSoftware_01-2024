import { React, useState } from "react";
import { useEffect } from "react";
import { NavBar } from "../components/navbar";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export function Panel(){

    const [posts, usePosts] = useState([])
    const [users, useUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://127.0.0.1:8000/posts/')
        .then(response => response.json())
        .then(data => usePosts(data))
        
    }, [])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/user-info/')
        .then(response => response.json())
        .then(data => useUsers(data))
        
    }, [])

    useEffect(() => {
        const token = localStorage.getItem("user_token");
    
        if (!token) {
          navigate("/login");
        }
      }, [])

  
        return (
            <>
            <header>
                <NavBar to1={"/"} title1={"Logout"} action={()=>(localStorage.removeItem("user_token"))} to2={"/posts/create"} title2={"CreatePost"} to3={"/user"} title3={localStorage.getItem("user_token") ? jwtDecode(localStorage.getItem("user_token")).username : ""}/>
            </header>
            
            <main className="font-source-code-pro flex justify-between bg-orange-100 h-screen">
            <aside className="text-center bg-purple-500 w-60">
                    <h1 className="font-bold text-white">Most liked posts</h1>
                    {posts.map(function(post){
                        return(
                            <section className="bg-purple-200 mt-3 mx-3 rounded-lg hover:bg-purple-50 duration-100">
                                <p className="font-bold">{post.title}</p>
                            </section>
                        )
                    })}
                </aside>
                <section className="flex flex-col items-center">
                    {[...posts].reverse().map(function(post){
                        return(
                            <section className="bg-white rounded-lg shadow-lg text-center w-96 mt-7 hover:shadow-sm duration-300">
                                <h1 className="font-bold">{post.title}</h1>
                                <p>{post.content}</p>
                                <div className="flex flex-row justify-between font-bold text-xs">
                                    <p className="bg-gray-100 w-16 rounded-lg">{post.technology}</p>
                                    <p className="bg-gray-100 w-28 rounded-lg">{post.user}</p>
                                </div>
                            </section>
                        );
                    })}
                </section>
                <aside className="text-center bg-purple-500 w-60">
                    <h1 className="font-bold text-white">Meet devs</h1>
                    
                    {users.map(function(user){
                        return(
                            <section className="bg-purple-200 mt-3 mx-3 rounded-lg hover:bg-purple-50 duration-100">
                                <p className="font-bold"> <span>UserName:</span> {user.username}</p>
                                <p> <span>Country:</span> {user.country}</p>
                                <p> <span>Email:</span> {user.email}</p>
                            </section>
                        )
                    })}
                </aside>
            </main>
        </>
        )
                

}