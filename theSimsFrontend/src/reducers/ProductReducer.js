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
            
            return {
                ...state,
                cartList: action.payload
            }
  

        case("FETCH_ONE_PRODUCT_SUCCESS"):


        return {  
            ...state,
            specificProduct:action.payload.detail

        }

        case("DELETE_PRODUCT_CART_SUCCESS"):
            console.log(action.payload);
            if(action.payload.data && action.payload.data==="" && action.payload.status===200){
                console.log('only one remain');
                return{
                    ...state,
                    cartList:[]
                }
            }else{

                console.log('more then one remains');
                console.log(action.payload.data.orderProductList);
                return {
                    ...state,
                    cartList:action.payload.data
                }
            }
            



        default:
            return state;
    }



}

export default ProductReducer