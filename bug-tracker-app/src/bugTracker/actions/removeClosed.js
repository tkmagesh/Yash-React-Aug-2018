export function removeClosed(bugs){
    let closedBugs = bugs.filter(bug => bug.isClosed);
    let removeAction = { type : 'REMOVE', payload : closedBugs };
    return removeAction;
}
//export default removeClosed;