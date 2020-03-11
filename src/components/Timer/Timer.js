import React from "react";
import s from "./Counter.module.css"
import Exit from "../Exit/Exit";
import {connect} from "react-redux";

const Timer = (props) => {
    return (
        <div className={s.block}>
            <div className={s.counter}>{props.time}</div>
            <Exit name="Exit" href="/"/>
        </div>)
}

const mapStateToProps = (state) => ({time: state.timer.time})

export default connect(mapStateToProps, {})(Timer)