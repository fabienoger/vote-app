// User momentjs for date format
Template.registerHelper('formatDate', function(date) {
  return moment(date).format('DD/MM/YYYY - HH:mm:ss');
});
