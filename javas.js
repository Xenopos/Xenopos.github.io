

function validateAge() {

  var birthdate = document.getElementById("birthdate").value;
  
  var ageInMs = Date.now() - Date.parse(birthdate);
  
  var ageInYears = new Date(ageInMs).getFullYear() - 1970;
  
  if (ageInYears >= 18) {
    alert("You are eligible.");
  } else {
    alert("You are not eligible.");
  }
function PassCheck(){
    var pass = document.getElementById('pwd');

    if (pass.value.length < 8)
    {
        document.getElementById('message').innerHTML = "GIT GUD"; 
    }
}
function ValidationCheck(){

}

