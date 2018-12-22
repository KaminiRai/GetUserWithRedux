import {DATA} from '../utils';
const initialState = {
    isLoading : false
}
const loading = (state = initialState,action) => {
    switch(action.type){
        case DATA.LOADING : 
            return {
                ...state,
                isLoading : true
            }
        case DATA.LOADING_SUCCESS : 
            return {
                ...state,
                isLoading : false
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