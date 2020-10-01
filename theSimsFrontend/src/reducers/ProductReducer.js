const initState = {
    isLoading: false,
    productList:[]
  
}


const ProductReducer = (state = initState, action) => {
   
    
 
    switch (action.type) {
    
        case ("FETCH_PRODUCTS_START"):
           
            return {
                ...state,
                isLoading: true
            };
        case("FETCH_PRODUCTS_SUCCESS"):
        console.log(action);
        return {
            ...state,
            isLoading: false,
            productList:action.payload.detail 
        };
        



           
        default:
            return state;
    }



}

export default ProductReducer