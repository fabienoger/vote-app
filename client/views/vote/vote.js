/*****************************************************************************
#                                                                            #
#                                   RENDERED                                 #
#                                                                            #
*****************************************************************************/
Template.vote.rendered = function() {
}

/*****************************************************************************
#                                                                            #
#                                   EVENTS                                   #
#                                                                            #
*****************************************************************************/
Template.vote.events({
  'click .ui.label.vote-option': function(e, t) {
    console.log(e.target.dataset.id);
    // Set variables
    var mongoId = e.target.dataset.id;
    var childs = e.target.parentElement.children;
    var vote = Votes.findOne({_id: mongoId});
    console.log(vote);
    // Remove class for all elements
    for(var i = 0; i < childs.length; i++) {
      childs[i].classList.remove("blue");
      childs[i].classList.remove("selected-option");
    }
    // Add class to option .selected-option
    e.target.className += " blue selected-option";
    // update mongo object
    Meteor.call("updateVote", mongoId,
      {$inc: {voted: 1},
      $push: {usersId: Meteor.userId()}},
    function(result, error) {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
    });
  }
});
/*****************************************************************************
#                                                                            #
#                                   HELPERS                                  #
#                                                                            #
*****************************************************************************/
Template.vote.helpers({
  votes: function() {
    return Votes.find().fetch();
  },
  voteOptionsList: function(id) {
    var vote = Votes.findOne({_id: id});
    return vote.options || null;
  }
});

