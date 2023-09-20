/* eslint-disable react/prop-types */

const Blog = ({blog}) => {
    const {img, course_name, details, credit_hour, price}=blog;
    return (
        <div className="mb-10">
            <img src={img} alt={`the picture of ${blog.id} `} />
            <h2>{course_name}</h2>
            <p><small>{details}</small></p>
            <div className="flex justify-evenly">
                <p>Price:{price}</p>
                <p>Credit:{credit_hour}</p>
            </div>
            <button>Select</button>
        </div>
    );
};

export default Blog;