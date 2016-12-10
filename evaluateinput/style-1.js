$("#age-submit").click(function(){

  //select the box with id of age
  //get the value from that box
  var ageString = $("#age").val();

  //convert string to number
  var age = parseInt(ageString);

  //check if age is greater than 16
  if ( age >= 16 ) {
    $("#age").text("Welcome to your car.");
    $("#car").attr("src", "https://s-media-cache-ak0.pinimg.com/736x/d7/1c/ec/d71cec6f3c59becee51942fc0da7e4f9.jpg");
  }

  else {
    $("answer").text("Try again next year.");
    $("#bicycle").attr("src", 
"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Left_side_of_Flying_Pigeon.jpg/300px-Left_side_of_Flying_Pigeon.jpg");
  
});


