import { 
    HANDLE_CHANGE,
    HANDLE_SUBMIT
} from '../utils.js/actions'

const reducer = (state, action) => {
    if(action.type === HANDLE_CHANGE){
        return { ...state, [action.payload.name]: action.payload.value }
    }
    if(action.type === HANDLE_SUBMIT) {
        if(action.payload === 'failed') {
            return { ...state, email: '', password: '' }
        }
        console.log(action.payload);
        const { username, role, id } = action.payload
        localStorage.setItem('username', username)
        localStorage.setItem('role', role)
        localStorage.setItem('id', id)
        return { username: username, role: role, email: '', password: '' }
    }
    return state
}
export default reducer