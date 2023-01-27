import { 
    HANDLE_POSTS,
    HANDLE_SINGLE_POST,
    HANDLE_CATEGORIES,
    HANDLE_SINGLE_CATEGORIE
} from '../utils.js/actions'

const publicReducer = (state, action) => {
    if(action.type === HANDLE_POSTS) {
        const { headline, lastNews, bitcoin, otherNews } = action.payload.data
        return {...state, headline: headline, middleFirst: lastNews, middleThird: bitcoin, middleFourth: otherNews}
    }
    if(action.type === HANDLE_SINGLE_POST) {
        return {...state, post:action.payload.data[0]}
    }
    if(action.type === HANDLE_CATEGORIES) {
        return {...state, categories: action.payload.data}
    }
    if(action.type === HANDLE_SINGLE_CATEGORIE) {
        return {...state, singleCategorie: action.payload.data}
    }
    return state
}
export default publicReducer