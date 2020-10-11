

const initState={
    SAVE_UPDATEDLIST:false
}
const LoadingReducer = (state = initState, action) => {
    console.log(action);
    console.log('hello loading reducer');
    const { type } = action;
    console.log(type);
    const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

    if (!matches) return state;

    const [, requestName, requestState] = matches;
    console.log(requestState === 'REQUEST');
    return {
        ...state,
        [requestName]: requestState === 'REQUEST',
    };
};

export default LoadingReducer