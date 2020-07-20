import React, { Component } from 'react'
import './DataContainerComponent.css'
import ChatComponent from '../ChatComponent/ChatComponent'
import CallComponent from '../CallComponent/CallComponent'
import ContactComponent from '../ContactComponent/ContactComponent'
import Loader from './Loader'



const comp = (item,data) => {
if(item ==='chats'){
   let chatcomp = data.data.map((i) => <ChatComponent image={i.profileImage} userName={i.username}time={i.time} message={i.message} />)
   return chatcomp        
} else if(item === 'calls'){
    let callcomp = data.data.map((i) => <CallComponent contactName={i.contactName} time={i.time} callType={i.callType} />)
    return callcomp        
}else if (item === 'contacts'){
    let contactcomp = data.data.map((i) => <ContactComponent contactName={i.contactName} phoneNumber={i.phoneNumber} />)
    return contactcomp  
}
}

export class DataContainerComponent extends Component {
   
 

    constructor() {
        super();
        this.state = {
            loading: false,
            data:''
        };
    }

    componentWillMount() {
        this.setState({ loading: true })
        fetch('https://api.jsonbin.io/b/5f1185a2c1edc4661758bcd1').then(response => response.json()).then(data => this.setState({ loading: false,data:data }));

    }

    render() {
        return (
            <div className="data-container">{this.state.loading ? <Loader /> : <div >{comp(this.props.item,this.state.data)}</div> }
            </div>
        )
    }
}

export default DataContainerComponent
