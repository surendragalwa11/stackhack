import {TASK_API} from '../../config/api-urls';

import {getUser} from '../user/storage';


const fetchAllTask = (action, successAction, failureAction) => {
    return function(dispatch){
        dispatch(action());
        return new Promise((resolve, reject) => {
            fetch(TASK_API)
            .then((res) => res.json())
            .then(result => {
                dispatch(successAction(result));
                resolve(true)
            })
            .catch(error => {
                dispatch(failureAction(error))
                reject(error)
            })
        })
    }
}

export default fetchAllTask;