/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";
import Blog from "./Blog";

const Blogs = ({handleBookmark}) => {

    const [blogs, setBlogs]= useState([])
    
    useEffect(()=>{
        fetch('Blogs.json')
        .then( res => res.json())
        .then(data => setBlogs(data))
    })
    
    
    return (
        <div className="md:w-2/3  ">
            <div className="grid grid-cols-3 gap-2">
                {
                    blogs.map(blog =><Blog handleBookmark={handleBookmark} key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;