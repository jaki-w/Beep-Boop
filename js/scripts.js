var ouputNumber = function(userInput) {
  var reply = [];

  for (var index = 0; index <= inputNumber; index += 1) {
    if (index.includes("1")) {
      reply.push("Beep!");
    } else if (index.includes("2")) {
      reply.push("Boop!");
    } else if (index.includes("3")) {
      reply.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else {
      reply.push(' ' + index);
    }
  }
  return finalList;
}
//everything below this line is user interface logic
$(document).ready(function() {
  $("form#numberForm").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($(number).val());
    var result = newNumber(inputNumber);
    alert(inputNumber);

    $(finalResult).text("#numberList");

    $("#theNumber").text(index -1);
    $(".output").show();
  });
});
