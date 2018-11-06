import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button, TextField} from '@material-ui/core'
import 'react-multi-email/style.css';
import MultiEmailInput from './MultiEmailInput'

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class CompanySignUp extends Component {
    constructor(props){
        super(props)

        this.state = {
            value: 'email',
            emails: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
    }
    componentDidMount(){

    }
    handleChange = async (event) => {
        await this.setState({ value: event.target.value });
    };
    
    handleSubmit(event){
        event.preventDefault()
    }

    handleEmail(emails){
        if(this.state.emails.length === emails.length)
            this.setState({emails: emails})
    }

    render() {
        return (
            <div className="company-sign-up align-self-center">
                <div className="form-control" >
                    <h3 className="company-signup text-left">Company sign up mode</h3>
                    <p className="text-left "> Anyone with a specified email domain can join your team. Otherwise, an owner or co-owner will have to invite all team members.</p>
                    <RadioGroup
                        aria-label="CompanyName"
                        name="company-emails"
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="email" control={<Radio />} label="Any email from my domains" />
                        <MultiEmailInput handleEmail={this.handleEmail}/>

                        <FormControlLabel value="invite" control={<Radio />} label="Invite only" />
                    </RadioGroup>
                    <Button
                        className="done-btn mt-3 float-right border-0 text-white"
                        variant="contained"
                        onClick={this.handleSubmit}
                    >
                        Done
                    </Button>
                </div>
            </div>
        );
    }
}

export default CompanySignUp;
