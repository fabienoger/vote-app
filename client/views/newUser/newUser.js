Template.newUser.rendered = function() {
  // Initialize checkbox
  $('.ui.toggle.checkbox').checkbox();
}

Template.newUser.events({
  // Data processing for new user & create user
  'click #submit-new-user-form': function(e, t) {
    e.preventDefault();

    // Get all inputs values
    var firstName = t.find('#account-firstname');
    var lastName = t.find('#account-lastname');
    var email = t.find('#account-email');
    var password = t.find('#account-password');
    var confirmPassword = t.find('#confirm-password');
    var admin = t.find('#account-admin');
    var active = t.find('#account-active');

    // Set RegExp for email
    var regEmail = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/);

    // Check if currentUser is admin
    if (Meteor.user().profile.admin == false)
      return false;

    // Check if all fields are filled
    if (firstName.value.trim() && lastName.value.trim() && email.value.trim() && password.value.trim() && confirmPassword.value.trim()) {
      // Check e-mail format
      if (regEmail.test(email.value.trim())) {
        // Check if the two password as equals
        if (password.value.trim() == confirmPassword.value.trim()) {

          // Define user object
          var user = {
            email: email.value.trim(),
            password: password.value.trim(),
            profile: {
              firstName: firstName.value.trim(),
              lastName: lastName.value.trim(),
              active: active.checked,
              admin: admin.checked
            }
          };

          // Accounts Create user
          Meteor.call("createNewUser", user, function(error, result) {
            if (error) {
              if (error.error == 400) {
                Modules.client.utils.displayPanel("new-user-info", "negative", "warning", "The password fields must be required.");

              } else if (error.error == 403) {
                Modules.client.utils.displayPanel("new-user-info", "negative", "warning", "This email address is already registered.");
              } else {
                console.log(err);
              }
            } else {
              // Clean all fields
              firstName.value = "";
              lastName.value = "";
              email.value = "";
              password.value = "";
              confirmPassword.value = "";
              admin.checked = false;
              active.checked = true;

              // Display success message
              Modules.client.utils.displayPanel("new-user-info", "positive", "checkmark", "The user has been created.");
            }
          });
        } else {
          Modules.client.utils.displayPanel("new-user-info", "negative", "warning", "The two passwords must be identical.");
        }
      } else {
        Modules.client.utils.displayPanel("new-user-info", "negative", "warning", "The email is not valid.");
      }
    } else {
      Modules.client.utils.displayPanel("new-user-info", "negative", "warning", "All fields are required.");
    }

    // Set RegExp for email
    var regEmail = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/);
  }
});
