import React, { Component } from 'react'
import './HeadComponent.css'
import ToolbarComponent from '../ToolbarComponent/ToolbarComponent'
import ButtonToolbarComponent from "../ButtonToolbarComponent/ButtonToolbarComponent"

class HeadComponent extends Component{

    render() {
        return (
            <div className="head-container">
                <ToolbarComponent/>
                <ButtonToolbarComponent/>
            </div>
        )
    }
}


export default HeadComponent;