import React from "react";
import axios from "axios";

const defaultURL = 'https://jsonplaceholder.typicode.com/'
export async function API(URL) {
    try {
        const { data } = await axios.get(defaultURL + URL)
        console.log(data);
        return data;        
    } catch (error) {
        alert(error.message)
    }
}

export async function APIDelete(URL) {
    try {
        const { status } = await axios.delete(defaultURL + URL)
        return status
    } catch (error) {
        alert(error)
    }
}