import { returnMessage } from "../Common/utilities/helpers";
import intl from 'react-intl-universal';
import { isArray } from "lodash";
const initState = {
    employeeList: [],
    managementList: [],
    loading: false,
    currentDept: null,
    vacancyList: []

}

const EmployeeReducer = (state = initState, action) => {


    switch (action.type) {
        case ("FETCH_EMPLOYEE"):
            return {
                ...state,
                loading: true
            };


        case ('FETCH_EMPLOYEE_SUCCESS'):


            const managementList = action.payload.detail.filter(employee => employee.management === true)
            return {
                ...state,
                employeeList: action.payload.detail,
                managementList,
                loading: false
            }

        case ('FETCH_EMPLOYEE_FAILURE'):


            return {
                ...state,
            }

        //==================================================================================================================================================================

        //==================================================================================================================================================================

        case ("DELETE_EMPLOYEE"):


            action.payload.modal.update({
                title: intl.get('processing'),
                content: '',
                okButtonProps: { loading: true },
                cancelButtonProps: { disabled: true }
            });

            return {
                ...state,
                // loading: true
            };

        case ("DELETE_EMPLOYEE_SUCCESS"):
            let deletedId = parseInt(action.payload.id)
            let newEmployeeList = state.employeeList.filter(emmployee => emmployee.id !== deletedId)
            // returnMessage('successfully deleted')

            return {
                ...state,
                employeeList: newEmployeeList,
                // loading: false
            };
        case ("DELETE_EMPLOYEE_FAILURE"):
            return {
                ...state
            };
        //==================================================================================================================================================================

        //==================================================================================================================================================================
        case ("SEARCH_EMPLOYEE"):

            return {
                ...state,
                loading: true
            }
        case ("SEARCH_EMPLOYEE_SUCCESS"):



            return {
                ...state,
                employeeList: action.payload,
                loading: false
            }

        //==================================================================================================================================================================

        //==================================================================================================================================================================
        case ("SEARCH_DEPARTMENT_REQUEST"):


            return {
                ...state,
                loading: true,
                currentDept: action.payload.department
            }

        case ("SEARCH_DEPARTMENT_SUCCESS"):


            return {
                ...state,
                employeeList: action.payload,
                loading: false,
                currentDept: action.payload[0] ? action.payload[0].department.name : null
            }

        case ("FETCH_VACANCY_SUCCESS"):
            console.log(action.payload.data.detail);
            return {
                ...state,
                vacancyList: action.payload.data.detail
            }

        default:
            return state;
    }

}


export default EmployeeReducer