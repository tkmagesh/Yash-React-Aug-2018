import { save } from '../services/bugApi'

export function toggle(bugToToggle){
    return function(dispatch){
        let toggledBugData = {...bugToToggle, isClosed : !bugToToggle.isClosed};
        save(toggledBugData)
            .then(toggledBug => {
                let updateAction = { type : 'UPDATE', payload :toggledBug };
                dispatch(updateAction);
            })
    }
}
//export default toggle;