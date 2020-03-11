const INCREMENT = "Counter-App/Counter/INCREMENT"
const DECREMENT = "Counter-App/Counter/DECREMENT"
const RESET = "Counter-App/Counter/RESET"

const initialState = {
    value: 0,
}

export const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                value: state.value + 1
            }
        }
        case DECREMENT: {
            return {
                ...state,
                value: state.value - 1
            }
        }
        case RESET: {
            return {
                ...state,
                value: state.value = 0
            }
        }
        default:
            return state;
    }
}

export const Increment = () => ({type: INCREMENT})
export const Decrement = () => ({type: DECREMENT})
export const Reset = () => ({type: RESET})