import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Our all component files
import ListEmployee from '../Components/ListEmployee';
import AddEmployee from '../Components/AddEmployee';
import EditEmployee from '../Components/EditEmployee';

class Main extends Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={ListEmployee} />
                    <Route path='/list' component={ListEmployee} />                    
                    <Route path='/addemployee' component={AddEmployee} />
                    <Route path='/editemployee/:id' component={EditEmployee} />
                </Switch>
            </main>
        );
    }
}

export default Main;
