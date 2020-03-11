import React from "react";
import s from "./Counter.module.css"
import Exit from "../Exit/Exit";

const Counter = (props) => {
    debugger
    return (
        <div className={s.block}>
            <div className={s.counter}>
                <div>{props.value}</div>
                <div>
                    {props.step && props.isEditMode
                    ? <span onClick={props.activeChange}>Step: {props.step}</span>
                    : <input type="number" className={s.input} placeholder={"Enter step"} value={props.valueCounter}
                        onChange={props.stepChange} onBlur={props.onChangeStep} autoFocus={props.isFocus}/>}
                </div>
                <div>
                    <span>Max value: {props.maxValue}</span>
                    <input type="number" className={s.input} placeholder={"Enter max value"}/>
                </div>
            </div>

            <div className={s.iconBox}>
                <button onClick={props.plus}><i className="fas fa-plus"/></button>
                <button onClick={props.minus} className={""}><i className="fas fa-minus"/></button>
                <button onClick={props.reset} className={s.reset}>reset</button>
            </div>
            <div className={s.iconBox}>
                <Exit name="Exit" href="/"/>
            </div>
        </div>

    )
}

export default Counter;