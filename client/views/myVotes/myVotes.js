Template.myVotes.rendered = function() {
  // Set .active to votes dropdown
  Modules.client.utils.setActive("myVotes");
}

Template.myVotes.helpers({
  currentUserId: function() {
    return Meteor.userId();
  }
});
