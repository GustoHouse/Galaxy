import React, {Component} from 'react';

export default class SingleMember extends Component {
    render(){
        return( 

            <a className="single-member third" href={`/${this.props.member._id}/edit`}>
                <span className="member-image"></span>
                <strong>
                    <span>{this.props.member.profile.firstName}&nbsp;{this.props.member.profile.lastName}</span>
                    <span className="member-type">{this.props.member.profile.type}</span>
                </strong>
            </a>  
            
        )
    }
}