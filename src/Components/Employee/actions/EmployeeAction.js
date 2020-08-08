
import axios from 'axios'
import AuthenticationService from '../../Authentication/SignUp/AuthenticationService'

export const fetchEmployee = () => {

    //return a function if use thunk
    return (dispatch, getState) => {
        // dispatch({ type: 'FETCH_EMPLOYEE',})

        dispatch({ type: 'FETCH_EMPLOYEE' })
        setTimeout(() => {
            axios.get('http://localhost:8080/employee/')
                .then(res => {
                    console.log(res.data);
                    dispatch({ type: 'FETCH_EMPLOYEE_SUCCESS', payload: res.data })
                })
                .catch(error => {
                    dispatch({ type: 'FETCH_EMPLOYEE_FAILURE', payload: error })
                })
        }, 1200);

    }
}

export const deleteEmployee = (id, res, modal) => {

    return (dispatch, getState) => {

        dispatch({ type: 'DELETE_EMPLOYEE', payload: { modal } })
        setTimeout(() => {
            axios.delete(`http://localhost:8080/employee/delete/${id}`)
                .then(response => {
                    dispatch({
                        type: 'DELETE_EMPLOYEE_SUCCESS',
                        payload: {
                            id: id,
                            data: response.data,
                        }
                    })
                    res()
                })
                .catch(error => {
                    dispatch({ type: 'DELETE_EMPLOYEE_FAILURE' })
                })
        }, 1200);

    };
}

export const searchEmployee = (values, currentDept) => {
    console.log(values, currentDept);

    const params = {}
    if (values.id) { params.id = parseInt(values.id) }
    if (values.employeeName) { params.name = values.employeeName }
    if ((params.name || values.id) && currentDept !== "All") { params.department = currentDept }
    else if (!params.name && !values.id) {
        params.department = currentDept
    } else { params.department = "All" }
    console.log(params);

    return (dispatch, getState) => {
        dispatch({ type: 'SEARCH_EMPLOYEE', payload: { values } })
        setTimeout(() => {
            axios.get(`http://localhost:8080/employee/search`, { params })
                .then(res => {
                    console.log(res);
              
                    if (res.data == null) {
                        dispatch({ type: 'FETCH_EMPLOYEE' })
                        axios.get('http://localhost:8080/employee/')
                            .then(res => {
                                dispatch({ type: 'FETCH_EMPLOYEE_SUCCESS', payload: res.data })
                            })
                            .catch(error => {
                                dispatch({ type: 'FETCH_EMPLOYEE_FAILURE', payload: error })
                            })
                    } else {
                        dispatch({ type: 'SEARCH_EMPLOYEE_SUCCESS', payload: res.data })
                    }

                })
        }, 500);

    }

}

export const searchByDepartment = (value) => {
    console.log(value);
    const params = {}
    if (value) { params.department = value }
    console.log(params);
    return (dispatch, getState) => {
        console.log('reaching return');
        dispatch({ type: 'SEARCH_DEPARTMENT', payload:params })
        setTimeout(() => {
            axios.get(`http://localhost:8080/employee/search`, { params })
                .then(res => {
                    console.log(res.data);
                    dispatch({ type: 'SEARCH_DEPARTMENT_SUCCESS', payload: res.data })
                })
        }, 500);

    }


}

