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
    // Set variables
    var mongoId = e.target.dataset.id;
    var childs = e.target.parentElement.children;
    var vote = Votes.findOne({_id: mongoId});
    var result = false;
    // Check if user has already voted
    _.map(vote.options, function(option) {
      var r = Modules.both.utils.contains(option.usersId, Meteor.userId());
      if (r == true)
        result = true;
    });
    if (result == false) {
      // Remove class for all elements
      for(var i = 0; i < childs.length; i++) {
        childs[i].classList.remove("blue");
        childs[i].classList.remove("selected-option");
      }
      // Add class to option .selected-option
      e.target.className += " blue selected-option";
      console.log(e);
      console.log(e.target.innerText);
      // update mongo object
      Meteor.call("updateVote", mongoId, e.target.innerText, Meteor.userId(), function(result, error) {
        if (error) {
          console.log(error);
        } else {
          console.log(result);
        }
      });
    } else {
      // Add display panel
      console.log("Vous avez déjà voté !");
    }
  }
});
/*****************************************************************************
#                                                                            #
#                                   HELPERS                                  #
#                                                                            #
*****************************************************************************/
Template.vote.helpers({
  // If currentUser vote
  ifVoted: function(voteId, nameOption) {
    // Get mongo object vote
    var vote = Votes.findOne({_id: voteId});
    var result = false;
    // Check if options is voted
    _.map(vote.options, function(option) {
      if (option.name == nameOption) {
        if (Modules.both.utils.contains(option.usersId, Meteor.userId()) == true)
          result = true;
      }
    });
    return result;
  },
  // Return all votes in Votes collection
  votes: function() {
    return Votes.find().fetch();
  },
  // Return mongo vote object
  voteOptionsList: function(id) {
    var vote = Votes.findOne({_id: id});
    return vote.options || null;
  }
});

