import React from "react";
import s from "./Counter.module.css"
import Exit from "../Exit/Exit";

const Counter = (props) => {

    let dis = !props.isDisable ? "" : s.disable

    return (
        <div className={s.block}>
            <div className={s.counter}>
                <div className={s.counterValue}>{props.value}</div>
                <InputBlock val={props.step} isEditMode={props.isEditModeStep} active={props.activeStepChange}
                            value={props.valueCounter} valueChange={props.stepChange}
                            onChangeValue={props.onChangeStep} isFocus={props.isFocusStep}
                            placeholder="Enter Step" inputName="Step"/>
                <InputBlock val={props.maxValue} isEditMode={props.isEditModeMaxValue}
                            active={props.activeMaxValueChange} value={props.max}
                            valueChange={props.maxValueChange} onChangeValue={props.onChangeMaxValue}
                            isFocus={props.isFocusMaxValue} placeholder="Enter MaxValue" inputName="MaxValue"/>
            </div>
            <div className={s.iconBox}>
                <button className={dis} onClick={props.plus} disabled={props.isDisable}>
                    <i className="fas fa-plus"/>
                </button>
                <button onClick={props.minus}><i className="fas fa-minus"/></button>
                <button onClick={props.reset}>reset</button>
            </div>
            <div className={s.iconBox} onClick={props.reset}>
                <Exit name="Exit" href="/"/>
            </div>
        </div>

    )
}

const InputBlock = (props) => <div> {props.val && props.isEditMode
    ? <span onClick={props.active}>{props.inputName}: {props.val}</span>
    : <input type="number" className={s.input} placeholder={props.placeholder} value={props.value}
             onChange={props.valueChange} onBlur={props.onChangeValue} autoFocus={props.isFocus}/>}
</div>


export default Counter;