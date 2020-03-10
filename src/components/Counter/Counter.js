import React from "react";
import s from "./Counter.module.css"
import {connect} from "react-redux";
import Exit from "../Exit/Exit";

const Counter = (props) => {
    return (
        <div className={s.block}>
            <div className={s.counter}>
                <div>{props.value}</div>
                <div>
                    <span>Step: {props.step}</span>
                    <input type="number" className={s.input} placeholder={"Enter step"}/>
                </div>
                <div>
                    <span>Max value: {props.maxValue}</span>
                    <input type="number" className={s.input} placeholder={"Enter max value"}/>
                </div>
            </div>

            <div className={s.iconBox}>
                <button><i className="fas fa-plus"/></button>
                <button className={""}><i className="fas fa-minus"/></button>
                <button className={s.reset}>reset</button>
            </div>
            <div className={s.iconBox}>
                <Exit name="Exit" href="/"/>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => ({
    value: state.counter.value
})


export default connect(mapStateToProps)(Counter);