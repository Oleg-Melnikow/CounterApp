import React from 'react';
import s from "./Exit.module.css"
import {NavLink} from "react-router-dom";
const Exit = (props) => <NavLink to={props.href} className={s.button}>{props.name}</NavLink>

export default Exit;