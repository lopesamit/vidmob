import React, { Component } from 'react';
import { TextField, Button} from '@material-ui/core'

class SignUp extends Component {
    constructor(props){
        super(props)
        this.handleSignUp = this.handleSignUp.bind(this)

        this.state = {
            isExisting: true
        }
    }
    componentDidMount(){
        console.log(this.props.location.state)
    }

    handleSignUp(){

    }

    render() {
        return (
            <div className="sign-up align-self-center">
                <form className="form-control position-relative">
                    {this.state.isExisting ?
                        <h3 className="join-team">Join the VidMob team</h3>
                        :
                        <h3 className="join-team">Get started on VidMob</h3>
                    }
                    <p>Your {this.state.isExisting? 'email is' : 'wasn\'t'} associated with an existing company. Fill out the information below to finish the setup.</p>
                    <div className="">
                        <TextField
                            className="d-inline-block col-6"
                            variant="outlined"
                            placeholder="First Name"
                        />
                        <TextField 
                            className="d-inline-block col-6"
                            variant="outlined"
                            placeholder="Last Name"
                        />
                    </div>
                    <TextField 
                        className="col mt-2"
                        variant="outlined"
                        placeholder="Display Name"
                    />
                    <TextField 
                        className="col mt-2"
                        variant="outlined"
                        placeholder="Password"
                    />
                    {!this.state.isExisting ? 
                        <TextField 
                            className="col mt-2"
                            variant="outlined"
                            placeholder="Company Name"
                        />
                        : null
                    }

                    <Button
                        className="sign-up-btn mt-3 float-right border-0 text-white"
                        variant="contained"  
                        onClick={this.handleSignUp}  
                    >
                        Sign up
                    </Button>
                    <p className="position-absolute terms-condition">By selecting Sign Up, you agree to our <b>Terms &amp; Conditions</b></p>
                </form>
            </div>
        );
    }
}

export default SignUp;
