/*****************************************************************************
#                                                                            #
#                                   EVENTS                                   #
#                                                                            #
*****************************************************************************/
Template.votesWithUserId.events({
});

/*****************************************************************************
#                                                                            #
#                                   HELPERS                                  #
#                                                                            #
*****************************************************************************/

Template.votesWithUserId.helpers({
  // Return votes for one user
  getUserVotes: function(userId) {
    // Mongo request
    var votes = Votes.find({usersId: userId});
    return votes;
  },
  // Get the mongo object for the param :id
  getUser: function() {
    // Get user
    var user = Meteor.users.findOne({_id: FlowRouter.getParam("id")});
    return user;
  },
  // Return created votes for one user
  getUserCreatedVotes: function(userId) {
    // Mongo request
    var votes = Votes.find({createdBy: userId});
    return votes;
  }
});
