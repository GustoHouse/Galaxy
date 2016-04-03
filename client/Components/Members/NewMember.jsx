import React from 'react';

export default class NewProject extends React.Component {
    
    password()
    {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 8; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    
    addMember(event){
        
        event.preventDefault();
        
        first = this.refs.nm_first.value.trim();
        last = this.refs.nm_last.value.trim();
        organization = Meteor.user().profile.organization;
        email = this.refs.nm_email.value.trim(); 
        password = this.password(); 
        date = new Date();
        
        Meteor.call('addMember', first, last, organization, email, password, date, (error, result)=>{
            this.refs.nm_first.value = "";
            this.refs.nm_last.value = "";
            this.refs.nm_email.value = "";
        });
        
    }
    
    render(){
        return(
            
            <form id="new-member-form" onSubmit={this.addMember.bind(this)}>
            
                <h1>Add New Member</h1>
            
                <div className="row">

                    <input className="quarter" type="text" ref="nm_first" placeholder="First Name" />

                    <input className="quarter" type="text" ref="nm_last" placeholder="Last Name" />

                    <input className="quarter" type="email" ref="nm_email" placeholder="Email Address" />
            
                    <input className="nm-button" type="submit" ref="nm_button" value="+" />

                </div>
            
                
            
                <div className="clear"></div>
            
            </form>
            
        )
    }

}