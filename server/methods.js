Meteor.methods({
    
    addProject(project){
       
        return Projects.insert({
            date: project.date,
            title: project.title,
            creator: project.user._id,
            organization: project.user.profile.organization
        });
        
    },
    
    createOrganization(name, date){
        
        return Organizations.insert({
            date: date,
            name: name
        });
        
    },
    
    addMember(first, last, organization, email, password, date){
        
        Accounts.createUser({
            email: email,
            password: password,
            profile:{
                firstName: first,
                lastName: last,
                type: "Member",
                organization: organization,
                created: date
            }
        });
        
    }
    
});