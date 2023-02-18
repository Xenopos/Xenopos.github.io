/*Using our Form Activity, create a JavaScript function that:
Checks if the password is at least 8 characters long. If not, 
display the error message:
Password must be at least 8 characters.
Checks if the age is greater than 21. If not, display the error message:
Minors are not allowed!
If the validation is successful, display the success message:
Hooray! Your account has been successfully created.
*/

function validateAge() {

  var birthdate = document.getElementById("birthdate").value;
  
  var ageInMs = Date.now() - Date.parse(birthdate);
  
  var ageInYears = new Date(ageInMs).getFullYear() - 1970;
  
  if (ageInYears >= 18) {
      
  } 
  else {
    alert("Minors are not allowed!");
  }

function PassCheck(){
    var pass = document.getElementById('pwd');

    if (pass.value.length < 8)
    {
        document.getElementById('passnotset').innerHTML = "Password must be at least 8 characters."; 
    }
}
function ValidationCheck(){

}

