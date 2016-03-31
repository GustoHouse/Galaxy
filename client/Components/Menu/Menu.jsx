import React from 'react';

export default class Menu extends React.Component {
    
    logout() {
        Meteor.logout(function (err) {
            FlowRouter.go('/login');
        });
    }
    
    render(){
        return(
            
            <nav>
                <a href="/">Projects</a>
                <a href="/">Activiy</a>
                <a href="/">Notes</a>
                <a href="/">Tasks</a>
                <a href="/">Account</a>
                <a href="/">Admin</a>
                <a onClick={this.logout}>Logout</a>
            </nav>
    
        )
    }
}
