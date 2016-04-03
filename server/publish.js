Meteor.publish("myProjects", function(){
    return Projects.find();
});

Meteor.publish("orgMembers", function(organization) {
    
    return Meteor.users.find();
        
});