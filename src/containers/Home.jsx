import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from "../assets/images/logo.png"
import "./Home.css";
import Banner from '../components/Banner';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import IconTextComponent from '../components/IconTextComponent';
import GroupUser from "../assets/images/customer.svg";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            pageNo:1,

        }
    }

    componentDidMount() {

    }

    onSubmitHandler=(e)=>{
        
    }

    render() {
        return (
            <div className='mainContainer'>
                <div className='titleContainer'>
                    <img src={logo} alt='logo' className='logo'/>
                    <span className='titleText'>{"Eden"}</span>
                </div>

                {this.state.pageNo === 1?<div className='pageOne'>
                    <Banner
                    headingText={"Welcome! First things first..."}
                    subHeadingText= {"You can always change them later."}/>
                    <div className='formArea'>
                    <TextArea/>
                    <TextArea
                    label={"Display Name"}
                    placeholder={"Steve"}/>
                    <Button
                    onClick={this.onSubmitHandler}/>
                    </div>
                </div>:""}

                {this.state.pageNo === 2?<div className='pageTwo'>
                <Banner
                    headingText={"Let's set up a home for all your work"}
                    subHeadingText= {"You can always create another workspace later."}/>
                    <div className='formArea'>
                    <TextArea
                    label={"Workspace Name"}
                    placeholder={"Eden"}
                    />
                    <TextArea
                    label={"Workspace URL "}
                    optional={"(optional)"}
                    placeholder={"Example"}><div className='exampleDiv'>Hiiiii</div></TextArea>
                    <Button/>
                    </div>
                    </div>:""}

                    {this.state.pageNo === 3?<div className='pageThree'>
                <Banner
                    headingText={"How are you planning to use Eden?"}
                    subHeadingText= {"We'll streamline your experience accordingly."}/>
                    <div className='formArea2'>
                        <IconTextComponent/>
                        <IconTextComponent
                        iconSvg={GroupUser}
                        label={'With my team'}
                        subLabel={"Wikis,docs,tasks& projects,all in one place."}/>
                    </div>
                    <Button/>
                </div>:""}

                {this.state.pageNo === 4?<div className='pageThree'>
                <Banner
                    headingText={"Congratulations, Eren!"}
                    subHeadingText= {"You have completed onboarding, you can start using the Eden."}/>
                    <div className='formArea'>
                    <Button
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