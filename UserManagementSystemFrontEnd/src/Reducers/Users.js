import { FETCH_USERS, MORE_USERS, SEARCH_USER, FETCH_GROUP_USERS } from '../Actions/List';

export default (state = [], action) => {
      let data = {};
    switch (action.type) {
        case FETCH_USERS:
        data = action.payload.data ? action.payload.data : action.payload.code;
        return data;
        case MORE_USERS:
            return state.concat(action.payload.data);
        case SEARCH_USER:
        data = action.payload.data ? action.payload.data : action.payload.code;
        return data;
        case FETCH_GROUP_USERS:
        data = action.payload.data ? action.payload.data : action.payload.code;
        return data;
        default:
            return state;
    }
};
