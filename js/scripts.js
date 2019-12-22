$(document).ready(function() {
  $("form#numberForm").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($(number).val());
    alert(inputNumber);
    var i = inputNumber;

      for (var index = 0; index <= inputNumber; index ++) {
          alert(index);
      }

  });
});
