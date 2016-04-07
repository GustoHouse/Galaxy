import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import SingleProject from './SingleProject.jsx';

export default class ProjectList extends TrackerReact(React.Component) {
    
    constructor(){
        super();
        
        this.state = {
            subscription: {
                projects: Meteor.subscribe("myProjects")
            }
        }
    }
    
    componentWillUnmount() {
        this.state.subscription.projects.stop();
    }
    
    projects(){
        return Projects.find().fetch();
    }
    
    render(){
        
        if( Meteor.user() ){
            
            return(
                <div id="project-list">

                    {this.projects().map( (project) => {
                
                        if( Meteor.user().profile.type == "Organizer" ){
                            
                            return <SingleProject key={project._id} project={project} /> 
                            
                        }else{
                            
                            if( project.members.indexOf(Meteor.userId()) != -1 ){
                                return <SingleProject key={project._id} project={project} />
                            } 
                            
                        }
                        
                    })}

                    <a className="new-project" href="/new">Add Project</a>

                </div>
            )
            
        }else{
            return(
                <div>Loading...</div>
            )
        }
        
        
    }

}