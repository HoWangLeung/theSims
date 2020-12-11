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
        productUrl:field.productUrl[0].xhr,
        category: {
            name: field.productCategory
        }

       }))

       
    
        try {
            
            dispatch({ type: 'CREATE_PRODUCT_REQUEST' })
           
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

export const saveUpdatedList = (payload) => {

    return async (dispatch, getState) => {

      
        try {
            dispatch({ type: 'SAVE_UPDATEDLIST_REQUEST', payload })
            
            let res = await axios.put(`${API}/inventory/updateProducts`, payload)
      
            dispatch({ type: 'SAVE_UPDATEDLIST_SUCCESS', payload:res.data })
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

export const resetCurrentStep = () => {
    return (dispatch, getState) => {

        dispatch({ type: 'RESET_MODAL_STEP', payload: {} })
    }

}


export const fetchCategoryInfo = () => {
    return async (dispatch, getState) => {
        dispatch({ type: 'FETCH_ALL_CATEGORY_REQUEST'})
        let res = await axios.get(`${API}/category/`)
        
        dispatch({ type: 'FETCH_ALL_CATEGORY_SUCCESS', payload:res.data })
        return res

    }

}
export const addTempItemToCategoryInfo = payload => {
    return  (dispatch, getState) => {
        dispatch({ type: 'ADD_TEMP_TO_CATEOGRY_INFO',payload})


    }

}

export const setUploadedProductUrl = (url) => {
    return  (dispatch, getState) => {
        dispatch({ type: 'SET_UPLOADED_PRODUCT_URL',payload: url} )


    }

}


