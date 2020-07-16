
import axios from 'axios'

export const fetchEmployee = () => {

    //return a function if use thunk
    return (dispatch,getState)=>{
        // dispatch({ type: 'FETCH_EMPLOYEE',})
        axios.get('http://localhost:8080/employee/')
        .then(res=>{
            console.log(res.data);
            dispatch({ type: 'FETCH_EMPLOYEE', payload:res.data})
        })
        .catch(error=>{
            console.log(error);
        })
   
    }
}