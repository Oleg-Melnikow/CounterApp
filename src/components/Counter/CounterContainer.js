import React, {useState} from "react";
import {connect} from "react-redux";
import {Active, Decrement, Increment, Reset, Step} from "../../redux/countReducer";
import Counter from "./Counter";

const CounterContainer = (props) => {

    const [valueCounter, setValueCounter] = useState(props.step)

    let stepChange = (e) => {
        setValueCounter(e.currentTarget.value)
    }

    let onChangeStep = () => {
        props.Step( +valueCounter)
        props.Active(true, false)
    }

    let activeChange = () => props.Active(false, true)

    let plus = () => {
        props.Increment()
    }
    let minus = () => {
        props.Decrement()
    }
    let reset = () => {
        props.Reset()
    }
    return (
        <Counter {...props} stepChange={stepChange} onChangeStep={onChangeStep}
                 activeChange={activeChange} plus={plus} minus={minus} reset={reset} valueCounter={valueCounter}/>

    )
}

const mapStateToProps = (state) => ({
    value: state.counter.value,
    step: state.counter.step,
    isEditMode: state.counter.isEditMode,
    isFocus: state.counter.isFocus
})


export default connect(mapStateToProps, {Increment, Decrement, Reset, Step, Active})(CounterContainer);