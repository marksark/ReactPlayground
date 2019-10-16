import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';
class Counter extends Component {

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        // console.log(this.props)
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