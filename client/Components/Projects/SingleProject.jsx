import React, {Component} from 'react';

export default class SingleProject extends Component {
    render(){
        return( 

            <a className="single-project" href={`/${this.props.project._id}/edit`}>
                <strong>{this.props.project.title}</strong>
            </a>  
            
        )
    }
}