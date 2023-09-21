/* eslint-disable react/prop-types */
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleBookmark}) => {
    const {img, course_name, details, credit_hour, price}=blog;
    return (
        <div className="mb-10">
            <img src={img} alt={`the picture of ${blog.id} `} />
            <h2>{course_name}</h2>
            <p><small>{details}</small></p>
            <div className="flex justify-evenly">
                <p>Price:{price}</p>
                <div className='flex gap-2'>
                    <FaBookmark></FaBookmark>
                    <p>Credit:{credit_hour}</p>
                </div>
            </div>
            <button onClick={()=>handleBookmark(blog) } >Select</button>
        </div>
    );
};

export default Blog;