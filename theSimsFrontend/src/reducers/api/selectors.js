import _ from 'lodash';
export const createLoadingSelector = (actions) => (state) => {
  
  
  

  var wrapped = _(actions)
  

  let result = actions.some(action => {
    
    return state.LoadingReducer[action]
  })
  
  // returns true only when all actions is not loading
  return result;
};
