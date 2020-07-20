import React, { Component } from 'react'
import './Toolbar.css'
import '../../font.css'

class ToolbarComponent extends Component{
    

    constructor() {
        super();
        this.state = {
            loading: false,
            heading: ''
        };
    }

    componentWillMount() {
        this.setState({ loading: true })
        fetch('https://api.jsonbin.io/b/5f1185a2c1edc4661758bcd1/1').then(response => response.json()).then(data => this.setState({ loading: false, heading: data.header.title }));

    }

    render() {
        return (
        <div>
                {this.state.loading ? <div className="toolbar">
                    <span>WhatsApp</span>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <span><i class="fa fa-ellipsis-v" aria-hidden="true"></i></span>
                    <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                    <span><i class="fa fa-search" aria-hidden="true"></i></span>

                </div> : 
            <div className="toolbar">
                <span>{this.state.heading}</span>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <span><i class="fa fa-ellipsis-v" aria-hidden="true"></i></span>
                <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                <span><i class="fa fa-search" aria-hidden="true"></i></span>

            </div>
            }
        </div>
           
           
        )
    }
}


export default ToolbarComponent;