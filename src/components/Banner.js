import React, { Component } from 'react';
import "./Banner.css";
import propTypes from 'prop-types';



const Banner = props =>(
    <div className={props.bannerContainerStyle}>
    <h1 className={props.bannerHeading}>{props.headingText}</h1>
    <h4 className={props.bannerSubText}>{props.subHeadingText}</h4>
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