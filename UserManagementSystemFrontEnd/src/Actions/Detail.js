// Get group data with group id
import {FETCH_GROUP_API} from '../REST/API';

export const FETCH_GROUP = 'FETCH_GROUP';
export const fetchGroup = (id) => async (dispatch, getState, api) => {
    const res = await api.post(`${FETCH_GROUP_API}${id}`, null)
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });
        debugger;
        dispatch({
            type: FETCH_GROUP,
            payload: res.data
        });
};
