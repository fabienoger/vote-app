Template.loginLinks.rendered = function() {
  // Initialize .message.close
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
}
