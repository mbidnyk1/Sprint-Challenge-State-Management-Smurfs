import  {FETCH_SMURFS_START,FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE} from '../actions/actionTypes'

const initialState = {
    smurfState: [],
    isFetching: false,
        error: ''
}

export const smurfReducer = (state = initialState, action) => {
    console.log('payload',action.payload)
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfState: [...state.smurfState,action.payload],
                isFetching: false,
                error:''
            };
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}