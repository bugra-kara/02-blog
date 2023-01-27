import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/dashboardReducer'
import { HANDLE_CATEGORIES, LOADING, SUBMIT_EDIT_CONTENT, DELETE_CONTENT, HANDLE_TAGS, HANDLE_POSTS, HANDLE_FILTER, HANGLE_SINGLE_POST, HANDLE_BUTTON, HANDLE_DRAFT } from '../utils.js/actions'
import api from '../utils.js/api'
import { notify } from '../utils.js/notifications'
const initialState =  {
  todayNews : null,
  draftNumb : null,
  comment: null,
  user: null,
  posts: [],
  filteredPosts: [],
  categories: [],
  filteredCategories: [],
  tags: [],
  filteredTags: [],
  numTags: null,
  loading: false,
  setIsWaiting: false,
  draft: {title: "", subtitle: "", content: ""},
  edit: {id: "", title: "", subTitle: "", content: "", slug: "", status: "", author: localStorage.getItem('id'), categories: [], tags: [], isheadline: ''}
}
const DashboardContext = React.createContext()
export const DashboardProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getSection = async (section, page) => {
        dispatch({type: LOADING})
        if(section === 'post') {
            try {
                const response = await api('GET', `https://bugradev-blog.onrender.com/api/dashboard/edit-post/${page}`)
                
                if(response.status === 200) {
                    dispatch({type: HANGLE_SINGLE_POST, payload: response.data.data})
                }
            } catch (error) {
                console.log(error);
                dispatch({type: LOADING})
            }
        }
        if(section === 'categories') {
            try {
                const response = await api('GET', 'https://bugradev-blog.onrender.com/api/public/categories')
                if(response.status === 200) {
                    dispatch({type: HANDLE_CATEGORIES, payload: response.data.data})
                }
            } catch (error) {
                console.log(error);
                dispatch({type: LOADING})
            }
        }
        if(section === 'tags') {
            dispatch({type: LOADING})
            try {
                const response = await api('GET', `https://bugradev-blog.onrender.com/api/public/tags?page=${page}`)
                if(response.status === 200) {
                    
                    dispatch({type: HANDLE_TAGS, payload: response.data})
                }
            } catch (error) {
                console.log(error);
                dispatch({type: LOADING})
            }
        }
        if(section === 'posts') {
            dispatch({type: LOADING})
            try {
                const response = await api('GET', `https://bugradev-blog.onrender.com/api/dashboard/posts`)
                if(response.status === 200) {
                    dispatch({type: HANDLE_POSTS, payload: response.data})
                }
            } catch (error) {
                console.log(error);
                dispatch({type: LOADING})
            }
        }
    }
    const submitNew = async (section, itemInfo) => {
        
        dispatch({type: LOADING})
        if(section === 'categories') {  
            try {
                const response = await api('POST', `https://bugradev-blog.onrender.com/api/dashboard/create-categorie`, { ...itemInfo })
                if(response.data.result === 'succes') {
                    notify(200, response.data.msg)
                    getSection('categories')
                }
                else {
                    notify(100, response.data.msg)
                }
            } catch (error) {
                console.log(error);
                dispatch({type: LOADING})
            }
            dispatch({type: LOADING})
        }
        if(section === 'tags') {
            try {
                
                const response = await api('POST', `https://bugradev-blog.onrender.com/api/dashboard/create-tag`, { ...itemInfo })
                if(response.data.result === 'succes') {
                    notify(200, response.data.msg)
                }
                else {
                    notify(100, response.data.msg)
                }
            } catch (error) {
                console.log(error);
                dispatch({type: LOADING})
            }
            dispatch({type: LOADING})
        }
    }

    const submitEditSection = async (section, itemInfo) => {
        dispatch({type: LOADING})
        if(section === 'categories') {
            try {
                const response = await api('PATCH', `https://bugradev-blog.onrender.com/api/dashboard/single-categorie/${itemInfo.category_id}`, { name: itemInfo.category_name, slug: itemInfo.category_slug })
                
                if(response.data.result === 'succes') {
                    notify(200, response.data.msg)
                    dispatch({type: SUBMIT_EDIT_CONTENT, payload: itemInfo})
                }
                else {
                    notify(100, response.data.msg)
                }
            } catch (error) {
                console.log(error);
                dispatch({type: LOADING})
            }
            dispatch({type: LOADING})
        }
        if(section === 'tags') {
            try {
                const response = await api('PATCH', `https://bugradev-blog.onrender.com/api/dashboard/single-tag/${itemInfo.tag_id}`, { name: itemInfo.tag_name, slug: itemInfo.tag_slug })
                
                if(response.data.result === 'succes') {
                    notify(200, response.data.msg)
                    dispatch({type: SUBMIT_EDIT_CONTENT, payload: itemInfo})
                }
                else {
                    notify(100, response.data.msg)
                }
            } catch (error) {
                console.log(error);
                dispatch({type: LOADING})
            }
            dispatch({type: LOADING})
        }
    }
    
    const deleteSection = async (section,itemInfo) => {
        dispatch({type: LOADING})
        if(section === 'categories') {
            try {
                console.log(itemInfo);
                const response = await api('DELETE', `https://bugradev-blog.onrender.com/api/dashboard/single-categorie/${itemInfo.category_id}`, {name : itemInfo.category_name})
                if(response.data.result === 'succes') {
                    notify(200, response.data.msg)
                    dispatch({type: DELETE_CONTENT, payload: itemInfo})
                }
            } catch (error) {
                console.log(error);
                dispatch({type: LOADING})
            }
            dispatch({type: LOADING})
        }
        if(section === 'tags') {
            dispatch({type: LOADING})
            try {
                console.log(itemInfo);
                const response = await api('DELETE', `https://bugradev-blog.onrender.com/api/dashboard/single-tag/${itemInfo.tag_id}`, {name : itemInfo.tag_name})
                if(response.data.result === 'succes') {
                    notify(200, response.data.msg)
                    dispatch({type: DELETE_CONTENT, payload: itemInfo})
                }
            } catch (error) {
                console.log(error);
                dispatch({type: LOADING})
            }
            dispatch({type: LOADING})
        }
        if(section === 'posts') {
            dispatch({type: LOADING})
            try {
                const response = await api('DELETE', `https://bugradev-blog.onrender.com/api/dashboard/single-post/${itemInfo.post_uid}`,{status: itemInfo.status})
                if(response.data.result === 'succes') {
                    notify(200, response.data.msg)
                    dispatch({type: DELETE_CONTENT, payload: itemInfo})
                }
            } catch (error) {
                console.log(error);
                dispatch({type: LOADING})
            }
            dispatch({type: LOADING})
        }
    }
    const handleFilter = (selectedPart) => {
        dispatch({type: HANDLE_FILTER, payload:selectedPart})
    }
    const newPost = async (content) => {
        dispatch({type: LOADING})
        try {
            console.log(content);
            const response = await api('POST', `https://bugradev-blog.onrender.com/api/dashboard/create-post`, { ...content })
            if(response.data.result === 'succes') {
                notify(200, response.data.msg)
            }
            else {
                notify(100, response.data.msg)
            }
        } catch (error) {
            console.log(error);
            dispatch({type: LOADING})
        }
        dispatch({type: LOADING})
    }
    const updatePost = async (content) => {
        
        dispatch({type: HANDLE_BUTTON})
        try {
            const response = await api('PATCH', `https://bugradev-blog.onrender.com/api/dashboard/single-post/${content.id}`, { ...content })
            console.log(response.data);
            if(response.data.result === 'succes') {
                notify(200, response.data.msg)
            }
            else {
                notify(100, response.data.msg)
            }
        } catch (error) {
            console.log(error);
            dispatch({type: LOADING})
        }
        finally{
            dispatch({type: HANDLE_BUTTON})
        }
        dispatch({type: LOADING})
        return {...state}
    }
    const handleDraft = (content) => {
        dispatch({type: HANDLE_DRAFT, payload: content})
    }
    return (
        <DashboardContext.Provider value={{...state, getSection, submitEditSection, submitNew, deleteSection, handleFilter, newPost, updatePost, handleDraft}}>{children}</DashboardContext.Provider>
      )
}

// make sure use
export const useDashboardContext = () => {
    return useContext(DashboardContext)
  }
