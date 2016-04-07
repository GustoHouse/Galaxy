import React from 'react';

export default class Menu extends React.Component {
    
    logout() {
        Meteor.logout(function (err) {
            FlowRouter.go('/login');
        });
    }
    
    render(){
        
        if( this.props.main ){
            
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

                    </div>

                    <div className="nav-secondary">
                        <a href="/members">Members</a>
                        <a href="/account">Account</a>
                        <a href="/settings">Settings</a>
                        <a onClick={this.logout}>Logout</a>
                    </div>

                </nav>

            )
            
        }else{
            
            return(

                <nav id="menu">

                    <a href="/" className="logo">Galaxy</a>

                    <div className="nav-projects">
                        <a href="/">Project Name</a>
                    </div>

                    <div className="nav-primary nav-disabled">

                        <a>Activity</a>
                        <a>Notes</a>
                        <a>Tasks</a>

                    </div>

                    <div className="nav-secondary">
                        <a href="/members">Members</a>
                        <a href="/account">Account</a>
                        <a href="/settings">Settings</a>
                        <a onClick={this.logout}>Logout</a>
                    </div>

                </nav>

            )
            
        }
        
        
    }
}
