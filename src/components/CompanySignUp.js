import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Button, TextField} from '@material-ui/core'


class CompanySignUp extends Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){

    }
    handleChange = event => {
        this.setState({ value: event.target.value });
      };
    

    render() {
        return (
            <div className="company-sign-up align-self-center">
                <form className="form-control">
                    <h3 className="join-team">Join the VidMob team</h3>
                    <p>Anyone with a specified email domain can join your team. Otherwise, an owner or co-owner will have to invite all team members.</p>
                    <RadioGroup
                        aria-label="Gender"
                        name="gender1"
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Any email from my domains" />
                        <TextField 
                            className=""
                            variant="outlined"
                            placeholder="Enter one or more domain"
                        />
                        <FormControlLabel value="male" control={<Radio />} label="Invite only" />
                    </RadioGroup>
                    <Button
                        className="done-btn mt-3 float-right border-0 text-white"
                        variant="contained"  
                    >
                        Done
                    </Button>
                </form>
            </div>
        );
    }
}

export default CompanySignUp;
