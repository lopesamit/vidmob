import React, { Component } from 'react';
import svg from './images/ic-large-email-generic.svg'

class ExistConfirmEmail extends Component {
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
            <div className="position-relative">
                
                <div className="card-icon-wrapper d-flex justify-content-center mx-auto mt-4">
                    <img src={require("./images/ic-large-email-generic.svg")} alt="card" />
                </div>
                <h5 className="my-3">That looks familiar</h5>
                <p className="col-10 mx-auto mb-3">That email looks like it’s part of an exisitng company. Check your email for an invite to your company.</p>
                <button 
                    className="bg-transparent border-0 position-absolute text-white close-btn"
                    onClick={this.handleClose}
                > close x</button>
            </div>
        );
    }
}

export default ExistConfirmEmail;
