import {CONTENT_STATS_API} from '../REST/API';
//open/close modal
export const HANDLE_MODAL = 'HANDLE_MODAL';
export const handleModal = (value) => async (dispatch) => {
    dispatch({
        type: HANDLE_MODAL,
        payload: value
    });
};

// Get content stats
export const CONTENT_STATS = 'CONTENT_STATS';
export const contentStats = () => async (dispatch, getState, api) => {
    const res = await api.post(CONTENT_STATS_API, null)
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });

    dispatch({
        type: CONTENT_STATS,
        payload: res.data
    });
};
