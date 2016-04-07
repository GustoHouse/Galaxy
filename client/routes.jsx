 import React from 'react';
import {mount} from 'react-mounter';

// Layouts
import {RegisterLayout} from './Layouts/RegisterLayout.jsx';
import {LoginLayout} from './Layouts/LoginLayout.jsx';
import {DefaultLayout} from './Layouts/DefaultLayout.jsx';
import {ContentLayout} from './Layouts/ContentLayout.jsx';

// Auth Components
import RegisterForm from './Components/Auth/Register/RegisterForm.jsx';
import LoginForm from './Components/Auth/Login/LoginForm.jsx';

// Interface Components
import Menu from './Components/Menu/Menu.jsx';

// Content Components
import ProjectList from './Components/Projects/ProjectList.jsx';
import NewProject from './Components/Projects/NewProject.jsx';
import Members from './Components/Members/Members.jsx';
import Member from './Components/Members/Member.jsx';

// Route Groups
var PublicRoute = FlowRouter.group();
var AuthenticatedRoute = FlowRouter.group({
                    
    triggersEnter: [function(context, redirect) {

        if( !Meteor.userId() ){
            
            route = FlowRouter.current();
            
            Session.set("redirectAfterLogin", route.path);
            
            FlowRouter.go('/login');
            
        }
                    
    }]
    
});


// Routes
PublicRoute.route('/register', {
    action(){
        mount(RegisterLayout,{
            content: <RegisterForm />       
        })
    }
});

PublicRoute.route('/login', {
    action(){
        mount(LoginLayout,{
            content: <LoginForm />       
        })
    }
});

AuthenticatedRoute.route('/', {
    action(){
        mount(DefaultLayout,{
            menu: <Menu main="false" />,
            content: <ProjectList />       
        })
    }
});
        
AuthenticatedRoute.route('/new', {
    action(){
        mount(ContentLayout,{
            menu: <Menu main="false" />,
            content: <NewProject />
        })
    }
});
        
AuthenticatedRoute.route('/members', {
    action(){
        mount(DefaultLayout,{
            menu: <Menu main="false" />,
            content: <Members />
        })
    }
});
        
AuthenticatedRoute.route('/member/:_id', {
    action(params){
        mount(DefaultLayout,{
            menu: <Menu main="false" />,
            content: <Member member={params._id} />
        })
    }
});        