import * as actionTypes from '../actions';
const initialState = {
    result: []
}

const resultReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                result: state.result.concat({value: action.result, id: Math.random()})
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

export default resultReducer;