var ouputNumber = function(userInput) {
  var finalList = [];

  for (var index = 0; index <= inputNumber; index += 1) {
    if (index.includes("1")) {
      results.push("Beep!");
    } else if (index.includes("2")) {
      results.push("Boop!");
    } else if (index.includes("3")) {
      results.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else {
      results.push(' ' + index);
    }
  }
    return finalList;

//everything below this line is user interface logic
$(document).ready(function() {
  $("form#numberForm").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($(number).val());
    alert(inputNumber);
    return results;
    alert(index);
    $('ol').text(index);
  $("#theNumber").text(index -1);
  $(".output").show();
});
});
