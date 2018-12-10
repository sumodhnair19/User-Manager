import { FETCH_GROUPS, SEARCH_GROUP } from '../Actions/List';

export default (state = [], action) => {
    let data = {};
    switch (action.type) {
        case FETCH_GROUPS:
             data = action.payload.data ? action.payload.data : action.payload.code;
            return data;
        case SEARCH_GROUP:
             data = action.payload.data ? action.payload.data : action.payload.code;
            return data;
        default:
            return state;
    }
};
