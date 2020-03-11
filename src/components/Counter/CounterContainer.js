import React, {useState} from "react";
import {connect} from "react-redux";
import {
    ActiveMaxValue,
    ActiveStep,
    Decrement,
    Disable,
    Increment,
    MaxValue,
    Reset,
    Step
} from "../../redux/countReducer";
import Counter from "./Counter";

const CounterContainer = (props) => {

    const [valueCounter, setValueCounter] = useState(props.step)
    const [max, setMaxValue] = useState(props.maxValue)

    let stepChange = (e) => {
        setValueCounter(e.currentTarget.value)
        props.Disable()
    }

    let onChangeStep = () => {
        props.Step(+valueCounter)
        props.ActiveStep(true, false)
        props.Disable()
    }

    let activeStepChange = () => props.ActiveStep(false, true)

    let maxValueChange = (e) => {
        setMaxValue(e.currentTarget.value)
    }

    let onChangeMaxValue = () => {
        props.MaxValue(+max)
        props.ActiveMaxValue(true, false)
        props.Disable()
    }

    let activeMaxValueChange = () => props.ActiveMaxValue(false, true)

    let plus = () => {
        props.Increment()
        props.Disable()
    }
    let minus = () => {
        props.Decrement()
        props.Disable()
    }
    let reset = () => {
        props.Reset()
        setValueCounter(null)
        setMaxValue(null)
        props.Disable()
    }

    return (
        <Counter {...props} stepChange={stepChange} onChangeStep={onChangeStep}
                 activeStepChange={activeStepChange} plus={plus} minus={minus} reset={reset} valueCounter={valueCounter}
                 maxValueChange={maxValueChange} onChangeMaxValue={onChangeMaxValue}
                 max={max} activeMaxValueChange={activeMaxValueChange}/>

    )
}

const mapStateToProps = (state) => ({
    value: state.counter.value,
    step: state.counter.step,
    maxValue: state.counter.maxValue,
    isEditModeStep: state.counter.isEditModeStep,
    isFocusStep: state.counter.isFocusStep,
    isEditModeMaxValue: state.counter.isEditModeMaxValue,
    isFocusMaxValue: state.counter.isFocusMaxValue,
    isDisable: state.counter.isDisable,

})


export default connect(mapStateToProps,
    {
        Increment, Decrement, Reset, Step, ActiveStep,
        MaxValue, ActiveMaxValue, Disable
    })(CounterContainer);