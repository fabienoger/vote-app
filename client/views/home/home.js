// Check if user is connected
Template.home.helpers({
  userConnected: function() {
    console.log(Meteor.user());
    if (Meteor.user())
      return true;
    else
      return false;
  }
});

