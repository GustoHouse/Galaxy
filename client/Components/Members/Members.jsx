import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import SingleMember from './SingleMember.jsx';
import NewMember from './NewMember.jsx';

export default class Members extends TrackerReact(React.Component) {
    
    constructor(){
        super();
           
        this.state = {
            subscription: {
                members: Meteor.subscribe("orgMembers")
            }
        }
            
    }
    
    componentWillUnmount() {
        this.state.subscription.members.stop();
    }
    
    members(){
        return Meteor.users.find();
    }
    
    render(){
        return(
            
            <div id="members">
            
                <NewMember />
            
                <h1>Members</h1>

                <div id="member-list">

                    {this.members().map( (member) => {
                        return <SingleMember key={member._id} member={member} /> 
                    })}

                </div>
                      
            </div>
                    
        )
    }
}