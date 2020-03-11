import React from "react";
import s from "../Counter/Counter.module.css"
import Exit from "../Exit/Exit";
import {connect} from "react-redux";
import {exitTimer, Reset, reversTimer, StartTimer, StopTimer} from "../../redux/timerReducer";

const Timer = (props) => {

    let start = () => props.StartTimer()
    let stop = () => props.StopTimer()
    let reset = () => props.Reset()
    let revers = () => props.reversTimer()
    let exit = () => props.exitTimer()

    return (
        <div className={s.block}>
            <div className={s.counter}>
                <span className={s.counterValue}>{props.time}</span>
            </div>
            <div className={s.iconBox}>
                <div>
                    {(props.time === 0)
                        ? <button onClick={start}>Start</button>
                        : null}
                    {(props.isOn && props.time !== 0)
                        ? <button onClick={stop}>Stop</button>
                        : null}
                    {(props.time !== 0 && !props.isOn)
                        ? <button onClick={reset}>Reset</button>
                        : null}
                    {(props.time !== 0 && !props.isOn)
                        ? <button onClick={start}>Next</button>
                        : null}
                    {(props.time !== 0 && !props.isOn)
                        ? <button onClick={revers}>Revers</button>
                        : null}
                </div>
            </div>
            <div className={s.exit} onClick={exit}>
                <Exit name="Exit" href="/"/>
            </div>
        </div>)
}

const mapStateToProps = (state) => ({time: state.timer.time, isOn: state.timer.isOn})

export default connect(mapStateToProps, {StartTimer, StopTimer, Reset, reversTimer, exitTimer})(Timer)