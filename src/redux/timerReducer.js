import myz from "../muzyka.mp3";

const START = "Counter-App/Timer/START";
const STOP = "Counter-App/Timer/STOP";
const RESET = "Counter-App/Timer/RESET";
const REVERS = "Counter-App/Timer/REVERS";

const initialState = {
    time: 0,
    isOn: false
}

export const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case START : {
            return {
                ...state,
                time: state.time + 1,
                isOn: true
            }
        }
        case STOP: {
            return {
                ...state,
                time: state.time,
                isOn: false
            }
        }
        case RESET: {
            return {
                ...state,
                time: state.time = 0
            }
        }
        case REVERS: {
            return {
                ...state,
                time: state.time - 1,
                isOn: true
            }
        }
        default:
            return state;
    }
}

let timer = null
const Start = () => ({type: START});
const Stop = () => ({type: STOP});
const Revers = () => ({type: REVERS})
export const Reset = () => ({type: RESET});

export const StartTimer = () => (dispatch) => {
    timer = setInterval(() => {
        dispatch(Start())
    }, 1000)
}

export const StopTimer = () => (dispatch) => {
    clearInterval(timer)
    dispatch(Stop())
}

export const reversTimer = () => (dispatch, getState) => {
    timer = setInterval(() => {
        dispatch(Revers())
        if (getState().timer.time === 0) {
            let audio = new Audio(myz)
            audio.play()
            clearInterval(timer)
        }
    }, 1000)
}

export const exitTimer = () => (dispatch) => {
    clearInterval(timer)
    dispatch(Stop())
    dispatch(Reset())
}
