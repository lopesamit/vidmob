import React, { Component } from 'react';
import {TextField, Button, InputLabel} from '@material-ui/core'
import Popup from "reactjs-popup";
import ExistConfirmEmail from './ExistConfirmEmail'
import { Tooltip } from 'reactstrap'
import { Link, Redirect} from 'react-router-dom';


class LandingPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            isExisting: true,
            confirmEmail: false,
            errorModal: false,
            error: false,
            navigateTo: ''
        };
        this.closeModal = this.closeModal.bind(this)
        this.handleNext = this.handleNext.bind(this)
    }
    componentDidMount(){
        this.setState({isExisting: true})
    }
  
    closeModal () {
        this.setState({ confirmEmail: false , navigateTo: '/signup'})

    }
    handleNext(event){
        event.preventDefault()
        if(this.state.isExisting){
            this.setState({ confirmEmail: true })
        } else {
            this.setState({errorModal: true, error: true})
        }
    }
    render() {
        if (this.state.confirmEmail === true) {
            return <Redirect 
                to={{
                    pathname:'/signup',
                    state: this.state
                }}
            />
          }
        return (
        <div className="align-self-center landing-page">
            <form className="form-control">
                <h3 className="get-started"> Get started on VidMob</h3>
                <InputLabel 
                    className="text-left w-100"
                > Enter your work email
                </InputLabel>
                <Popup
                    open={this.state.confirmEmail}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                    <ExistConfirmEmail closeModal={this.closeModal}/>
               
                </Popup>
                <TextField 
                    className="float-left mt-3 w-100"
                    placeholder="name@company.com"
                    variant="outlined"
                    id="TooltipExample"
                    error={this.state.error}
                />
                <Tooltip placement="top" isOpen={this.state.errorModal} target="TooltipExample">
                   <div>
                       <p>That email looks like it’s already taken. Do you want to login or reset your password?</p>
                   </div>
                </Tooltip>
                <Button
                    className="next-btn mt-3 float-right border-0 text-white"
                    variant="contained"
                    onClick={this.handleNext}  
                > Next
                </Button>
            </form>
        </div>
        );
    }
}

export default LandingPage;
