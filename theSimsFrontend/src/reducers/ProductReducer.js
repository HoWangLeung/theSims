const initState = {
    isLoading: false,
    productList:[],
    cartList:[],
  
}


const ProductReducer = (state = initState, action) => {
   
    
 
    switch (action.type) {
    
        case ("FETCH_PRODUCTS_START"):
           
            return {
                ...state,
                isLoading: true
            };
        case("FETCH_PRODUCTS_SUCCESS"):
  
        return {
            ...state,
            isLoading: false,
            productList:action.payload.detail 
        };

        case("FETCH_PRODUCTSINCART_SUCCESS"):
        console.log(action.payload);
        return{
            ...state,
            cartList:action.payload.detail
        }
        



           
        default:
            return state;
    }



}

export default ProductReducer