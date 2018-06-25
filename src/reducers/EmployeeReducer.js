import {
    EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INTIAL_STATE = {};

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
};
