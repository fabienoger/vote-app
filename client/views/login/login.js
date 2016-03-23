// Connexion
Template.login.events({
  'submit #login-form': function (event, t) {
    event.preventDefault();
    // Get inputs values
    var email = t.find('#login-email').value.trim();
    var password = t.find('#login-password').value.trim();
    // Set RegExp for email
    var regEmail = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/);

    if (email && password) {
      if (regEmail.test(email)) {
        Meteor.loginWithPassword(email, password, function(err) {
          if (!err) {
            FlowRouter.go('/');
          } else {
            if (err.error == 403) {
              Modules.client.utils.displayPanel("login-info", "negative", "lock", "L'email ou le mot de passe est incorrect.");
            }
          }
        });
      } else {
        Modules.client.utils.displayPanel("login-info", "negative", "warning", "L'adresse email n'est pas valide.");
      }
    } else {
      Modules.client.utils.displayPanel("login-info", "negative", "warning", "Tous les champs doivent être remplis.");
    }
  }
});
