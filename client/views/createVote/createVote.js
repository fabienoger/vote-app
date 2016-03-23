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
    // Push new voteOption in ReactiveArray
    Modules.client.vote.newVote.options.push(voteOption.value.trim());
    // Empty field #new-vote-option
    voteOption.value = "";
  },
  // Create vote & insert in Votes collection
  'submit #create-vote-form': function(e, t) {
    e.preventDefault();
    console.log(t);
    var voteName = t.find('#new-vote-name').value.trim();
    console.log(voteName);
/*
    Votes.insert({
      name: vote-name;
    });
*/
  }
});
