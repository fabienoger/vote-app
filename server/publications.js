Meteor.publish('votes', function() {
  return Votes.find({});
});

Meteor.publish('users', function() {
  return Meteor.users.find({});
});
