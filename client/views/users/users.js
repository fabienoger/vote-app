Template.users.rendered = function() {
  // Initialize dropdown semantic-ui
  $('.ui.accordion').accordion();
}

Template.users.events({
  // Display form on the right for updating user
  'click .update-user': function(e, t) {
    var user = null;
    if (e.target.dataset.id) {
      console.log(e.target.dataset.id);
      // Get the user with the _id
      user = Meteor.users.findOne({_id : e.target.dataset.id});
      Modules.client.user.updateUser.set(user);
    } else {
//      console.log(e.target);
    }
  },
  // Remove a user
  'click .remove-user': function(e, t) {
    if (e.target.dataset.id) {
      console.log(e.target.dataset.id);
    } else {
//      console.log(e.target);
    }
  }
});

Template.users.helpers({
  // Initialize checkbox in update-user form
  'initializeCheckbox': function() {
    // Initialize checkbox
    $('.ui.toggle.checkbox').checkbox();
  },
  // Return all users
  'users': function() {
    return Meteor.users.find({}).fetch();
  },
  'selectedUser': function() {
    return Modules.client.user.updateUser.get();
  }
});
