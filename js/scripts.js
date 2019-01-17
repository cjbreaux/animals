$(document).ready(function() {
  $(".selector").submit(function(event) {

    var animal = $("input:radio[name=animal]:checked").val();

    $("#random").text(animal);
    $(".elephant").show();


    event.preventDefault();
  });





});
