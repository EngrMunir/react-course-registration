import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {

const [bookmarks, setBookmarks]=useState([])

  const handleBookmark=blog=>{
    const newBlog = [...bookmarks,blog];
    setBookmarks(newBlog);
  }

  return (
    <>
      <div className='md:flex ml-5 gap-4'>
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App;
