import { ADD_GROUP } from '../Actions/Add';
import { DELETE_GROUP, UPDATE_GROUP } from '../Actions/Update';

export default (state = null, action) => {
        let data = {};
    switch (action.type) {
        case ADD_GROUP:
          data = action.payload ? action.payload : {};
          return data;
        case DELETE_GROUP:
        data = action.payload ? action.payload : {};
        return data;
        case UPDATE_GROUP:
        data = action.payload ? action.payload : {};
        return data;
        default:
            return state;
    }
};
