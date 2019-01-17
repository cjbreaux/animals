$(document).ready(function() {
  $(".selector").submit(function(event) {

    var animal = $("input:radio[name=animal]:checked").val();

    if (animal === "Elephant") {
      $(".tiger").hide();
      $(".sloth").hide();
      $("#tigerText").hide();
      $("#slothText").hide();
      $(".elephant").show();
    }

    if (animal === "Tiger") {
      $(".elephant").hide();
      $(".sloth").hide();
      $("#elephantText").hide();
      $("#slothText").hide();
      $(".tiger").show();
    }

    if (animal === "Sloth") {
      $(".elephant").hide();
      $(".tiger").hide();
      $("#tigerText").hide();
      $("#elephantText").hide();
      $(".sloth").show();
    }

    event.preventDefault();
  });

  $("img.elephant").click(function() {
    $("#elephantText").toggle();
  });

  $("img.tiger").click(function() {
    $("#tigerText").toggle();
  });

  $("img.sloth").click(function() {
    $("#slothText").toggle();
  });
});
