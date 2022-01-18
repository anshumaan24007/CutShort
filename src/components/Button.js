import React from 'react';
import propTypes from 'prop-types';
import './Button.css';


const Button = props =>(
    <button
    className={props.buttonStyle}
    onClick={props.onClick}
    disabled={props.disable}
    >
        <span className={props.buttonTextStyle}>
            {props.label}
        </span>
    </button>
);

Button.defaultProps = {
    buttonStyle:'c-buttonGeneric',
    buttonTextStyle:'buttonText',
    label:'Create Workspace',
    disabled:false
};

Button.propTypes = {
    label:propTypes.string.isRequired,
    onClick:propTypes.func.isRequired,
    buttonStyle:propTypes.string,
    buttonTextStyle:propTypes.string,
    disable:propTypes.bool
};

export default Button;