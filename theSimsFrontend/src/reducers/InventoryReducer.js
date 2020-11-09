const initState = {
    loading: false,
    inventoryList: [],
    previewList: [],
    showModal: true,
    showUpdateSuccess: false,
    currentStep: 0,
    createProductList:[]
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
            console.log(action.payload);
            let createProductList = action.payload.createProduct
            createProductList.map(p=>p['productCategory']= action.payload.productCategory)
            console.log(createProductList);
           
            return {
                ...state,
                currentStep: state.currentStep + 1,
                createProductList
            }
        case ("PREV"):
            return {
                ...state,
                currentStep: state.currentStep -1
            }
        case ("CREATE_PRODUCT_REQUEST"):
            console.log('sdfcr');
            return{
                ...state
            }

        default:
            return state;
    }



}

export default InventoryReducer