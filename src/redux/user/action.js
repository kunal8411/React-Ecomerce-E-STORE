import {ADD_NEW_USER} from '../../redux/actionTypes';


export const addNewUser = (data) => {
    return{
        type:ADD_NEW_USER,
        payload: {data}
    }
}
    