Template.registerHelper('formatDate', function(date) {
  console.log(date);
  return moment(date).format('DD/MM/YYYY - HH/mm/ss');
});
