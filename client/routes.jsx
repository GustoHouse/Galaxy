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
import Breadcrumbs from './Components/Breadcrumbs/Breadcrumbs.jsx';

// Content Components
import ProjectList from './Components/Projects/ProjectList.jsx';
import NewProject from './Components/Projects/NewProject.jsx';

// Route Groups
var PublicRoute = FlowRouter.group();
var AuthenticatedRoute = FlowRouter.group({
                    
    triggersEnter: [function(context, redirect) {

        if( Meteor.userId() == null ){
            
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
            menu: <Menu />,
            breadcrumbs: <Breadcrumbs / >,
            content: <ProjectList />       
        })
    }
});
        
AuthenticatedRoute.route('/new', {
    action(){
        mount(ContentLayout,{
            menu: <Menu />,
            breadcrumbs: <Breadcrumbs / >,
            content: <NewProject />
        })
    }
});