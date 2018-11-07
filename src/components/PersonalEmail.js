import React, { Component } from 'react';
import { Redirect, Link} from 'react-router-dom';

import { Button, InputLabel } from '@material-ui/core'

class PersonalEmail extends Component {
    constructor(props){
        super(props)
        this.handleClose = this.handleClose.bind(this)
    }
    componentDidMount(){

    }

    handleClose(event){
        event.preventDefault()
        this.props.closeModal()
    }

    
    render() {
        return (
            <div className="position-relative text-left personal-email">
                <h5 className="my-3">That looks like a personal email</h5>
                <InputLabel className="col-10 mx-auto mb-3">Press continue to create a new team, or go back to try finding your team instead.</InputLabel>
                <div className="float-right">
                    <Button className="back-btn" > <Link to='/' className="text-white"> back </Link></Button>
                    <Button className="continue-btn" > <Link to='/signup' className="text-white"> continue </Link></Button>
                </div>
            </div>
        );
    }
}

export default PersonalEmail;
