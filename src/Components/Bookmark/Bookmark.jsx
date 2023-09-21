/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Bookmark = ({bookmark}) => {
        
    return (
            <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h2>{bookmark.course_name}</h2>
        </div>
    );
};

export default Bookmark;