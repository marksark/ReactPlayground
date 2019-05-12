//SAMPLE OF REDUX IN ES5 - showing it's standalone capabilities...

const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    hello: "world",
    counter: 0,
}

//reducer - only thing that can update state
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

//store
const store = createStore(rootReducer);
console.log(store.getState());


//Subscription
store.subscribe(()=>{
    console.log("[Subscription]", store.getState());
});

//Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
