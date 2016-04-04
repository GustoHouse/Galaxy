Meteor.methods({
    
    addProject(project){
       
        return Projects.insert({
            date: project.date,
            title: project.title,
            description: project.description,
            creator: project.creator,
            organization: project.organization,
            members: project.members
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