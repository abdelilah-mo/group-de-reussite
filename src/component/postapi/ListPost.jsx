import React, { Component, useEffect, useState } from "react";
import axios from "axios";
export default function ListPosts(){
const [listeposts,setListeposts]=useState([{}])
    useEffect(()=>{
axios.get("http://localhost:3004/posts").then((res)=>{
    setListeposts(res.data)
    console.log(listeposts)
})
    },[]);

    return (<div>

        <table className="table">
            <thead>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            </thead>
            <tbody>
                {listeposts.map((post)=>{
                    return (
                        <tr>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.author}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
       

    </div>)
}
