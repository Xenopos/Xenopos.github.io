/*Using our Form Activity, create a JavaScript function that:
Checks if the password is at least 8 characters long. If not, 
display the error message:
Password must be at least 8 characters.
Checks if the age is greater than 21. If not, display the error message:
Minors are not allowed!
If the validation is successful, display the success message:
Hooray! Your account has been successfully created.
*/

function PassCheck() {
    var pass = document.getElementById('pwd');

    if (pass.value.length < 8) {
        document.getElementById('passnotset').innerHTML = "Password must be at least 8 characters.";
        return false;
    } else {
        return true;
    }
}

function AgeCheck() {
    var dobInput = document.getElementById("date").value;
    var dob = new Date(dobInput);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();

    if (age < 18) {
        document.getElementById('agenotset').innerHTML = "Minors are not allowed!";
        return false;
    } else {
        document.getElementById('agenotset').innerHTML = "";
        return true;
    }
}

function validateForm() {
    var isPassValid = PassCheck();
    var isAgeValid = AgeCheck();

    if (isPassValid && isAgeValid) {
        alert("Hooray! Your account has been successfully created.");
        return true;
    } else {
        document.getElementById('message').innerHTML = "Please fix the errors below:";
        return false;
    }
}
