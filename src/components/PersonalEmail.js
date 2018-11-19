import React, { Component } from 'react';
import { Redirect, Link} from 'react-router-dom';

import { Button, InputLabel } from '@material-ui/core'

class PersonalEmail extends Component {
    constructor(props){
        super(props)

        this.state= {
            navigate: false,
            goBack: false
        }
        this.handleContinue = this.handleContinue.bind(this)
        this.handleBack = this.handleBack.bind(this)
    }
    componentDidMount(){
        this.setState({prevState: this.props.state})
    }
    
    handleContinue(){
        this.setState({navigate: true})
    }
    handleBack(){
        if (typeof this.props.closePersonalModal === 'function') {
            this.props.closePersonalModal();
        }
    }
    render() {
        if(this.state.navigate){
            return <Redirect 
                to={{
                    pathname:'/signup',
                    state: this.state.prevState
                }}
            />
        }
        return (
            <div className="position-relative text-left personal-email p-3">
                <h5 className="my-3">That looks like a personal email</h5>
                <InputLabel className="col-10 mx-auto mb-3">Press continue to create a new team, or go back to try finding your team instead.</InputLabel>
                <div className="float-right mt-3">
                    <Button className="back-btn" onClick={this.handleBack}> back </Button>
                    <Button className="continue-btn" onClick={this.handleContinue}> continue </Button>
                </div>
            </div>
        );
    }
}

export default PersonalEmail;
