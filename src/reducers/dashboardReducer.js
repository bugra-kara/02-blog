import { 
    HANDLE_CATEGORIES,
    LOADING,
    SUBMIT_EDIT_CONTENT,
    SUBMIT_NEW_CONTENT,
    DELETE_CONTENT,
    HANDLE_TAGS,
    HANDLE_POSTS,
    HANDLE_FILTER,
    HANGLE_SINGLE_POST,
    HANDLE_BUTTON,
    HANDLE_DRAFT
} from '../utils.js/actions'

const dashboardReducer = (state, action) => {
    if(action.type === HANGLE_SINGLE_POST) {
        const {title, subtitle, content, slug, status, categories, tags, post_uid, is_headline} = action.payload[0]
        return {...state, edit: {...state.edit, id: post_uid, title: title, subTitle: subtitle, content: content, slug: slug, status: status, categories: categories, tags: tags, isheadline: is_headline}}
    }
    if(action.type === HANDLE_POSTS) {
        return {...state, posts: action.payload.data, filteredPosts: action.payload.data}
    }
    if(action.type === HANDLE_CATEGORIES){
        return {...state, categories: action.payload, filteredCategories: action.payload}
    }
    if(action.type === HANDLE_TAGS) {
        return {...state, tags: action.payload.data, numTags: action.payload.totalTag, filteredTags: action.payload.data}
    }
    if(action.type === LOADING) {
        return {...state, loading: !state.loading}
    }
    if(action.type === SUBMIT_EDIT_CONTENT) {
        if(action.payload?.category_name){
            const newCat = state.categories.map((item)=> {
                if(item.category_id === action.payload.category_id) {
                    return {...item, category_name: action.payload.category_name, category_slug: action.payload.category_slug}   
                }
                else {
                    return {...item}
                }
            })
            return { ...state, categories: [...newCat] }
        }
        if(action.payload?.tag_name){
            const newTag = state.tags.map((item)=> {
                if(item.tag_id === action.payload.tag_id) {
                    return {...item, tag_name: action.payload.tag_name, tag_slug: action.payload.tag_slug}   
                }
                else {
                    return {...item}
                }
            })
            return { ...state, tags: [...newTag] }
        }
    }
    if(action.type === SUBMIT_NEW_CONTENT) {
        return {...state, categories: [...state.categories, {category_name: action.payload.name, category_slug: action.payload.slug}]}
    }
    if(action.type === DELETE_CONTENT) {
        if(action.payload?.category_name) {
            const newCat = state.categories.filter((item) => {
                return item.category_name !== action.payload.category_name
            })
            return {...state, categories: [...newCat]}
        }
        if(action.payload?.tag_name) {
            const newTag = state.tags.filter((item) => {
                return item.tag_name !== action.payload.tag_name
            })
            return {...state, tags: [...newTag], numTags: state.numTags-1}
        }
        if(action.payload?.post_uid) {
            if(action.payload.status !== -1) {
                const newPost = state.posts.map((item)=> {
                    if(item.post_uid === action.payload.post_uid) {
                        return {...item, status: -1}
                    }
                    else {
                        return {...item}
                    }
                })
                return {...state, posts: [...newPost], filteredPosts: [...newPost]}
            }
            else {
                const newPost = state.posts.filter((item)=> {
                    return item.post_uid !== action.payload.post_uid
                })
                return {...state, posts: [...newPost], filteredPosts: [...newPost]}
            }
        }
    }
    if(action.type === HANDLE_FILTER) {
        if(action.payload !== 2) {
            const newPosts = state.posts.filter((item)=> {
                return item.status === action.payload
            })
            return {...state, filteredPosts: [...newPosts]}
        }
        else {
            return {...state, filteredPosts: [...state.posts]}
        }
    }
    if(action.type === HANDLE_BUTTON) {
        return {...state, setIsWaiting: !state.setIsWaiting, draft: {title: "", subtitle: "", content: ""}}
    }
    if(action.type === HANDLE_DRAFT) {
        console.log(action.payload);
        return {...state, draft : action.payload}
    }
    return state
}
export default dashboardReducer