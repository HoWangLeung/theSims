const initState = {
    loading: false,
    inventoryList: [],
    previewList: [],
    showModal: true,
    showUpdateSuccess: false,
    currentStep: 0
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
            return {
                ...state,
                currentStep: state.currentStep + 1
            }
        case ("PREV"):
            return {
                ...state,
                currentStep: state.currentStep -1
            }

        default:
            return state;
    }



}

export default InventoryReducer