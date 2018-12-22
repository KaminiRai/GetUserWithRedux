import {DATA} from '../utils';
const initialState = {
    fetchedData : []
}
const loadingSuccess = (state = initialState,action) => {
    switch(action.type){
        case DATA.LOADING : 
            return {
                ...state,
                fetchedData : []
            }
        case DATA.LOADING_SUCCESS : 
            return {
                ...state,
                fetchedData : action.payload
            }
        case DATA.LOADING_FAIL : 
            return {
                ...state,
                isLoading : false
            }
        default : 
            return state;
    }
}

export default loading;