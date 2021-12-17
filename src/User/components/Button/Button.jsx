import React from 'react';
import "./Button.scss";

export default function Button({children, ...restProp}) {
    return (
        <button {...restProp} className="common_button">
            {children}
        </button>
    )
}
