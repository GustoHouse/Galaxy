import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Member extends TrackerReact(React.Component) {
    
    constructor(){
        super();
           
        this.state = {
            subscription: {
                member: Meteor.subscribe("orgMembers")
            }
        }
            
    }
    
    componentWillUnmount() {
        this.state.subscription.member.stop();
    }
    
    member(){
        return Meteor.users.findOne({_id: this.props.member});
    }
    
    render(){
        
        if( this.member() ){
            
            return(
            
                <div id="member">
                
                    <h1>{this.member().profile.firstName + " " + this.member().profile.lastName}</h1>

                </div>

            )
            
        }else{

            return(

                <div className="loading">Loading...</div>

            )

        }
        
    }
}