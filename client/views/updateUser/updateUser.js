Template.updateUser.rendered = function() {
  // Initialize checkbox
  console.log("Initialize checkbox");
  $('.ui.toggle.checkbox').checkbox();
}

Template.updateUser.events({
  'submit #update-user': function(e, t) {
    e.preventDefault();
    // Get DOM inputs
    var newFirstName = t.find('#account-firstname');
    var newLastName = t.find('#account-lastname');
    var newEmail = t.find('#account-email');
    var newAdmin = t.find('#account-admin');

    var selectedUser = Modules.client.user.updateUser.get();

    // If currentUser is admin
    if (Meteor.user().profile.admin) {
      // If all fields are filled continue else show message;
      if (newFirstName.value && newLastName.value && newEmail.value) {
        console.log(newFirstName.value.trim());
        console.log(newLastName.value.trim());
        console.log(newEmail.value.trim());
        console.log(newAdmin.checked);
        console.log(selectedUser);
        Meteor.call("updateUser", selectedUser._id, {
          "emails.0.address": newEmail.value.trim(),
          profile: {
            firstName: newFirstName.value.trim(),
            lastName: newLastName.value.trim(),
            admin: newAdmin.checked
          }
        }, function(error, result) {
          if (error) {
            console.log(error);
          } else {
            console.log(result);
          }
        });
/*
        Meteor.users.update({
          _id: selectedUser._id
        }, {
          $set: {
            emails.[0].address: newEmail.value.trim(),
            profile: {
              firstName: newFirstName.value.trim(),
              lastName: newLarstName.value.trim(),
              admin: newAdmin.checked
            }
          }
        });
*/
      } else {
        // Display info message
        Modules.client.utils.displayPanel("update-user-info", "negative", "warning", "Tous les champs doivent être remplis.");
      }
    } else {
      // Redirect to home page
      FlowRouter.go('home');
    }
/*
    if (!oldPassword.value || !newPassword.value || !confirmPassword.value) {
      Modules.client.utils.displayPanel("info-password", "negative", "warning", "Tous les champs doivent être remplis.");
      return;
    }

    // Check if user is login else redirect to '/login'
    if (Meteor.user()) {
      // Check if newPassword is equal to confirmPassword
      if (newPassword.value === confirmPassword.value) {
        // Change password
        Accounts.changePassword(oldPassword.value.trim(), newPassword.value.trim(), function(error, result) {
          if (error) {
            console.log(error);
            // Incorrect Password
            if (error.error == 403) {
              Modules.client.utils.displayPanel("info-password", "negative", "lock", "Le mot de passe est incorrect.");
            }
          } else {
            // Empty input fields
            oldPassword.value = '';
            newPassword.value = '';
            confirmPassword.value = '';

            Modules.client.utils.displayPanel("info-password", "positive", "unlock", "Votre mot de passe à bien été modifié.");
          }
        });
      } else {
        Modules.client.utils.displayPanel("info-confirm-password", "negative", "lock", "Entrez le même mot de passe ci-dessus.");
      }
    } else {
      FlowRouter.go('/login');
    }
*/
  }
});

Template.updateUser.helpers({
  'selectedUser': function() {
    return Modules.client.user.updateUser.get();
  }
});
