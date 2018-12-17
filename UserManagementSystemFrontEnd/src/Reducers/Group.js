import { FETCH_GROUP } from '../Actions/Detail';

export default (state = null, action) => {
  let data = {};
    switch (action.type) {
        case FETCH_GROUP:
        data = action.payload ? action.payload : action.payload.code;
        return data;
        default:
            return state;
    }
};
