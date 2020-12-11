import _ from 'lodash';

const initState = {
    isLoading: false,
    productInfo: {},
    cartList: [],
    specificProduct: {}
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
                productInfo: action.payload.detail
            };

        case ("FETCH_PRODUCTSINCART_SUCCESS"):



            return {
                ...state,
                cartList: action.payload.status === "pending" ? action.payload : {}
            }


        case ("FETCH_ONE_PRODUCT_SUCCESS"):


            return {
                ...state,
                specificProduct: action.payload.detail

            }
        case ("ADD_TO_CART_SUCCESS"):


            return {
                ...state,
                cartList: action.payload

            }



        case ("DELETE_PRODUCT_CART_SUCCESS"):

            if (action.payload.data && action.payload.data === "" && action.payload.status === 200) {

                return {
                    ...state,
                    cartList: []
                }
            } else {



                return {
                    ...state,
                    cartList: action.payload.data
                }
            }


        case ("SEARCH_PRODUCT"):
            let searchKeyword = action.payload.values

            const listAfterSearch = state.productInfo.productList.filter(e => {
                let item = e.productName.replace(/\s/g, '').toLowerCase()

                return item.includes(searchKeyword.replace(/\s/g, '').toLowerCase())
            })


            return {
                ...state,
                productInfo: {

                    productList: listAfterSearch
                }

            }

        case ("FILTER_PRODUCT_PRICE"):

            let searchRange = action.payload.value

            const listAfterFilter = state.productInfo.productList.filter(e => {

                return (e.basePrice >= searchRange[0] && e.basePrice <= searchRange[1])
            })


            return {
                ...state,
                productInfo: {
                    ...state.productInfo,
                    productList: listAfterFilter
                }
            }
        case ("FETCH_PRODUCTS_CATEOGRY"):
            let searchCategory = action.payload.value
            const listAfterFilterByCategory = state.productInfo.productList.filter(e => {
                return e.category.name === searchCategory
            })



            return {
                ...state,
                productInfo: {
                    ...state.productInfo,
                    productList: listAfterFilterByCategory
                }

            }

        case ("CHANGE_ORDER_STATUS_SUCCESS"):


            return {
                ...state


            }
        case ("FETCH_PHOTO_UNSPLASH_SUCCESS"):


            return {
                ...state


            }







        default:
            return state;
    }



}

export default ProductReducer