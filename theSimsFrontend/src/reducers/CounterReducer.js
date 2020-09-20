const initState = {
   count:20
}

const CounterReducer = (state = initState, action) => {
    
    switch (action.type) {
        case('INCREMENT_ASYNC'):
        
        return({count:state.count+=1})

        case('DECREMENT_ASYNC'):
        
        return({count:state.count-=1})

            
        default:
            return state;




}

}

export default CounterReducer