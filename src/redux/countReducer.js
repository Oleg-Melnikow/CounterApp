const INCREMENT = "Counter-App/Counter/INCREMENT"
const DECREMENT = "Counter-App/Counter/DECREMENT"
const RESET = "Counter-App/Counter/RESET"
const STEP = "Counter-App/Counter/STEP"
const ACTIVE = "Counter-App/Counter/ACTIVE"

const initialState = {
    value: 0,
    step: null,
    isEditMode: false,
    isFocus: false,
}

export const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: {
            if ((state.step === null || state.step === 0)) {
                debugger
                return {
                    ...state,
                    value: state.value + 1
                }
            } else {
                return {
                    ...state,
                    value: state.value + state.step
                }
            }

        }
        case DECREMENT: {
            if ((state.step === null || state.step === 0)) {
                debugger
                return {
                    ...state,
                    value: state.value - 1
                }
            } else {
                return {
                    ...state,
                    value: state.value - state.step
                }
            }
        }
        case RESET: {
            return {
                ...state,
                value: state.value = 0,
                step: state.step = null
            }
        }
        case STEP: {
            return {
                ...state,
                step: action.step
            }
        }
        case ACTIVE: {
            return {
                ...state,
                isEditMode: action.isEditMode,
                isFocus: action.isFocus
            }
        }
        default:
            return state;
    }
}

export const Increment = () => ({type: INCREMENT})
export const Decrement = () => ({type: DECREMENT})
export const Reset = () => ({type: RESET})
export const Step = (step) => ({type: STEP, step})
export const Active = (isEditMode, isFocus) => ({type: ACTIVE, isEditMode, isFocus})
