export function addNew(newBugName){
    let newBug = {
        name : newBugName,
        isClosed : false
    };
    let addNewAction = { type : 'ADD_NEW', payload : newBug };
    return addNewAction;
}

//export default addNew;