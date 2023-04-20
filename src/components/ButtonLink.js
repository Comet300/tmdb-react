import React from "react";
import { Link } from "react-router-dom";

import style from "./ButtonLink.module.css";

export default function ButtonLink(props) {
	return (
		<Link className={style.link} to={props.to}>
			{props.label}
		</Link>
	);
}
