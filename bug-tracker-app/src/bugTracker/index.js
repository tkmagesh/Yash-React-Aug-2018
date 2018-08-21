import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as bugActionCreators from './actions';

import BugStats from './views/bugStats';
import BugSort from './views/bugSort';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';


class BugTracker extends Component{
    componentDidMount(){
        this.props.load();
    }
    render(){
        let { bugs, addNew, toggle, removeClosed } = this.props;
        return(
            <div>
                <BugStats bugs={bugs} />
                <BugSort />
                <BugEdit addNew={addNew} />
                <BugList {...{bugs, toggle, removeClosed}} />
            </div>
        )
    }
}

function mapStateToBugTrackerProps(storeState){
    let bugs = storeState.bugsData;
    return { bugs : bugs };
}

function mapDispatchToBugTrackerProps(dispatch){
    let bugActions = bindActionCreators(bugActionCreators, dispatch);
    return bugActions;
}

export default connect(
    mapStateToBugTrackerProps,
    mapDispatchToBugTrackerProps
)(BugTracker);