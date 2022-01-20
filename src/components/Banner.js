import React, { Component } from 'react';
import "./Banner.css";
import propTypes from 'prop-types';



const Banner = props =>(
    <div className={props.bannerContainerStyle}>
    <div className={props.bannerHeading}>{props.headingText}</div>
    <div className={props.bannerSubText}>{props.subHeadingText}</div>
    </div>
);

Banner.defaultProps = {
    bannerContainerStyle:"c-bannerContainerStyle",
    bannerHeading:"c-headingText",
    bannerSubText:"c-subHeadingText",
    headingText:"Welcome! First things first...",
    subHeadingText: "You can always change them later."
};



export default Banner;