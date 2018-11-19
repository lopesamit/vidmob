import React, { Component } from 'react';
import {TextField, Button, InputLabel} from '@material-ui/core'
import Popup from "reactjs-popup";
import ExistConfirmEmail from './ExistConfirmEmail'
import PersonalEmail from './PersonalEmail'
import { Tooltip } from 'reactstrap'
import { Redirect, Link} from 'react-router-dom';
import * as routes from '../constants/routes'

import { firebase } from '../firebase'


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
            users: [],
            companies: [],
        };
        this.closeModal = this.closeModal.bind(this)
        this.handleNext = this.handleNext.bind(this)
        this.closePersonalModal = this.closePersonalModal.bind(this)
    }
    async componentDidMount(){
        // api calls if any
        const users = []
        const companies = []

        // await Users.users.map((item) =>{
        //     users.push(item)
        // })


        // await Companies.companies.map((item) =>{
        //     companies.push(item)
        // })

        const usersRef = firebase.firebase.database().ref('users').orderByChild('email')
        await usersRef.on("value", (snapshot, error) => {
            if(snapshot.val()){
                Object.values(snapshot.val()).map((item) => {
                    users.push(item)
                })
            }
        })
        const companyRef = firebase.firebase.database().ref('companies').orderByChild('email')
        await companyRef.on("value", (snapshot, error) => {
            if(snapshot.val()){
                Object.values(snapshot.val()).map((item) => {
                    companies.push(item)
                })
            }
        })

        await this.setState({
            users: users,
            companies: companies
        })
    }
  
    closeModal () {
        this.setState({ emailType: 'confirm' , navigate: true})
    }

    async handleNext(event){
        event.preventDefault()
        const domainFromEmail = this.state.email.split('@')[1]
        //check for email to be personal
        // this.setState({emailType: 'personal'})

        // api call to check if the user email is associate with any company.
        // if yes set isAssociated to true
        //api call to check if the email already exist
        // console.log(item)
        // if( item === domainFromEmail ){
        //     this.setState({isAssociated: true})
        //     console.log("associated to company")
        //     return item
        // } else {
        //     console.log("not associated to company")
        //     this.setState({isAssociated: false})
        //     return item
        // }

        
        const assosciatedUser = await this.state.companies.find((item) => {
            return item.domain === domainFromEmail
        })
        const existingEmail = await this.state.users.find((item) => {
            return item.email === this.state.email
        })
       

        // await this.state.users.map((item) => {
        //     console.log(item.email)
        // })
        
        if( existingEmail ){
            this.setState({ emailType: 'error', error: true})
        } else if(assosciatedUser){
            this.setState({ emailType: 'confirm', isAssociated: true })
        } else {
            this.setState({ emailType: 'personal'})
        }
    }

    closePersonalModal () {
        this.setState({emailType: 'none'})
    }
    render() {
        if (this.state.navigate) {
            return <Redirect 
                to={{
                    pathname: routes.SIGN_UP,
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
