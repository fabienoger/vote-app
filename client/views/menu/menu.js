Template.menu.rendered = function() {
  // Initialize dropdown menu users
  $('.ui.dropdown').dropdown();
  // Menu responsive
  $('.right.menu.open').on("click",function(e){
    e.preventDefault();
    $('.ui.vertical.menu').toggle();
  });
}

Template.menu.events({
  // Logout
  'click #logout' : function(e, tmpl) {
    Meteor.logout(function(error, tmpl) {
      if (error) {
        console.log(error);
      }
      FlowRouter.go('/');
    })
  }
});

Template.menu.helpers({
  // Return true if currentUser is admin else return false
  ifAdmin: function() {
    // Initialize dropdown menu users
    $('.ui.dropdown').dropdown();
    if (Meteor.user().profile.admin)
      return true;
    else
      return false;
  }
});
