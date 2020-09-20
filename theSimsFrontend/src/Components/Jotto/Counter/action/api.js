import axios from 'axios'



export const fetchUser=()=>{
    let response = axios.get(`https://jsonplaceholder.typicode.com/todos`)
    return response
}