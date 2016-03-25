Template.showUser.rendered = function() {

}

Template.showUser.events({

});

Template.showUser.helpers({
  // Get the mongo object for the param :id
  getUser: function() {
    // Get user
    var user = Meteor.users.findOne({_id: FlowRouter.getParam("id")});
    console.log(user);
    return user;
  }
});
