import { useState } from "react";
import { useEffect } from "react";
import Blog from "./Blog";

const Blogs = () => {

    const [blogs, setBlogs]= useState([])
    useEffect(()=>{
        fetch('Blogs.json')
        .then( res => res.json())
        .then(data => setBlogs(data))
    })
    return (
        <div className="md:w-2/3  ">
            <h2>Blog {blogs.length}</h2>
            <div className="grid grid-cols-3">
                {
                    blogs.map(blog =><Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;