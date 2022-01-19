import React from 'react';
import propTypes from 'prop-types';
import './IconTextComponent.css';
import User from "../assets/images/user.svg";
import GroupUser from "../assets/images/customer.svg";
import { ReactSVG } from 'react-svg';


const IconTextComponent = props =>(
    <div
    className={props.containerStyle}
    onClick={props.onClick}
    >
        <ReactSVG src={props.iconSvg} className={props.iconStyle}/>
        <div className={props.containerTextStyle}>
            {props.label}
        </div>
        <div className={props.containerSubTextStyle}>
            {props.subLabel}
        </div>
    </div>
);

IconTextComponent.defaultProps = {
    containerStyle:'c-containerStyle',
    containerTextStyle:'c-containerTextStyle',
    containerSubTextStyle:'c-containerSubTextStyle',
    iconStyle:'c-iconStyle',
    label:'For myself',
    subLabel:'Write better. Think more clearly. Stay organized.',
    disabled:false,
    iconSvg:User,
};

export default IconTextComponent;
