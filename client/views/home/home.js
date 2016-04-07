Template.home.rendered = function() {
  // Set .active to home item
  Modules.client.utils.setActive("home");
  // Initialize .message.close
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
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

