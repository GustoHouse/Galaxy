import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import SingleProject from './SingleProject.jsx';

export default class ProjectList extends TrackerReact(React.Component) {
    
    constructor(){
        super();
        
        this.state = {
            subscription: {
                projects: Meteor.subscribe("allProjects")
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
        
        return(
            <div id="project-list">
            
                {this.projects().map( (project) => {
                    return <SingleProject key={project._id} project={project} /> 
                })}
    
                <a className="new-project" href="/new">Add Project</a>

            </div>
        )
    }

}