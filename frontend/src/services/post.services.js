import apiUrl from "../assets/constants/endpoints.js";
import fetchData from "../assets/utilities/fetchHttpRequest.js";
import { httpMethods } from "../assets/constants/fethParameters.js";


async function getPosts(params={}) {
    let query = new URLSearchParams(params).toString();
    query = `${apiUrl.crud.posts.findAll}?${query}`;
    return await fetchData(url=query, token=null, method=httpMethods.read, data=null);
};

async function getPostsPaginated(params={}, page=1, size=10) {
    let query = new URLSearchParams(params).toString();
    query = `${apiUrl.crud.posts.findAllInPages}${page}?${query}`;
    return await fetchData(query, null, httpMethods.read, {size: size});
};

async function getPostById(id) {
    return await fetchData(apiUrl.crud.posts.findById+id, null, httpMethods.read, null);
};

async function createPost(data, token) {
    return await fetchData(apiUrl.crud.posts.add, token, httpMethods.create, data);
};

async function updatePost(id, data, token) {
    return await fetchData(apiUrl.crud.posts.updateById+id, token, httpMethods.update, data);
};

async function deletePost(id, token) {
    return await fetchData(apiUrl.crud.posts.removeById+id, token, httpMethods.delete, null);
};


export {getPosts, getPostById, createPost, deletePost};
