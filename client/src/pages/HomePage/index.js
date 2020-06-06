import React, {useEffect} from 'react';

import { connect } from 'react-redux';

import fetchAllTask from '../../state/tasks/api';
import {
    getAllTasks,
    getAllTasksSuccess,
    getAllTasksFail
} from '../../state/tasks/actions';

const HomePage = (props) => {
    useEffect(() => {
        props.getAllTasks();
    }, []);
    return(
        <div className='page-container login-page row mx-auto hhvh'>
            <div className='profile-section col-sm-4'>
                Profile
            </div> 
            <div className='profile-section col-sm-4'>
                Todos
            </div> 
        </div>
    );
}

const mapStateToProps = (state) => ({
    tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => ({
    getAllTasks: () => dispatch(fetchAllTask(getAllTasks, getAllTasksSuccess, getAllTasksFail)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
