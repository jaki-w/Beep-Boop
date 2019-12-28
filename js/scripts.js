function update(inputNumber) {
  var result = [];

  for (var i = 0; i <= parseInt(inputNumber); i += 1) {
    var string = i.toString();

    if (string.includes("1" && "3")) {
      result.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (string.includes("1" && "2")) {
      result.push("Boop!");
    } else if (string.includes("1")) {
      result.push("Beep!");
    } else if (string.includes("2" && "3")) {
      result.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (string.includes("2")) {
      result.push("Boop!")
    } else if (string.includes("3")) {
      result.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (isNaN(inputNumber)) {
      alert("Please enter a number!");
    } else {
      result.push(string);
    }
  }
  return result;
}
//everything below this line is user interface logic
$(document).ready(function() {
  $(".output").hide();
  $("form#numberForm").submit(function(event) {
    event.preventDefault();

    var finalNumber = parseInt($("#number").val());
    var finalResult = update(finalNumber);
    alert(finalNumber);

    $("#theNumber").append(finalNumber);

    $(".output").append(finalResult);

    $(".output").show();
  });
});
