import {DATA} from '../utils/index';

const loadingData = () => ({
    type : DATA.LOADING
})

const dataFetched = (data) => ({
    type : DATA.LOADING_SUCCESS,
    payload : data
})

const dataFetchedFailure = () => ({
    type : DATA.LOADING_FAIL
})

export {
    loadingData,
    dataFetched,
    dataFetchedFailure
}