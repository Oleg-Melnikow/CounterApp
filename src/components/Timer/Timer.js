import React from "react";
import s from "../Counter/Counter.module.css"
import Exit from "../Exit/Exit";
import {connect} from "react-redux";
import {StartTimer, StopTimer} from "../../redux/timerReducer";

const Timer = (props) => {

    let start = () => props.StartTimer()
    let stop = () => props.StopTimer()

    return (
        <div className={s.block}>
            <div className={s.counter}>{props.time}</div>
            <div className={s.iconBox}>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={"reset"}>Reset</button>
                <button onClick={"start"}>Next</button>
                <button onClick={"revers"}>Revers</button>
            </div>
            <div className={s.exit}>
                <Exit name="Exit" href="/"/>
            </div>
        </div>)
}

const mapStateToProps = (state) => ({time: state.timer.time})

export default connect(mapStateToProps, {StartTimer, StopTimer})(Timer)