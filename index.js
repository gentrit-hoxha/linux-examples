// var text = "";
// var i;
// for (i = 0; i < 35; i++) {
//   text = text + "The number is " + i +"<br>";
// }
// document.getElementById("demo").innerHTML = text;



function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["lname"].value;
   
   if (x == "" & y!="") {
       alert("You should enter your name");
   }
      else if (x!="" & y=="") {
          alert("You should enter your surname");
      }

      else if(x=="" & y==""){
         alert("Enter both name and surname");
      }
      
      else{
          return false;
      }
  }


  function validateForm2() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["lname"].value;
   
   if (x == "" & y!="") {
       document.getElementById("name2").innerHTML="Please enter your name";
       document.getElementById("name2").style.display = content;
   }
      else if (x!="" & y=="") {
          alert("You should enter your surname");
      }

      else if(x=="" & y==""){
         alert("Enter both name and surname");
      }
      
      else{
          return false;
      }
  }


















  function printo(){
      var x = document.forms["myForm"]["fname"].value  + ""; 
      var rez = x[0].toUpperCase() + x.substring(1, 10).toLowerCase();
      
       var y = document.forms["myForm"]["lname"].value;



      document.getElementById("demo").innerHTML = ("HEllo " + rez + " " + y);
  }
