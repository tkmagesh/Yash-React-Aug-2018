import React, { Component } from 'react';

class BugItem extends Component{
    onBugNameClick = () => {
        this.props.toggle(this.props.model);
    }
    render(){
        let { model : bug } = this.props,
            bugStyle = bug.isClosed ? 'bugname closed' : 'bugname';
        return(
            <li>
                <span className={bugStyle} onClick={this.onBugNameClick}>
                    {bug.name}
                </span>
                <div className="datetime">[created at]</div>
            </li>
        )
    }
}
export default BugItem;