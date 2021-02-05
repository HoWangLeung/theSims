const initState = {
    productSoldStat : []
}

const StatisticReducer = (state = initState, action) => {

    switch (action.type) {

        case ("GET_STAT_SOLD_BY_MONTH_SUCCESS"):

                
            return {
                ...state,
                productSoldStat: action.payload.detail
            };
    




        default:
            return state;




    }

}

export default StatisticReducer