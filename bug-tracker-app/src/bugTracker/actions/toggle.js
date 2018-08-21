export function toggle(bugToToggle){
    let toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
    let updateAction = { type : 'UPDATE', payload : {oldBug : bugToToggle, newBug : toggledBug}};
    return updateAction;
}
//export default toggle;