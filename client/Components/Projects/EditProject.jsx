import React from 'react';

export default class EditProject extends React.Component {
    
    editProject(event){
        
        event.preventDefault();
        
        //title = this.refs.np_title.value.trim(); 
        
        //Meteor.call('addProject', title, ()=>{
            //FlowRouter.go('/');
        //});
        
    }
    
    render(){
        return(
            <form className="edit-project-form" onSubmit={this.editProject.bind(this)}>
                <input type="text" ref="ep_title" placeholder="Project Title" />
                <input type="submit" ref="ep_button" value="Create Project" />
            </form>
        )
    }

}