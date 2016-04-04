import React, {Component} from 'react';

export default class NewProjectMember extends Component {
    render(){
        return( 

            <div className="new-project-member half">
                
                <input id={this.props.member._id} type="checkbox" />
                <label htmlFor={this.props.member._id}>{this.props.member.profile.firstName}&nbsp;{this.props.member.profile.lastName}</label>
                
            </div>
            
        )
    }
}