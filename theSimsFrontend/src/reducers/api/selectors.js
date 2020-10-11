import _ from 'lodash';
export const createLoadingSelector = (actions) => (state) => {
  console.log('in createdloading seclteor .js');
  console.log(actions);
  console.log(state);

  var wrapped = _(actions)
  console.log(wrapped);

  let result = actions.some(action => {
    console.log(action);
    return state.LoadingReducer[action]
  })
  console.log(result);
  // returns true only when all actions is not loading
  return result;
};
