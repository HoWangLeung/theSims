import axios from 'axios'
import { API } from '../../../ApiConfig';
import { url } from '../../../apiConstant';
import CommonModal from '../../../Common/ConfirmModal/CommonModal';

const sleep = m => new Promise(r => setTimeout(r, m))

export const fetchInventory =  () => {
    
    return async(dispatch, getState) => {
        
        try {
            dispatch({ type: 'FETCH_START' })
            await sleep(1000)
            let res = await axios.get(`${API}/inventory/`)
            dispatch({ type: 'FETCH_INVENTORY_SUCCESS', payload: res.data })
            return res
        } catch (err) {
            
        }


    }
}

export const savePreviewList = (updatedPreviewList) => {
    return (dispatch, getState) => {
        dispatch({ type: 'SAVE_INVENTORY', payload: updatedPreviewList })
    }

}

export const saveUpdatedList = (updatedPreviewList) => {

    return async (dispatch, getState) => {

        try {
            dispatch({ type: 'SAVE_UPDATEDLIST', payload: updatedPreviewList })
            await sleep(1000)
            let res = await axios.put(`${API}/inventory/updateProducts`, updatedPreviewList)
            dispatch({ type: 'SAVE_UPDATEDLIST_SUCCESS', payload: res.data })
            return res
        } catch (err) {
            
        }





    }


}
