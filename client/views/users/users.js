Template.users.rendered = function() {
  // Initialize dropdown semantic-ui
  $('.ui.accordion').accordion();
}

Template.users.helpers({
  // Return all users
  'users': function() {
    return Meteor.users.find({}).fetch();
  }
});
