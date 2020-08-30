const initState = {
    loading: false,
    inventoryList:[],
    previewList:[]
    
}


const InventoryReducer = (state = initState, action) => {
   
    console.log('reach here 6', action);
 
    switch (action.type) {
        case ("FETCH_INVENTORY"):
            return {
                ...state,
                loading: true
            };
        case("FETCH_INVENTORY_SUCCESS"):
        console.log('line 19 ');
        console.log(action.payload);
            return{
                ...state,
                loading:false,
                inventoryList:action.payload.detail
            }

        case("SAVE_INVENTORY"):
        return{
            ...state,
            previewList:action.payload
        }
           
        default:
            return state;
    }
}

export default InventoryReducer