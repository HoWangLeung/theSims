import axios from 'axios'
import { API } from '../../../ApiConfig';
import { url } from '../../../apiConstant';
import CommonModal from '../../../Common/ConfirmModal/CommonModal';

const sleep = m => new Promise(r => setTimeout(r, m))

export const fetchInventory = () => {

    return async (dispatch, getState) => {

        try {
            dispatch({ type: 'FETCH_INVENTORY_REQUEST' })
            await sleep(1000)
            let response = await axios.get(`${API}/inventory/`)
            dispatch({ type: 'FETCH_INVENTORY_SUCCESS', payload: response.data })
            return response
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
            dispatch({ type: 'SAVE_UPDATEDLIST_REQUEST', payload: updatedPreviewList })
            await sleep(1000)
            let res = await axios.put(`${API}/inventory/updateProducts`, updatedPreviewList)
            dispatch({ type: 'SAVE_UPDATEDLIST_SUCCESS', payload: res.data })
            return res
        } catch (err) {
        }
    }
}

export const nextPage = (values) => {
    return (dispatch, getState) => {
   
        dispatch({ type: 'NEXT', payload: values })
    }

}

export const prevPage = () => {
    return (dispatch, getState) => {
   
        dispatch({ type: 'PREV', payload: {} })
    }

}