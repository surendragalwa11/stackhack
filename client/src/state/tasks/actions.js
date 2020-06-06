import {
    GET_ALL_TASKS,
    GET_ALL_TASKS_FAIL,
    GET_ALL_TASKS_SUCCESS
} from './constants';


export const getAllTasks = () => ({
    type: GET_ALL_TASKS,
    data: null
});

export const getAllTasksSuccess = (data) => ({
    type: GET_ALL_TASKS_SUCCESS,
    data
});

export const getAllTasksFail = (error) => ({
    type: GET_ALL_TASKS_FAIL,
    data: [],
    error,
});