import React, { Component } from 'react';
import { ReactMultiEmail } from 'react-multi-email';
import 'react-multi-email/style.css';
 

class MultiEmailInput extends Component {
    constructor(props){
        super(props)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    state = {
        emails: [],
    };
 
    componentDidUpdate(prevState){
        this.props.handleEmail(this.state.emails)
    }
    
    render() {
        const { emails } = this.state;
        return (
            <div>
                <ReactMultiEmail
                    placeholder='placeholder'
                    emails={emails}
                    onChange={(_emails) => {
                        this.setState({ emails: _emails });
                    }}
                    getLabel={(
                        email,
                        index,
                        removeEmail,
                    ) => {
                        // this.handleSubmit()
                        return (
                        <div className="multi-email-wrapper" data-tag key={index}>
                            {email}
                            <span data-tag-handle onClick={() => removeEmail(index)}>
                                <img className="remove-email" src={require('./images/multi-email-cancel.svg')} alt="cancel"/>
                            </span>
                        </div>
                        );
                    }}
                />
            </div>
        );
    }
}
 
export default MultiEmailInput;