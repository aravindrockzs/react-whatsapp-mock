import React, { Component } from 'react'
import './CallComponent.css'


class CallComponent extends Component {

    
    render() {

        return (
            <div className="call-container">
                <div className='name'>
                    {this.props.contactName}
                </div>
                <div className="calltime">
                    {this.props.time}
                </div>
                <div className='type'>
                    {this.props.callType}
                </div>
                <div className='call-hr'>
                    <hr></hr>
                </div>
       
            </div>
        )
    }
}

export default CallComponent

