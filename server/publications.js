Meteor.publish('votes', function() {
  return Votes.find({});
});

Meteor.publish('feedBacks', function() {
  return FeedBacks.find({});
});

Meteor.publish('users', function() {
  return Meteor.users.find({});
});
