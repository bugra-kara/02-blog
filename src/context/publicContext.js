import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/publicReducer'
import { HANDLE_CATEGORIES, HANDLE_POSTS, HANDLE_SINGLE_POST, HANDLE_SINGLE_CATEGORIE } from '../utils.js/actions'
import api from '../utils.js/api'
const initialState =  {
    post: [],
    categories: [],
    singleCategory: [],
    headline: [],
    middleFirst: [],
    middleSecond: [],
    middleThird: [],
    middleFourth: [],
    rightMost: [],
}
const PublicContext = React.createContext()
export const PublicProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const getAllContents = async () => {
        try {
            const response = await api('GET', `http://localhost:3454/api/public/posts`)
                if(response.status === 200) {
                    dispatch({type: HANDLE_POSTS, payload: response.data})
                }
        } catch (error) {
            console.log(error);
        }
    }
    const getSinglePost = async (id) => {
        try {
            const response = await api('GET', `http://localhost:3454/api/public/single-post/${id}`)
                if(response.status === 200) {
                    dispatch({type: HANDLE_SINGLE_POST, payload: response.data})
                }
        } catch (error) {
            console.log(error);
        }
    }
    const getCategories = async () => {
        try {
            const response = await api('GET', `http://localhost:3454/api/public/categories`)
                if(response.status === 200) {
                    dispatch({type: HANDLE_CATEGORIES, payload: response.data})
                }
        } catch (error) {
            console.log(error);
        }
    }
    const getSingleCategorie = async (id) => {
        try {
            const response = await api('GET', `http://localhost:3454/api/public/single-categorie/${id}`)
                if(response.status === 200) {
                    dispatch({type: HANDLE_SINGLE_CATEGORIE, payload: response.data})
                }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <PublicContext.Provider value={{...state,getAllContents, getSinglePost, getCategories, getSingleCategorie}}>{children}</PublicContext.Provider>
      )
}

// make sure use
export const usePublicContext = () => {
    return useContext(PublicContext)
}
