import React, { Component } from 'react';
import {TextField, Button, InputLabel} from '@material-ui/core'
import Popup from "reactjs-popup";
import ExistConfirmEmail from './ExistConfirmEmail'
import PersonalEmail from './PersonalEmail'
import { Tooltip } from 'reactstrap'
import { Redirect, Link} from 'react-router-dom';

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class LandingPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            isAssociated: false,
            emailType: '',
            error: false,
            navigate: false,
        };
        this.closeModal = this.closeModal.bind(this)
        this.handleNext = this.handleNext.bind(this)
        this.closePersonalModal = this.closePersonalModal.bind(this)
    }
    componentDidMount(){
        // api calls if any
    }
  
    closeModal () {
        this.setState({ emailType: 'confirm' , navigate: true})
    }

    async handleNext(event){
        event.preventDefault()

        //check for email to be personal
        // this.setState({emailType: 'personal'})

        //api call to check if the user email is associate with any company.
        // if yes set isAssociated to true
        await this.setState({isAssociated: true})

        if(this.state.isAssociated){
            this.setState({ emailType: 'confirm' })
        }

        //api call to check if the email already exist
        // this.setState({emailType: 'error', error: true})
        
    }

    closePersonalModal () {
        this.setState({emailType: 'none'})
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
        <div className="align-self-center col col-lg-4 col-md-6 landing-page">
            <form className="form-control" onSubmit={this.handleNext}>
                <h3 className="get-started"> Get started on VidMob</h3>
                <InputLabel 
                    className="text-left w-100"
                > Enter your work email
                </InputLabel>
                <Popup
                    open={this.state.emailType === 'confirm'}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                    <ExistConfirmEmail style={{width: '320px'}} closeModal={this.closeModal}/>
               
                </Popup>
                <Popup
                    open={this.state.emailType === 'personal'}
                    closeOnDocumentClick
                >
                    <PersonalEmail state={this.state} closePersonalModal={this.closePersonalModal}/>
               
                </Popup>
                <TextField
                    required
                    className="float-left mt-3 w-100"
                    placeholder="name@company.com"
                    variant="outlined"
                    id="EmailError"
                    error={this.state.error}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    type="email"
                />
                <Tooltip placement="top" isOpen={this.state.emailType === 'error'} target="EmailError">
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
                    type="submit"
                > Next
                </Button>
            </form>
        </div>
        );
    }
}

export default LandingPage;
