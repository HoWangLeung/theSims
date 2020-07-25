import { returnMessage } from "../Common/utilities/helpers";
import intl from 'react-intl-universal';
const initState = {
    employeeList: [],
    loading: false,
   
}

const EmployeeReducer = (state = initState, action) => {
    

    switch (action.type) {
        case ("FETCH_EMPLOYEE"):
            return {
                ...state,
                loading: true
            };


        case ('FETCH_EMPLOYEE_SUCCESS'):
            

            return {
                ...state,
                employeeList: action.payload.detail,
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
               cancelButtonProps:{disabled:true}
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



        default:
            return state;
    }

}

export default EmployeeReducer