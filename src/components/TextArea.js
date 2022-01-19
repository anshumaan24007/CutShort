import React from "react";
import propTypes from 'prop-types';
import "./TextArea.css";

const TextArea = props =>(
    <div className={props.containerStyle}>
    <span className={props.inputHeaderText}>
        {props.label}<span className="optionalText">{props.optional}</span>
    </span>
    <input
        type={props.type}
        placeholder={props.placeholder}
        className={props.inputBoxStyle}
        // value={props.value}
        onChange={props.onChange}
        maxLength={props.maxLength}
        disabled={props.disable}
      />
      </div>
);

TextArea.defaultProps = {
    containerStyle:'c-containerGeneric',
    inputHeaderText:'c-inputHeader',
    inputBoxStyle:'c-inputBoxStyle',
    label:'Full Name',
    type:'text',
    placeholder:'Steve Jobs',
    maxLength:24,
    disable:false,
    optional:''
};

TextArea.propTypes = {
    label: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    containerStyle: propTypes.string,
    inputHeaderText: propTypes.string,
    disable: propTypes.bool
};



export default TextArea;
