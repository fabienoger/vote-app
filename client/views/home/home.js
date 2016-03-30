Template.home.rendered = function() {
}

// Check if user is connected
Template.home.helpers({
  userConnected: function() {
    if (Meteor.user())
      return true;
    else
      return false;
  }
});

