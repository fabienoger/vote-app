/****************************************
#####            RENDERED           #####
****************************************/

Template.createVote.rendered = function() {
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
  // Remove option from ReactiveArray
  'click .ui.label.vote': function(e, t) {
    e.preventDefault;
    // set variables
    var clickedOption = e.target.innerText.trim();

    // Remove option from ReactiveArray
    Modules.client.vote.newVote.options.remove(clickedOption);
  },
  // Add option to ReactiveArray
  'click #new-vote-add-option': function(e, t) {
    e.preventDefault();
    // Set variables
    var voteOption = t.find('#new-vote-option');
    var voteOptionList = t.find('#new-vote-option');
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
  },
  // Create vote & insert in Votes collection
  'submit #create-vote-form': function(e, t) {
    e.preventDefault();
    // Set variables
    var voteName = t.find('#new-vote-name');
    var voteEndDate = t.find('#new-vote-date-time-picker');
    var voteOptions = Modules.client.vote.newVote.options.list();
    if (voteName.value && voteEndDate) {
      // Set ReactiveVar
      Modules.client.vote.newVote.name.set(voteName.value.trim());
      Modules.client.vote.newVote.endDate = voteEndDate.value;
      voteOptions = Modules.client.vote.newVote.options.array();

      // Insert vote in collection Votes
      Meteor.call("insertVote", {
        name: voteName.value,
        endDate: new Date(voteEndDate.value),
        options: voteOptions,
        usersId: [],
        createdBy: Meteor.userId()
      }, function(result, error) {
        if (error) {
          console.log(error);
        } else {
          console.log(result);
        }
      });

      // Empty form
      voteEndDate.value = "";
      voteName.value = "";

      // Empty modules newVote
      Modules.client.vote.newVote.options.clear();
      Modules.client.vote.newVote.name.set(false);
      Modules.client.vote.newVote.endDate = null;
    }
  }
});
