import React from "react";
import style from "./StartPage.module.css"
import {NavLink} from "react-router-dom";

const StartPage = () => {
    return (
        <div className={style.wrapper}>
            <Link path="/counter" icon="fas fa-cash-register"/>
            <Link path="/timer" icon="fas fa-stopwatch"/>
        </div>
    )
}

const Link = (props) => {
    return <NavLink to={props.path} className={style.link}>
        <i className={props.icon}/>
    </NavLink>
}

export default StartPage;