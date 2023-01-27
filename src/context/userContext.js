import React, { useContext, useReducer, useState } from 'react'
import reducer from '../reducers/reducer'
import { HANDLE_CHANGE, HANDLE_SUBMIT } from '../utils.js/actions'
import api from '../utils.js/api'
const initialState =  {
  username: null,
  role: null,
  email: '',
  password: '',
}
const UserContext = React.createContext()
export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = (e) => {
      const { name, value } = e.target
      
      dispatch({type: HANDLE_CHANGE, payload: {name, value}})
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await api('POST', 'https://bugradev-blog.onrender.com/api/auth/login', { email: state.email, password: state.password })
        if(response.status === 200) {
          dispatch({type: HANDLE_SUBMIT, payload: response.data.data})
        }
      } catch (error) {
        dispatch({type: HANDLE_SUBMIT, payload: 'failed'})
      }
    }
    return (
        <UserContext.Provider value={{...state, handleChange, handleSubmit}}>{children}</UserContext.Provider>
      )
}

// make sure use
export const useUserContext = () => {
    return useContext(UserContext)
}
