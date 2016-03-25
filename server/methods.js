Meteor.methods({
  insertVote: function(object) {
    try {
      console.log("Insert new vote in Votes !");
      Votes.insert(object);
    } catch(e) {
      console.log(e);
    }
  },
  updateVote: function(mongoId, voteName, userId) {
/*
    var vote = Votes.findOne(mongoId),
    voteIndex = _.indexOf(_.pluck(vote.options, 'name'), voteName),
    modifier = {
        "$inc": {},
        "$push": {}
    };

    if (voteIndex !== -1) {
        modifier.$inc["options." + voteIndex + ".voted"] = 1;
        modifier.$push["options." + voteIndex + ".usersId"] = userId;
        Votes.update(mongoId, modifier);
    }
*/
    try {
      Votes.update({
        _id: mongoId,
        'options.name': voteName,
        'options.usersId': { '$ne': userId }
      }, {
        $inc: {'options.$.voted': 1},
        $push: {'options.$.usersId': userId}
      });
    } catch (e) {
      console.log(e);
    }
    console.log(Votes.findOne({_id: mongoId}));
  }
});
