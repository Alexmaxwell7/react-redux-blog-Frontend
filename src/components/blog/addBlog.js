import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";


const Blog=()=>{
    const auth= useSelector((state) => state.auth);
    if(localStorage.getItem('token') === null) return <Redirect to= '/login' />
    return(
        <>
        <h1>Blog Post</h1>
        </>
    )
}

export default Blog;