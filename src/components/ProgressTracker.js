import React from 'react';
import propTypes from 'prop-types';
import './ProgressTracker.css';


const ProgressTracker = props =>(
    <div className={props.stepWrapper}>
      <div className={props.stepItem1}>
        <div className={props.stepCounter} onClick={e=>props.onClick(1)}>1</div>
      </div>
      <div className={props.stepItem2}>
        <div className={props.stepCounter} onClick={e=>props.onClick(2)}>2</div>
      </div>
      <div className={props.stepItem3}>
        <div className={props.stepCounter} onClick={e=>props.onClick(3)}>3</div>
      </div>
      <div className={props.stepItem4}>
        <div className={props.stepCounter} onClick={e=>props.onClick(4)}>4</div>
      </div>
    </div>
);

ProgressTracker.defaultProps = {
    stepWrapper:'stepper-wrapper',
    stepItem1:'stepper-item',
    stepItem2:'stepper-item',
    stepItem3:'stepper-item',
    stepItem4:'stepper-item',
    stepCounter:'step-counter',
};


export default ProgressTracker;