import React from 'react';

export default class LoginForm extends React.Component {
    
    login(e) {
        e.preventDefault();
        
        email = this.refs.login_email.value.trim();
        password = this.refs.login_password.value.trim();
        
        Meteor.loginWithPassword( email, password );
    }
    
    render(){
        return(
            <form onSubmit={this.login.bind(this)}>
                <input type="email" ref="login_email" placeholder="Email Address" />
                <input type="password" ref="login_password" placeholder="Password" />
                <input type="submit" ref="login_button" value="Login" />
            </form>
        )
    }
}