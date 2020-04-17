import axios from 'axios';

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_SMURFS_START'});
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                
                dispatch({ type: 'FETCH_SMURFS_SUCCESS', payload: res.data[0]})
                console.log('res data',res.data)
            })
            .catch(err => {
                dispatch({
                    type: 'FETCH_SMURFS_FAILURE',
                    payload: `Error ${err.response.status}: ${err.response.data}`
                });
            });
    };
};