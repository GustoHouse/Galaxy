import React from 'react';

export default class NewProject extends React.Component {
    
    addProject(event){
        
        event.preventDefault();
        
        title = this.refs.np_title.value.trim(); 
        
        Meteor.call('addProject', title, ()=>{
            FlowRouter.go('/');
        });
        
    }
    
    render(){
        return(
            <form className="new-project-form" onSubmit={this.addProject.bind(this)}>
                <input type="text" ref="np_title" placeholder="Project Title" />
                <input type="submit" ref="np_button" value="Create Project" />
            </form>
        )
    }
}