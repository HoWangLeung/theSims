const initState = {
    loading: false,
    inventoryList: [],
    previewList: [],
    showModal: true,
    showUpdateSuccess: false,
    currentStep: 0,
    createProductList: [],
    categoryInfo: []
}


const InventoryReducer = (state = initState, action) => {



    switch (action.type) {
        case ("FETCH_INVENTORY_SUCCESS"):
            return {
                ...state,
                inventoryList: action.payload.detail
            }
        case ("SAVE_INVENTORY"):

            return {
                ...state,
                previewList: action.payload
            }
        //==============================



        case ("SAVE_UPDATEDLIST_SUCCESS"):
            
            return {
                ...state,
                inventoryList: action.payload.detail,
                showModal: false,

            }

        case ("DISPLAY_SUCCESS"):

            return {
                ...state,
                showUpdateSuccess: true
            }

        case ("NEXT"):


            if (action.payload.channel === "createProduct") {


                let createProductList = action.payload.values.createProduct
                createProductList.map(p => p['productCategory'] = action.payload.values.productCategory)


                return {
                    ...state,
                    currentStep: state.currentStep + 1,
                    createProductList
                }
            } else {
                return {
                    ...state,
                    currentStep: state.currentStep + 1

                }
            }

        case ("PREV"):
            return {
                ...state,
                currentStep: state.currentStep - 1
            }

        case ("RESET_MODAL_STEP"):
            return {
                ...state,
                currentStep: 0
            }
        case ("CREATE_PRODUCT_SUCCESS"):

            return {
                ...state,
                inventoryList: action.payload
            }

        case ("FETCH_ALL_CATEGORY_SUCCESS"):

            return {
                ...state,
                categoryInfo: action.payload
            }

        case ("ADD_TEMP_TO_CATEOGRY_INFO"):
            
            action.payload.temporary = true;
        
            return {
                ...state,
                 categoryInfo:[
                    action.payload,
                    ...state.categoryInfo,
                   
            
                ]
            }



        default:
            return state;
    }



}

export default InventoryReducer