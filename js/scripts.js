var ouputNumber = function(inputNumber) {
  var result = [];

  for (var i = 0; i <= parseInt(inputNumber); i += 1) {
    var string = i.toString();

    if (string.includes("1")) {
      result.push("Beep!");
    } else if (string.includes("2")) {
      result.push("Boop!");
    } else if (string.includes("3")) {
      result.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else {
      result.push(' ' + string);
    }
  }
  return result;
}
//everything below this line is user interface logic
$(document).ready(function() {
  $(".output").hide();
  $("form#numberForm").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($(number).val());
    var result = inputNumber;
    alert(inputNumber);

    $(result).text("#numberList");

    $("#theNumber").text(inputNumber);
    $(".output").show();
  });
});
