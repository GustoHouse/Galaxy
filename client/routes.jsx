import React from 'react';
import {mount} from 'react-mounter';
import {Meteor} from 'meteor/meteor'

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

FlowRouter.route('/register', {
    action(){
        mount(RegisterLayout,{
            content: <RegisterForm />       
        })
    }
});

FlowRouter.route('/login', {
    action(){
        mount(LoginLayout,{
            content: <LoginForm />       
        })
    }
});

FlowRouter.route('/', {
    action(){
        mount(DefaultLayout,{
            menu: <Menu />,
            breadcrumbs: <Breadcrumbs / >,
            content: <ProjectList />       
        })
    }
});
        
FlowRouter.route('/new', {
    action(){
        mount(ContentLayout,{
            menu: <Menu />,
            breadcrumbs: <Breadcrumbs / >,
            content: <NewProject />
        })
    }
});