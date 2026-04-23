import { httpMethods, contentTypes } from "../constants/fethParameters.js";


export default async function customFetchFile(url="", token=null, method=methods.read, data=null) {
    const headers = {
        "Content-Type": contentTypes.file
    };

    if(token) {
        headers["Authorization"] = `Bearer ${token}`;
    };

    const fetchOptions = {
        method: method,
        headers: headers
    };

    const formData = new FormData();
    if(data) {
        Object.keys(data).forEach(key => formData.append(key, data[key]));
    }
    fetchOptions["body"] = formData;
    
    const request = await fetch(url, fetchOptions);
    const response = await request.blob();

    return response;
};
