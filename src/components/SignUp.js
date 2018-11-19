import React, { Component } from 'react';
import { TextField, Button, InputLabel } from '@material-ui/core';
import { Redirect} from 'react-router-dom';
import { Tooltip } from 'reactstrap'
import * as routes from '../constants/routes'
import fs from 'fs'

import { firebase } from '../firebase'

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class SignUp extends Component {
    constructor(props){
        super(props)
        this.handleSignUp = this.handleSignUp.bind(this)

        this.state = {
            isAssociated: false,
            navigate: false,
            companyNameExist: false,
        }
    }

    async componentDidMount(){
        if(this.props.location){
            await this.setState({
                isAssociated: this.props.location.state ? this.props.location.state.isAssociated : false,
                landingPageState: this.props.location.state || null
            })
        }
    }
    
    handleSignUp(event){
        
        event.preventDefault()
        const signedUpUser = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            displayName : this.state.displayName || '',
            password : this.state.password,
            companyName : this.state.companyName || '',
            email: this.props.location.state ? this.props.location.state.email : '',
        }
        
    
        
        const allCompanies = this.props.location ? this.props.location.state.companies : []
        
        if(allCompanies){
            const company = allCompanies.find((item) => {
                return item.domain.split('.')[0] === this.state.companyName.toLowerCase()
            })
            if(company){
                this.setState({companyNameExist: true})
            } else {
                const usersRef = firebase.firebase.database().ref('users');
                usersRef.push(signedUpUser)
                const companyRef = firebase.firebase.database().ref('companies');
                companyRef.push({domain: this.state.companyName + ".com"})
                this.setState({navigate: true, companyNameExist: false})
            }
        }

        // const companyRef = firebase.firebase.database().ref('companies');
        // companyRef.push({})
       
    }

    render() {
        if (this.state.navigate) {
            return <Redirect 
                to={{
                    pathname: routes.COMPANY_SIGN_UP,
                    state: this.state
                }}
            />
        }
        return (
            <div className="sign-up align-self-center position-relative">
                <form className="form-control" onSubmit={this.handleSignUp}>
                    {this.state.isAssociated ?
                        <h3 className="join-team text-left">Join the VidMob team</h3>
                        :
                        <h3 className="join-team text-left">Get started on VidMob</h3>
                    }
                    <InputLabel className="input-label">
                        Your email {this.state.isAssociated? ' is ' : ' wasn\'t '} 
                        associated with an existing company. Fill out the information below to finish the setup.
                    </InputLabel>

                    <div className="">
                        <div className="d-inline-block col-6 p-0 pr-1">
                            <TextField
                                className="d-inline-block col"
                                variant="outlined"
                                placeholder="First Name"
                                onChange={event => this.setState(byPropKey('firstName', event.target.value))}
                                required
                            />
                        </div>
                        <div className="d-inline-block col-6 p-0 pl-1">
                            <TextField 
                                className="d-inline-block col"
                                variant="outlined"
                                placeholder="Last Name"
                                onChange={event => this.setState(byPropKey('lastName', event.target.value))}
                                required
                            />
                        </div>
                    </div>
                    <div className="display-name">
                        <TextField 
                            className="col mt-2"
                            variant="outlined"
                            placeholder="Display Name"
                            onChange={event => this.setState(byPropKey('displayName', event.target.value))}
                        />
                        <label className="label-optional">[optional]</label> 
                    </div>
                    <TextField 
                        className="col mt-2"
                        variant="outlined"
                        placeholder="Password"
                        type="password"
                        required
                        onChange={event => this.setState(byPropKey('password', event.target.value))}
                    />
                    {!this.state.isAssociated ?
                        <div>
                            <TextField 
                                className="col mt-2"
                                variant="outlined"
                                placeholder="Company Name"
                                id="EmailError"
                                required
                                onChange={event => this.setState(byPropKey('companyName', event.target.value))}
                            />
                            <Tooltip placement="top" isOpen={this.state.companyNameExist} target="EmailError">
                                <div>
                                    <p>That company looks like it already exists. Try to Find My Team using your work email.</p>
                                </div>
                            </Tooltip>
                        </div>
                        : null
                    }

                    <Button
                        className="sign-up-btn mt-3 float-right border-0 text-white"
                        variant="contained"
                        type="submit"
                    >
                        Sign up
                    </Button>
                </form>
                    <p className="mt-3 text-center terms-condition position-absolute">By selecting Sign Up, you agree to our <b>Terms &amp; Conditions</b></p>
            </div>
        );
    }
}

export default SignUp;
