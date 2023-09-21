/* eslint-disable react/prop-types */

import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
let price=0;
let remainHour=20;
 bookmarks.forEach(item => {
    price=price+ item.price;
    remainHour=remainHour-item.credit_hour;    
 });
 if(remainHour<0){
    return alert("crdit hour exceds");
 }
 else

    return (
        <div className="md:w-1/3">
            <h2>Remaining hour:{remainHour}</h2>
            {
                bookmarks.map((bookmark, idx)=> <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            <h2>Course Fee:{price}</h2>
        </div>
    );
};

export default Bookmarks;