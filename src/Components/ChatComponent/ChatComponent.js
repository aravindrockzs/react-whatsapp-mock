import React, { Component } from 'react'
import './ChatComponent.css'




class ChatComponent extends Component {

   
    
    render() {
        return (
            <div className="chat-container">
                <div className='favi'>
                    <img src={this.props.image} alt={'sample'} /> 
                </div>
               
                <div className='content'>
                    {this.props.userName}
                    <br/>
                    {this.props.message}
                </div>
                <div className='time'>{this.props.time}
                </div>
             <hr></hr>
            </div>
        )
    }
}

export default ChatComponent

