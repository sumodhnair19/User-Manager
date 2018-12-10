import { CONTENT_STATS } from '../Actions/Global';

export default (state = null, action) => {
        let data = {};
    switch (action.type) {
        case CONTENT_STATS:
        data = action.payload ? action.payload : {};
        return data;
        default:
            return state;
    }
};
