$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());
    if((sideA+sideB<=sideC)||(sideA+sideC<=sideB)||(sideC+sideB<=sideA)) {
      $("#result").text("Not a Triangle!");
    } else {
      if((sideA === sideB) && (sideA === sideC)) {
        $("#result").text("Your triangle is Equilateral!");
      }else if((sideA === sideB)||(sideA === sideC)||(sideB === sideC)) {
        $("#result").text("Your triangle is Isosceles!");
      } else if((sideA!==sideB)&&(sideB!==sideC)&&(sideA!==sideC)) {
        $("#result").text("Your triangle is Scalene!");
      }
    }

  });


});
