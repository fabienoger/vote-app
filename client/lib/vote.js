Modules.client.vote = {
  updateVote: {
    // Define properties
    name: new ReactiveVar(),
    options: new ReactiveArray(),
    endDate: null
  },
  newVote: {
    // Define properties
    name: new ReactiveVar(),
    options: new ReactiveArray(),
    endDate: null
  },
  // If currentUser vote
  ifCurrentUserVoted: function(usersId, userId) {
    return _.map(usersId, function(u) {
      // Check if usersId array contains current userId
      console.log("-----------------");
      console.log(u);
      console.log(userId);
      console.log("-----------------");
      if (u == userId) {
        return true;
      }
    });
  }
}
