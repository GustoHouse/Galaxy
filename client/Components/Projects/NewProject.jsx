import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import NewProjectMember from './NewProjectMember.jsx';

export default class NewProject extends TrackerReact(React.Component){
    
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
    
    addProject(event){
        
        event.preventDefault();
        
        projectMembers = [];
        
        memberCheckboxes = $('input:checkbox:checked');
        
        for(i = 0; i < memberCheckboxes.length; i++){
            projectMembers.push( $(memberCheckboxes[i]).attr("id") );
        }
        
        console.log(projectMembers);
        
        projectInfo = {
            date: new Date(),
            title: this.refs.np_title.value.trim(),
            description: this.refs.np_description.value.trim(),
            creator: Meteor.user()._id,
            organization: Meteor.user().profile.organization,
            members: projectMembers
        }
        
        Meteor.call('addProject', projectInfo, (error, result)=>{
            FlowRouter.go('/')
        });
        
    }
    
    render(){
        return(
            <form className="new-project-form" onSubmit={this.addProject.bind(this)}>
                
                <h1>Add New Project</h1>
                
                <input className="full" type="text" ref="np_title" placeholder="Project Title" />
                <textarea className="full" ref="np_description" placeholder="Project Description" />
                    
                <h2>Add Members To Project</h2>
                
                <div className="np-member-list row">
                    {this.members().map( (member) => {
                        
                        if( member.profile.type == "Member" ){
                     
                            return <NewProjectMember key={member._id} member={member} /> 
                        
                        }

                    })}
                </div>    
                    
                <input type="submit" ref="np_button" value="Create Project" />
                    
            </form>
        )
    }
}