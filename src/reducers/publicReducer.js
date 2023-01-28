import { 
    HANDLE_POSTS,
    HANDLE_SINGLE_POST,
    HANDLE_CATEGORIES,
    HANDLE_SINGLE_CATEGORIE,
    LOADING
} from '../utils.js/actions'

const publicReducer = (state, action) => {
    if(action.type === HANDLE_POSTS) {
        console.log(action.payload);
        const { headline, lastNews } = action?.payload?.data
        return {...state, headline: headline, middleFirst: lastNews}
    }
    if(action.type === HANDLE_SINGLE_POST) {
        return {...state, post:action.payload.data[0], loading: !state.loading}
    }
    if(action.type === HANDLE_CATEGORIES) {
        return {...state, categories: action.payload.data}
    }
    if(action.type === HANDLE_SINGLE_CATEGORIE) {
        return {...state, singleCategorie: action.payload.data}
    }
    if(action.type === LOADING) {
        return {...state, loading: !state.loading}
    }
    return state
}
export default publicReducer