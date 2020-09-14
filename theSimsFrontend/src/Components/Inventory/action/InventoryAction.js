import axios from 'axios'
import { url } from '../../../apiConstant';


export const fetchInventory= () => {


    console.log('sdfsfsdfsfdsdfdsf');
    return (dispatch, getState) => {
        console.log('sdfsfsdfsfdsdfdsf222222');
        dispatch({ type: 'FETCH_INVENTORY' })
        setTimeout(() => {
            axios.get(`${url}/inventory/`)
                .then(res => {
                    console.log(res.data);
                    dispatch({ type: 'FETCH_INVENTORY_SUCCESS', payload: res.data })
                })
                .catch(error => {
                    console.log(error);
                })
        }, 1000);

    }
}

export const savePreviewList= (updatedPreviewList) => {
    return (dispatch, getState) => {    
        dispatch({ type: 'SAVE_INVENTORY' ,payload: updatedPreviewList})
    }

}

export const saveUpdatedList= (updatedPreviewList) => {
    console.log(updatedPreviewList);
    return (dispatch, getState) => {    
        dispatch({ type: 'SAVE_UPDATEDLIST' ,payload: updatedPreviewList})
        setTimeout(() => {
            axios.put(`${url}/inventory/updateProducts`,updatedPreviewList)
                .then(res => {
                    console.log(res.data);
                    dispatch({ type: 'SAVE_UPDATEDLIST_SUCCESS', payload: res.data })
                })
                .catch(error => {
                    console.log(error);
                })
        }, 1000);
    }

}