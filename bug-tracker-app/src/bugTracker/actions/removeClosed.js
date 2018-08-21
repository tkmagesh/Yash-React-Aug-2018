import { remove } from '../services/bugApi';

export function removeClosed(){
    return function(dispatch, getState){
        let bugs = getState().bugsData;
        let closedBugs = bugs.filter(bug => bug.isClosed);
        closedBugs.forEach(closedBug => {
            remove(closedBug)
                .then(() => {
                    let removeAction = { type : 'REMOVE', payload : closedBug };
                    dispatch(removeAction);
                })
        })
    }
}
//export default removeClosed;