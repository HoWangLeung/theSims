import axios from 'axios'
import { API } from '../../../ApiConfig';
import { url } from '../../../apiConstant';
import CommonModal from '../../../Common/ConfirmModal/CommonModal';

const sleep = m => new Promise(r => setTimeout(r, m))

export const createProduct = (createProductList) => {

    return async (dispatch, getState) => {
        
        
       let payload = []
       createProductList.forEach(field=>payload.push({
        productName: field.productName,
        countryOrigin: field.countryOrigin,
        cost: field.cost,
        basePrice: field.basePrice,
        remaining: field.remaining,
        category: {
            name: field.productCategory
        }

       }))

       
    
        try {
            
            dispatch({ type: 'CREATE_PRODUCT_REQUEST' })
            await sleep(1000)
            let response = await axios.post(`${API}/inventory/add/`, payload)
            
             dispatch({ type: 'CREATE_PRODUCT_SUCCESS', payload: response.data })
             return response
        } catch (err) {

        }

    }
}

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

export const nextPage = (values,channel) => {
    return (dispatch, getState) => {
        
        
        dispatch({ type: 'NEXT', payload: {values,channel} })
    }

}

export const prevPage = () => {
    return (dispatch, getState) => {

        dispatch({ type: 'PREV', payload: {} })
    }

}