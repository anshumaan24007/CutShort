import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from "../assets/images/logo.png"
import "./Home.css";
import Banner from '../components/Banner';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import IconTextComponent from '../components/IconTextComponent';
import GroupUser from "../assets/images/customer.svg";
import ProgressTracker from '../components/ProgressTracker';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            pageNo:1,
            fName:"",
            dName:"",
            wName:"",
            wUrl:"",
            typeWspc:"",
            containerStyle1:"c-containerStyle",
            containerStyle2:"c-containerStyle",
            initial:'stepper-item',
            completed:'stepper-item completed',
            counter:1
        }
    }

    onSubmitHandler = e =>{
        let val=e.target.value;
        this.setState({pageNo:this.state.pageNo+1,
        counter:this.state.pageNo+1})
    }

    onChangeHandler = (e,key) =>{
        let val=e.target.value;
        if(key === 1){
            this.setState({fName:val});
        }
        else if(key === 2){
            this.setState({dName:val})
        }
        else if (key === 3) {
            this.setState({wName:val})
        }
        else if (key === 4) {
            this.setState({wUrl:val})
        } 
    }

    typeSelect = (e,key) =>{
        let val=e.target.innerText;
        if(key === 11){
        this.setState({
            typeWspc:val,
            containerStyle1:"selectedCont1",
            containerStyle2:"c-containerStyle"});
        }
        else{
            this.setState({
            typeWspc:val,
            containerStyle2:"selectedCont2",
            containerStyle1:"c-containerStyle"});
        }
    }

    progressSelector = (key) =>{
        
        let pageCount=this.state.counter;
        if(key === 1 && key<=pageCount) {
            this.setState({pageNo:1});
        }
        else if (key === 2 && key<=pageCount) {
            this.setState({pageNo:2});
        }
        else if (key === 3 && key<=pageCount) {
            this.setState({pageNo:3});            
        }
        else if(key === 4 && key<=pageCount) {
            this.setState({pageNo:4});
        }
    }

    onClickfunc = () =>{
        console.log("End of UI");
    }


    render() {
        return (
            <div className='mainContainer'>
                <div className='titleContainer'>
                    <img src={logo} alt='logo' className='logo'/>
                    <span className='titleText'>{"Eden"}</span>
                </div>

                <div className='progressTracker'>
                    <ProgressTracker
                    onClick={this.progressSelector}
                    stepItem1={this.state.completed}
                    stepItem2={this.state.counter>=2?this.state.completed:this.state.initial}
                    stepItem3={this.state.counter>=3?this.state.completed:this.state.initial}
                    stepItem4={this.state.counter>=4?this.state.completed:this.state.initial}
                    />
                </div>
                {/* page 1 ******************************/}
                {this.state.pageNo === 1?<div className='pageOne pageSize'>
                    <Banner
                    headingText={"Welcome! First things first..."}
                    subHeadingText= {"You can always change them later."}/>
                    <div className='formArea'>
                    <TextArea
                    onChange={this.onChangeHandler}
                    value={this.state.fName}
                    keyNo={1}
                    required={true}/>
                    <TextArea
                    label={"Display Name"}
                    placeholder={"Steve"}
                    onChange={this.onChangeHandler}
                    value={this.state.dName}
                    keyNo={2}
                    required={true}/>
                    <Button
                    onClick={this.onSubmitHandler}
                    disable={this.state.fName !== ""&& this.state.dName !== ""?false:true}
                    />
                    </div>
                </div>:""}

                {/* page 2 ******************************/}
                {this.state.pageNo === 2?<div className='pageTwo pageSize'>
                <Banner
                    headingText={"Let's set up a home for all your work"}
                    subHeadingText= {"You can always create another workspace later."}/>
                    <div className='formArea'>
                    <TextArea
                    label={"Workspace Name"}
                    placeholder={"Eden"}
                    onChange={this.onChangeHandler}
                    value={this.state.wName}
                    keyNo={3}
                    />
                    <TextArea
                    label={"Workspace URL "}
                    optional={"(optional)"}
                    placeholder={"Example"}
                    onChange={this.onChangeHandler}
                    value={this.state.wUrl}
                    keyNo={4}/>
                    <Button
                    onClick={this.onSubmitHandler}
                    disable={this.state.wName !== ""?false:true}/>
                    </div>
                    </div>:""}

                    {/* page 3 ******************************/}
                    {this.state.pageNo === 3?<div className='pageThree pageSize'>
                <Banner
                    headingText={"How are you planning to use "+this.state.wName+"?"}
                    subHeadingText= {"We'll streamline your experience accordingly."}/>
                    <div className='formArea2'>
                        <IconTextComponent
                        onClick={this.typeSelect}
                        containerStyle={this.state.containerStyle1}
                        keyNo={11}/>
                        <IconTextComponent
                        onClick={this.typeSelect}
                        iconSvg={GroupUser}
                        label={'With my team'}
                        subLabel={"Wikis,docs,tasks& projects,all in one place."}
                        containerStyle={this.state.containerStyle2}
                        key={12}
                        />
                    </div>
                    <Button
                    onClick={this.onSubmitHandler}
                    disable={this.state.containerStyle1 !== "c-containerStyle"||this.state.containerStyle2 !== "c-containerStyle"?false:true}/>
                </div>:""}
                
                {/* page 4 ******************************/}
                {this.state.pageNo === 4?<div className='pageFour pageSize'>
                <Banner
                    headingText={"Congratulations, "+this.state.dName+"!"}
                    subHeadingText= {"You have completed onboarding, you can start using the "+this.state.wName+"."}/>
                    <div className='formArea'>
                    <Button
                    onClick={this.onClickfunc}
                    label={"Launch Eden"}/>
                    </div>
                </div>:""}
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;