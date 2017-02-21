$(function(){
  $("form#personality_survey").submit(function(event) {
    event.preventDefault();
    var counter = 0;
    $("input:checkbox[name=hit]:checked").each(function(){
      counter += parseFloat($(this).val());
      console.log(counter);
    });
    if (counter>1){
      $("#personality").append("Optomistic!")
    } else if (counter>(-1)) {
      $("#personality").append("Normal!")
    } else {
      $("#personality").append("Pessimistic!")
    }

  });
  $("form#luck").submit(function(event) {
    event.preventDefault();
    var countLuck = 0
    $("input:checkbox[name=lucky]:checked").each(function(){
      countLuck += parseFloat($(this).val());
      console.log(countLuck);
    });
    if (countLuck>=7) {
      $("#inputLuck").append("Holy fuck you caught a Leprechan! You are the luckiest person alive.")
    } else if (countLuck>=2) {
      $("#inputLuck").append("You are Lucky!")
    } else {
      $("#inputLuck").append("Go catch Leprechan, you need the luck!")
    }
  });
});
