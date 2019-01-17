$(document).ready(function() {
  $(".selector").submit(function(event) {

    var animal = $("input:radio[name=animal]:checked").val();


    if (animal === "Elephant") {
      $(".tiger").hide();
      $(".sloth").hide();
      $(".elephant").show();
    }

    if (animal === "Tiger") {
      $(".elephant").hide();
      $(".sloth").hide();
      $(".tiger").show();
    }

    if (animal === "Sloth") {
      $(".elephant").hide();
      $(".tiger").hide();
      $(".sloth").show();
    }



    event.preventDefault();
  });





});
