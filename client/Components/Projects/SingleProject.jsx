import React, {Component} from 'react';

export default class SingleProject extends Component {
    render(){
        return( 

            <a className="single-project" href={`/p/${this.props.project._id}/activity`}>
                <strong>{this.props.project.title}</strong>
            </a>  
            
        )
    }
}