import { createContext, useContext, useReducer } from 'react'

const ToastContext = createContext()

const initialState = {
    showToast: false,
    message: '',
    toastType: 'success',
}

const toastReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_TOAST':
            return { ...state, showToast: true, message: action.payload.message, toastType: action.payload.toastType }
        case 'HIDE_TOAST':
            return { ...state, showToast: false, message: '' };
        default:
            return state
    }

}

export const ToastContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(toastReducer, initialState)
    return (
        <ToastContext.Provider value={{ state, dispatch }}>
            {children}
        </ToastContext.Provider>
    )
}

export const useToastContext = () => useContext(ToastContext)