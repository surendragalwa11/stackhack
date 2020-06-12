import React, {useEffect} from 'react';

import { connect } from 'react-redux';

import fetchAllTask from '../../state/tasks/api';
import {
    getAllTasks,
    getAllTasksSuccess,
    getAllTasksFail
} from '../../state/tasks/actions';

import {useAuth} from '../../context/auth';


import {logout} from '../../state/user/actions';

const HomePage = (props) => {
    useEffect(() => {
        props.getAllTasks();
    }, []);
    const {setAppUser} = useAuth();
    const onLogout = () => {
        props.logout();
        setAppUser(null);
    }

    return(
        <div className='page-container login-page row mx-auto hhvh'>
            <div className='profile-section col-sm-4'>
                Profile
            </div> 
            <div className='profile-section col-sm-4'>
                <button
                    className='logout-btn'
                    onClick={onLogout}
                >
                    Logout
                </button>
            </div> 
        </div>
    );
}

const mapStateToProps = (state) => ({
    tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => ({
    getAllTasks: () => dispatch(fetchAllTask(getAllTasks, getAllTasksSuccess, getAllTasksFail)),
    logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
