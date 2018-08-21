import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

var spinnerActionCreators = {
    increment(){
        var action = { type : 'INCREMENT'};
        return action;
    },
    decrement(){
        var action = { type : 'DECREMENT'};
        return action;
    }
}

let Spinner = ({ spinnerValue, increment, decrement }) => (
    <div>
        <input type="button" value="Decrement" onClick={decrement}/>
        <span> [ {spinnerValue} ] </span>
        <input type="button" value="Increment" onClick={increment}/>
    </div>
);
/*
function mapStateToSpinnerProps(storeState){
    let spinnerValue = storeState.spinnerData;
    return { spinnerValue : spinnerValue };
}

function mapDispatchToSpinnerProps(dispatch){
    let spinnerActions = bindActionCreators(spinnerActionCreators, dispatch);
    return spinnerActions;
}

export default connect(
    mapStateToSpinnerProps,
    mapDispatchToSpinnerProps
)(Spinner);
*/

export default connect(
    storeState => ({spinnerValue : storeState.spinnerData}),
    dispatch => bindActionCreators(spinnerActionCreators, dispatch)
)(Spinner);