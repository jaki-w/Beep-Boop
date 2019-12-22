$(document).ready(function() {
  $("form#numberForm").submit(function(event) {
  event.preventDefault();

  var inputNumber = parseInt($(number).val());
  alert(inputNumber);

  });
});
