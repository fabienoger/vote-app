Meteor.methods({
  // Create FeedBack
  createFeedBack: function(feedBack) {
    var feedBackId = FeedBacks.insert(feedBack);
    return feedBackId;
  },
  // Create user
  createNewUser: function(user) {
    var userId = Accounts.createUser(user);
    return userId;
  },
  // Update user
  updateUser: function(userId, object) {
    console.log("UserID => ", userId);
    console.log(object);

    // Update User
    var updatedUser = Meteor.users.update({
      _id: userId
    }, {
      $set: object
    });

    return updatedUser;
  },
  // Insert a new vote
  insertVote: function(object) {
    try {
      console.log("Insert new vote in Votes !");
      Votes.insert(object);
    } catch(e) {
      console.log(e);
    }
  },
  // update vote with voteId
  updateVote: function(mongoId, voteName, userId) {
    try {
      var updateVote = Votes.update({
        _id: mongoId,
        'options.name': voteName,
        'options.usersId': { '$ne': userId }
      }, {
        $inc: {'options.$.voted': 1},
        $push: {'options.$.usersId': userId},
        $addToSet: {usersId: userId}
      });
    } catch (e) {
      console.log(e);
    }
    console.log(updateVote);
    console.log(Votes.findOne({_id: mongoId}));
  },
  // Remove vote with voteId
  removeVote: function(voteId) {
    try {
      return Votes.remove({_id: voteId});
    } catch(e) {
      return e;
    }
  }
});
