import * as actionTypes from './store/actions';
const initialState = {
    counter:0,
    result: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter+1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter-1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter+action.val
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter-action.val
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                result: state.result.concat({value: state.counter, id: Math.random()})
            }
        case actionTypes.DELETE_RESULT:
            const newArr = state.result.filter(result => result.id !== action.resultID);
            return {
                ...state,
                result: newArr
            }
    }   
    return state;
}

export default reducer;