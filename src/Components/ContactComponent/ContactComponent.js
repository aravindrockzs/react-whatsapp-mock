import React, { Component } from 'react'
import './ContactComponent.css'



class ContactComponent extends Component {

    constructor(props) {
        super(props);
    }


    render() {
   
        return (
            <div className="contact-container">
                <div className='contactname'>
                    {this.props.contactName}
                </div>
                <div className='phone'>
                    {this.props.phoneNumber}
                </div>
                <div className='contact-hr'>
                    <hr></hr>
                </div>
                  
            </div>
        )
    }
}

export default ContactComponent

