import axios from "axios";
import React, { Component, useState } from "react";
 import './addPost.css'
function AddPost() {
  //créer une variable de state contenant un post
  const [post,setPost]=useState({"id":0,"title":'',"author":''})
  const [message,setMessage]=useState();
  const [errerstyle,setErreurstyle]=useState({"background":"#000","color":"#fff"})
 
  //récupérer les valeurs du input puis les enregistrées dans
  //la variable du state post
  const getValue=(e)=>{
    setPost(prevPost=>({
      ...prevPost,
      [e.target.name]:e.target.value
    }))
  }

  //envoyer les données aux serveurs backend
  const add=()=>{
//vérifier si tout les champs sont remplis
if(post.id!='' && post.title!='' && post.author!='')
{

  axios.post("http://localhost:3004/posts",post).then((res)=>{
   
   if(res.status==201)
   {
    setMessage("bien ajouter")
    setErreurstyle({"background":"#000","color":"#fff"})

   }
   else
   {
    setMessage("Erreur du BackEnd")
    setErreurstyle({"background":"red","color":"#fff"})
   }
})
}
else
{
  setMessage('Erreur tout les champs sont obligatoires')
  setErreurstyle({"background":"red","color":"#fff"})

}

  }
    return(

     <div><fieldset>
      <legend>Add new Post</legend>
      <table className="table">
        <tr>
          <td>Id</td>
          <td><input type="number" name="id"  onChange={getValue} /></td>
        </tr>
        <tr>
          <td>Title</td>
          <td><input type="text"  name="title" onChange={getValue} /></td>
        </tr>
        <tr>
          <td>Author</td>
          <td><input type="text"  name="author"  onChange={getValue}/></td>
        </tr>
        <tr>
          <td></td>
          <td><input type="button" onClick={add} value="Save" /></td>
        </tr>
      </table>
     <span style={errerstyle}> {message}</span>
      </fieldset></div>
     
     );
 
}

export default AddPost;