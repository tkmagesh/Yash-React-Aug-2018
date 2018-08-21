import axios from 'axios';
let baseUrl = 'http://localhost:3030/bugs';

export function getAll(){
   /*
    var p = axios.get('http://localhost:3030/bugs');
    var p2 = p.then(response => response.data);
    return p2;
    */
   return axios
    .get(baseUrl)
    .then(response => response.data)
}

export function save(bugData){
    if (bugData.id === 0){
        return axios
            .post(baseUrl, bugData)
            .then(response => response.data);
    } else {
        return axios
            .put(`${baseUrl}/${bugData.id}`, bugData)
            .then(response => response.data);
    }
}

export function remove(bugData){
    return axios
        .delete(`${baseUrl}/${bugData.id}`)
        .then(response => response.data);
}