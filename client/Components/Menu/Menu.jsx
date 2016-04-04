import React from 'react';

export default class Menu extends React.Component {
    
    logout() {
        Meteor.logout(function (err) {
            FlowRouter.go('/login');
        });
    }
    
    render(){
        return(
            
            <nav id="menu">
            
                <a href="/" className="logo">Galaxy</a>
            
                <div className="nav-projects">
                    <a href="/">Project Name</a>
                </div>

                <div className="nav-primary">

                    <a href="/">Activity</a>
                    <a href="/">Notes</a>
                    <a href="/">Tasks</a>
                    <a href="/members">Members</a>

                </div>

                <div className="nav-secondary">
                    <a href="/account">Account</a>
                    <a href="/settings">Settings</a>
                    <a onClick={this.logout}>Logout</a>
                </div>

            </nav>
            
            
    
        )
    }
}
