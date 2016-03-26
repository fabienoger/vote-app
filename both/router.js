FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('layout', { main: 'home', navbar: 'menu' });
  },
  name: 'home'
});

// ##### User Routes #####

// Show User route
FlowRouter.route('/users/:id', {
  action: function() {
    BlazeLayout.render('layout', { main: 'showUser', navbar: 'menu' });
  },
  name: 'showUser'
});

// Login route
FlowRouter.route('/login', {
  action: function() {
    BlazeLayout.render('layout', { main: 'login', navbar: 'menu' });
  },
  name: 'login'
});

// Register route
FlowRouter.route('/register', {
  action: function() {
    BlazeLayout.render('layout', { main: 'register', navbar: 'menu' });
  },
  name: 'register'
});

// editUser route
FlowRouter.route('/editUser', {
  action: function() {
    BlazeLayout.render('layout', { main: 'editUser', navbar: 'menu' });
  },
  name: 'editUser'
});

// Redirect the user if it is not connected

function redirectIfIsNotLogin(context) {
  if (!Meteor.userId()) {
// The following line isn't executed
//    BlazeLayout.render('layout', { main: 'login' }, {force: true});
    FlowRouter.go('login');
  } else {
    console.log(context);
  }
}

FlowRouter.triggers.enter([redirectIfIsNotLogin], {except: ["login", "register", "home"]});
