import _ from 'lodash';

const initState = {
    isLoading: false,
    productList: [],
    cartList: [],
    specificProduct:{}
}


const ProductReducer = (state = initState, action) => {



    switch (action.type) {

        case ("FETCH_PRODUCTS_REQUEST"):

            return {
                ...state,
                isLoading: true
            };
        case ("FETCH_PRODUCTS_SUCCESS"):

            return {
                ...state,
                isLoading: false,
                productList: action.payload.detail
            };

        case ("FETCH_PRODUCTSINCART_SUCCESS"):
            console.log(action.payload);
            return {
                ...state,
                cartList: action.payload
            }
  

        case("FETCH_ONE_PRODUCT_SUCCESS"):


        return {  
            ...state,
            specificProduct:action.payload.detail

        }





        default:
            return state;
    }



}

export default ProductReducer