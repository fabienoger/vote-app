// Register
Template.register.events({
  'submit #register-form': function (event, t) {
    event.preventDefault();
    // Get all inputs values
    var email = t.find('#account-email').value.trim();
    var password = t.find('#account-password').value.trim();
    var confirmpassword = t.find('#confirm-password').value.trim();
    var firstname = t.find('#account-firstname').value.trim();
    var lastname = t.find('#account-lastname').value.trim();
    //var geoloc = Geolocation.latLng();
    // Set RegExp for email
    var regEmail = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/);

    if (password == confirmpassword) {
      if (email && firstname && lastname) {
        // Verify if email is valid
        if (regEmail.test(email)) {
          // Define user object
          var user = {
            email: email,
            password: password,
            admin: false,
            profile:
            {
              firstName:firstname,
              lastName: lastname
            }
          }; //,geolocation:{lat: geoloc.lat, lng: geoloc.lng}

          Accounts.createUser(user, function(err) {
            if (!err) {
              FlowRouter.go('/');
            } else {
              console.log(err);
              if (err.error == 400) {
                Modules.client.utils.displayPanel("register-info", "negative", "warning", "Veuillez remplir les champ mot de passe.");

              } else if (err.error == 403) {
                Modules.client.utils.displayPanel("register-info", "negative", "warning", "L'email saisi est déjà utilisé.");
              }
            }
          });
        } else {
          Modules.client.utils.displayPanel("register-info", "negative", "warning", "L'email n'est pas valide.");
        }
      } else {
        Modules.client.utils.displayPanel("register-info", "negative", "warning", "Tous les champs doivent être remplis.");
      }
    } else {
      Modules.client.utils.displayPanel("register-info", "negative", "warning", "Les mots de passe doivent être identique.");
    }
  }
});
