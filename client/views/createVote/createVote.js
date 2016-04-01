/****************************************
#####            RENDERED           #####
****************************************/

Template.createVote.rendered = function() {
  // Initialize datetime picker
  $('.datetimepicker').datetimepicker();
}

/****************************************
#####            HELPERS            #####
****************************************/

Template.createVote.helpers({
  voteOptionList: function() {
    return Modules.client.vote.newVote.options.list() || null;
  }
});

/****************************************
#####             EVENTS            #####
****************************************/

Template.createVote.events({
  // Remove option
  // Remove option from ReactiveArray
  'click .ui.label.vote': function(e, t) {
    e.preventDefault;
    // set variables
    var clickedOption = e.target.dataset.name;

    // Browse reactive array
    _.map(Modules.client.vote.newVote.options.list(), function(d, i) {
      if (d.name == clickedOption) {
        // ReactiveArray splice array
        Modules.client.vote.newVote.options.splice(i, 1);
      }
    });
  },
  // Add option to ReactiveArray
  'click #new-vote-add-option': function(e, t) {
    e.preventDefault();
    // Set variables
    var voteOption = t.find('#new-vote-option');
    var voteOptionList = t.find('#new-vote-option');
    var result = _.findWhere(Modules.client.vote.newVote.options.list(), {name: voteOption.value.trim()});

    // Check if voteOption is already contains in array
    if (!result) {
      if (voteOption.value.trim() != "") {
        // Push new voteOption in ReactiveArray
        Modules.client.vote.newVote.options.push({
          name: voteOption.value.trim(),
          voted: 0,
          usersId: []
        });
        // Empty field #new-vote-option
        voteOption.value = "";
      }
    } else {
      Modules.client.utils.displayPanel("vote-option-list-info", "negative", "warning", "The voting option exists.")
    }
  },
  // Create vote & insert in Votes collection
  'submit #create-vote-form': function(e, t) {
    e.preventDefault();
    // Set variables
    var voteName = t.find('#new-vote-name');
    var voteEndDate = t.find('#new-vote-date-time-picker');
    var voteOptions = Modules.client.vote.newVote.options.list();

    if (voteName.value && voteEndDate) {
      if (voteOptions.length >= 2) {
        // Set ReactiveVar
        Modules.client.vote.newVote.name.set(voteName.value.trim());
        Modules.client.vote.newVote.endDate = voteEndDate.value;
        voteOptions = Modules.client.vote.newVote.options.array();

        // Insert vote in collection Votes
        Meteor.call("insertVote", {
          name: voteName.value,
          endDate: new Date(voteEndDate.value),
          createdAd: new Date(),
          options: voteOptions,
          usersId: [],
          createdBy: Meteor.userId()
        }, function(result, error) {
          if (error) {
            console.log(error);
          } else {
            console.log(result);
            Modules.client.utils.displayPanel("create-vote-info", "positive", "warning", "The creation of the vote has been recorded.")
          }
        });

        // Empty form
        voteEndDate.value = "";
        voteName.value = "";

        // Empty modules newVote
        Modules.client.vote.newVote.options.clear();
        Modules.client.vote.newVote.name.set(false);
        Modules.client.vote.newVote.endDate = null;
      } else {
        // Need two options minimum
        Modules.client.utils.displayPanel("create-vote-info", "negative", "warning", "Need two options minimum.")
      }
    } else {
      // All fields are required
        Modules.client.utils.displayPanel("create-vote-info", "negative", "warning", "All fields are required.")
    }
  }
});
