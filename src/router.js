import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

class RouterComponent extends Component {
    render() {
        return (
            <Router sceneStyle={{ paddingTop: 65 }}>
                <Scene key="login" component={LoginForm} title="Login" />
                <Scene key="employeeList" component={EmployeeList} title="Employees" />
            </Router>
        );
    }
}

export default RouterComponent;