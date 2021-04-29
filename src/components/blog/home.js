import React, { useState } from "react";
import { useSelector } from "react-redux";
import Blog from './addBlog';
import { Redirect } from "react-router-dom";

const Home=()=>{
    const auth = useSelector((state) => state.auth);
    
    return(
        <>
        {auth._id ? (
          <>
           <Blog />
          </>
        ) : (
          <>
           <Blog />
          </>
        )}
      </>
    )
}

export default Home;