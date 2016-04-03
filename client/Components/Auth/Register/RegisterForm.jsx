import React from 'react';

export default class RegisterForm extends React.Component {
    
    createOrganizer(event){
        
        event.preventDefault();
        
        first = this.refs.register_first.value.trim();
        last = this.refs.register_last.value.trim();
        organization = this.refs.register_organization.value.trim();
        email = this.refs.register_email.value.trim(); 
        password = this.refs.register_password.value.trim(); 
        date = new Date();
        
        Meteor.call('createOrganization', organization, date, (error, result)=>{
            
            Accounts.createUser({
                email: email,
                password: password,
                profile:{
                    firstName: first,
                    lastName: last,
                    type: "Organizer",
                    organization: result,
                    created: date
                }
            });
            
            FlowRouter.go('/');
            
        });
     
    }
    
    render(){
        return(
            <form onSubmit={this.createOrganizer.bind(this)}>
                <input type="text" ref="register_first" placeholder="First Name" />
                <input type="text" ref="register_last" placeholder="Last Name" />
                <input type="text" ref="register_organization" placeholder="Organization Name" />
                <input type="email" ref="register_email" placeholder="Email Address" />
                <input type="password" ref="register_password" placeholder="Password" />
                <input type="submit" ref="register_button" value="Register" />
            </form>
        )
    }
}