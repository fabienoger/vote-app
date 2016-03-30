Template.menu.events({
  // Logout
  'click #logout' : function(e, tmpl) {
    Meteor.logout(function(error, tmpl) {
      if (error) {
        console.log(error);
      }
      FlowRouter.go('/');
    })
  }
});

Template.menu.helpers({
  // Return true if currentUser is admin else return false
  ifAdmin: function() {
    if (Meteor.user().profile.admin)
      return true;
    else
      return false;
  }
});
