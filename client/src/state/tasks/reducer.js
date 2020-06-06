
const initialState = null;

const tasksReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_ALL_TASKS':
        case 'GET_ALL_TASKS_SUCCESS':
        case 'GET_ALL_TASKS_FAIL':
            return({
                ...state,
                ...action.data ? action.data.tasks : action.data,
            });
        default: return state;
    }
}

export default tasksReducer;