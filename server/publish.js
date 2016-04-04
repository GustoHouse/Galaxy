Meteor.publish("myProjects", function(){
    return Projects.find();
});

Meteor.publish("orgMembers", function() {
    
    if (this.userId) {
        var user = Meteor.users.findOne(this.userId); 
        var org = user.profile.organization; 
        return Meteor.users.find({'profile.organization': org});
    }
        
});