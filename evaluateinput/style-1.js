$(function() {
  //All JS goes within these brackets  
  
  $("#age-form").click(function(){
    
    //select the box with id of age
    //get the value from that box
    var ageString = $("#age").val();

    //convert string to number
    var age = parseInt(ageString);

    //check if age is greater than 21
    if ( age >= 16 ) {
      $("#age").text("Welcome to your car.");
    } else {
      $("#age").text("Try again next year.");
    }

  });
