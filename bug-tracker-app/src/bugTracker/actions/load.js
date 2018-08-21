function getBugsSync(){
    return [
        {id:1,name:"Application is not responding",isClosed:false,"createdAt":"2018-08-08T10:01:44.781Z"},
        {id:2,name:"Server communication failure",isClosed:false,"createdAt":"2018-08-08T11:20:45.612Z"}
    ]
}

export function load(){
    let bugs = getBugsSync();
    let loadAction = { type : 'LOADED', payload : bugs};
    return loadAction;
}