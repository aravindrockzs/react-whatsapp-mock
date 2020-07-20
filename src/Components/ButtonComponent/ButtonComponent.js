import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './ButtonComponent.css'



 class ButtonComponent extends Component {
    render() {
        return (
         
            <div className="button-small">
                <Link to={{ pathname: `/${this.props.name}` }}>
                    {this.props.name} </Link>
            </div>
          
          
        )
    }
}

export default ButtonComponent;
