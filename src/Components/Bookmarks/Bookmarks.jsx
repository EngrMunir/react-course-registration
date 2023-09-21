/* eslint-disable react/prop-types */

import { useState } from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
let price=0;
let remainHour=20;
let totalHour=0;
const {selected, setSelected}=useState({})
 bookmarks.forEach(item => {
    if(selected.id!=item.id){
        setSelected(item);
    }
    price=price+ item.price;
    remainHour=remainHour-item.credit_hour;
    totalHour=totalHour+item.credit_hour;    
 });
 if(remainHour<0){
    return alert("crdit hour exceds");
 }
 else

    return (
        <div className="md:w-1/3">
            <h2>Remaining hour:{remainHour}hr</h2>
            {
                bookmarks.map((bookmark, idx)=> <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            <hr />
            <h2>Total Credit Hour:{totalHour}hr</h2>
            <hr/>
            <h2>Total Price:{price}</h2>
        </div>
    );
};

export default Bookmarks;