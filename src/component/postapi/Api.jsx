import axios from "axios";

// URL du backend JSON Server
const API_URL = "http://localhost:3004/posts";

// récupérer tous les posts
export const getPosts = () => {
  return axios.get(API_URL);
};

// ajouter un post
export const addPost = (post) => {
  return axios.post(API_URL, post);
};

// supprimer un post
export const deletePost = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

// modifier un post
export const updatePost = (id, post) => {
  return axios.put(`${API_URL}/${id}`, post);
};
