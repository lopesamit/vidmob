import React from 'react'
import {Button} from '@material-ui/core'
import { Link } from 'react-router-dom';


const Header = () => 
    <header>
        <Link to='/'>
            <img className="position-absolute vidmob-logo" src={require('./images/vm-logo-primary.svg')} alt="vidmod logo"></img>
        </Link>

        <div className="login-in-wrapper position-absolute">
        <label className="text-white mr-3"> Already have an account?</label>
        <Button 
            className="login-btn text-white"
            variant="outlined" 
        >
            <Link to='/signin' className="text-white">Log in</Link>
        
        </Button>
        </div>

    </header>

export default Header