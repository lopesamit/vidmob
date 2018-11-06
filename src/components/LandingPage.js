import React, { Component } from 'react';
import {TextField, Button, InputLabel} from '@material-ui/core'
import Popup from "reactjs-popup";
import ExistConfirmEmail from './ExistConfirmEmail'
import { Tooltip } from 'reactstrap'
import { Redirect, Link} from 'react-router-dom';

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class LandingPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            isExisting: false,
            confirmEmail: false,
            errorModal: false,
            error: false,
            navigate: false
        };
        this.closeModal = this.closeModal.bind(this)
        this.handleNext = this.handleNext.bind(this)
    }
    componentDidMount(){
       
    }
  
    closeModal () {
        this.setState({ confirmEmail: false , navigate: true})
    }
    async handleNext(event){
        event.preventDefault()

        //api call to check if the user email exist.
        // if yes set isExisting to true
        await this.setState({isExisting: true})

        if(this.state.isExisting){
            this.setState({ confirmEmail: true })
        } else {
            this.setState({errorModal: true, error: true})
        }
    }
    render() {
        if (this.state.navigate) {
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
                    <ExistConfirmEmail style={{width: '320px'}} closeModal={this.closeModal}/>
               
                </Popup>
                <TextField 
                    className="float-left mt-3 w-100"
                    placeholder="name@company.com"
                    variant="outlined"
                    id="EmailError"
                    error={this.state.error}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                />
                <Tooltip placement="top" isOpen={this.state.errorModal} target="EmailError">
                   <div>
                       <p>That email looks like it’s already taken. Do you want to 
                           <Link to='/signin' className="text-white"> <b>login</b> </Link>
                           or 
                          
                           <Link to='/reset-password' className="text-white"><b> reset your password? </b></Link>
                           </p>
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
