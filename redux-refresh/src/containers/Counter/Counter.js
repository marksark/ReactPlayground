import * as actionTypes from '../../store/actions';

import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.incrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.decremenetCounter}  />
                <CounterControl label="Add 10" clicked={this.props.addCounter}  />
                <CounterControl label="Subtract 10" clicked={this.props.subtractCounter}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Adding Value</button>
                <ul>
                    {this.props.storedResults.map(each => (
                        <li key={each.id} onClick={() => this.props.deleteResult(each.id)}>{each.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter.counter,
        storedResults: state.result.result
    };
}

const mapDispatchToProps = dispatch => {
    return {
        incrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        decremenetCounter: () => dispatch({type: actionTypes.DECREMENT}),
        addCounter: () => dispatch({type: actionTypes.ADD, val: 3}),
        subtractCounter: () => dispatch({type: actionTypes.SUBTRACT, val: 3}),
        onStoreResult: (result) => dispatch({type:actionTypes.STORE_RESULT, result: result}),
        deleteResult: (id) => dispatch({type:actionTypes.DELETE_RESULT, resultID: id})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);