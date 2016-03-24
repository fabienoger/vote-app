Meteor.methods({
  insertVote: function(object) {
    try {
      console.log("Insert new vote in Votes !");
      Votes.insert(object);
    } catch(e) {
      console.log(e);
    }
  },
  updateVote: function(mongoId, request) {
    try {
      Votes.update({_id: mongoId}, request);
    } catch (e) {
      console.log(e);
    }
  }
});
