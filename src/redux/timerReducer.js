const START = "Counter-App/Timer/START";
const STOP = "Counter-App/Timer/STOP";

const initialState = {
    time: 2,
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
        default:
            return state;
    }
}

let timer = null
const Start = () => ({type: START});
const Stop = () => ({type: STOP});

export const StartTimer = () => (dispatch) => {
    timer = setInterval(() => {
        dispatch(Start())
    }, 1000)
}

export const StopTimer = () => (dispatch) => {
    clearInterval(timer)
    dispatch(Stop())
}

