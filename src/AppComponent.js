import React, { Component } from 'react'
import { Router, Switch, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HeadComponent from './Components/HeadComponent/HeadComponent'
import DataContainerComponent from './Components/DataContainerComponent/DataContainerComponent'
import './AppComponent.css'

export const history = createBrowserHistory();

class AppComponent extends Component{
    
    render() {
        return (
            <div className='container'>
                <Router history={history}>
                    <HeadComponent />  
                    <Switch>
                        <Route exact path="/" component={() => < DataContainerComponent item={'chats'} />} />
                        <Route exact path="/CHATS" component={()=> < DataContainerComponent item = {'chats'}/> } />
                        <Route exact path="/CALLS" component={() => < DataContainerComponent item={'calls'} />} />
                        <Route exact path="/CONTACTS" component={() => < DataContainerComponent item={'contacts'} />} />
                    </Switch>
               </Router>
               
            </div>
        )
    }
}


export default AppComponent;