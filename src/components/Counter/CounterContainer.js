import React, {useState} from "react";
import {connect} from "react-redux";
import {ActiveMaxValue, ActiveStep, Decrement, Increment, MaxValue, Reset, Step} from "../../redux/countReducer";
import Counter from "./Counter";

const CounterContainer = (props) => {

    const [valueCounter, setValueCounter] = useState(props.step)
    const [max, setMaxValue] = useState(props.maxValue)

    let stepChange = (e) => {
        setValueCounter(e.currentTarget.value)
    }

    let onChangeStep = () => {
        props.Step( +valueCounter)
        props.ActiveStep(true, false)
    }

    let activeStepChange = () => props.ActiveStep(false, true)

    let maxValueChange = (e) => {
        setMaxValue(e.currentTarget.value)
    }

    let onChangeMaxValue = () => {
        props.MaxValue( +max)
        props.ActiveMaxValue(true, false)
    }

    let activeMaxValueChange = () => props.ActiveMaxValue(false, true)

    let plus = () => {
        props.Increment()
    }
    let minus = () => {
        props.Decrement()
    }
    let reset = () => {
        props.Reset()
        setValueCounter(null)
        setMaxValue(null)
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
    isFocusMaxValue: state.counter.isFocusMaxValue
})


export default connect(mapStateToProps, {Increment, Decrement, Reset, Step, ActiveStep, MaxValue, ActiveMaxValue})(CounterContainer);