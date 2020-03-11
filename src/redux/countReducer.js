const INCREMENT = "Counter-App/Counter/INCREMENT"
const DECREMENT = "Counter-App/Counter/DECREMENT"
const RESET = "Counter-App/Counter/RESET"
const STEP = "Counter-App/Counter/STEP"
const ACTIVE_STEP = "Counter-App/Counter/ACTIVE"
const MAX_VALUE = "Counter-App/Counter/MAX_VALUE"
const ACTIVE_MAX_VALUE = "Counter-App/Counter/ACTIVE_MAX_VALUE"
const DISABLE = "Counter-App/Counter/DISABLE"

const initialState = {
    value: 0,
    step: null,
    maxValue: null,
    isEditModeStep: false,
    isFocusStep: false,
    isEditModeMaxValue: false,
    isFocusMaxValue: false,
    isDisable: false
}

export const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: {
            if ((state.step === null || state.step === 0)) {
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
                step: state.step = null,
                maxValue: state.maxValue = null
            }
        }
        case STEP: {
            return {
                ...state,
                step: action.step
            }
        }
        case MAX_VALUE: {
            debugger
            return {
                ...state,
                maxValue: +action.maxValue
            }
        }
        case ACTIVE_STEP: {
            return {
                ...state,
                isEditModeStep: action.isEditModeStep,
                isFocusStep: action.isFocusStep
            }
        }
        case ACTIVE_MAX_VALUE: {
            return {
                ...state,
                isEditModeMaxValue: action.isEditModeMaxValue,
                isFocusMaxValue: action.isFocusMaxValue
            }
        }
        case DISABLE: {
            if ((state.step ? state.value + state.step : state.value + 1) > state.maxValue && (state.maxValue !== null && state.maxValue !== 0)) {
                return {
                    ...state,
                    isDisable: state.isDisable = true
                }
            } else if (state.maxValue === null || (state.value + state.step) <= state.maxValue) {
                return {
                    ...state,
                    isDisable: state.isDisable = false
                }
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
export const MaxValue = (maxValue) => ({type: MAX_VALUE, maxValue})
export const ActiveStep = (isEditModeStep, isFocusStep) => ({type: ACTIVE_STEP, isEditModeStep, isFocusStep})
export const ActiveMaxValue = (isEditModeMaxValue, isFocusMaxValue) => ({
    type: ACTIVE_MAX_VALUE,
    isEditModeMaxValue,
    isFocusMaxValue
})
export const Disable = () => ({type: DISABLE})
