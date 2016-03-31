Meteor.methods({
    
    addProject(title){
       
        Projects.insert({
            //date: date,
            title: title
            //creator: creator,
            //organization: organiztion
        });
        
    }
    
});