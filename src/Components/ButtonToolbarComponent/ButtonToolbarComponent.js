import React, { Component } from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import './ButtonToolbarComponent.css'
import data from '../../json/mockjson.json'


class ButtonToolbarComponent extends Component{

    constructor() {
        super();
        this.state = {
            loading: false,
            toolbar: ''
        };
    }

    componentWillMount() {
        this.setState({ loading: true })
        fetch('https://api.jsonbin.io/b/5f1185a2c1edc4661758bcd1/2').then(response => response.json()).then(data => this.setState({ loading: false, toolbar: data.header.toolbarButtons }));

    }

    render() {

        return (<div>
            {this.state.loading ? <div className="button-toolbar">
                {data.header.toolbarButtons.map((title) => (<ButtonComponent name={title} />))}
            </div> : <div className="button-toolbar">
                {this.state.toolbar.map((title) => (<ButtonComponent name={title} />))}
            </div> }
        </div>
            
        
        )
    }
}

export default ButtonToolbarComponent