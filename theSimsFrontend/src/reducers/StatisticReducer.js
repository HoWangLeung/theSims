const initState = {
    productSoldStat : []
}

const StatisticReducer = (state = initState, action) => {

    switch (action.type) {

        case ("GET_STAT_SOLD_BY_MONTH_SUCCESS"):

                console.log(action.payload.detail);
            return {
                ...state,
                productSoldStat: action.payload.detail
            };
    




        default:
            return state;




    }

}

export default StatisticReducer