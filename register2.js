
const UserObj = {}





localStorage[UserObj.username] = JSON.stringify(UserObj);
function validation() {
  store()
  validateUsernameInputs()
}






function validateUsernameInputs() {

  if (UserObj.username === "") {
    alert("Username is required");
    console.log("no username")
    return;
  } else if (UserObj.username.length < 3 || UserObj.username.length > 15) {
    alert("Username must be between 3 and 15 characters");
    console.log("not long neough")
    return;
  }

  if (UserObj.phone === "") {
    alert("A Phone Number is Required");
    console.log("no number")
    return;
  }
  else if (UserObj.phone.length < 11 || UserObj.phone.length > 11) {
    alert("Number must be 11 digits");
    return;
  }


  if (UserObj.email === "") {
    alert("Email is required");
    return;
  } else if (!UserObj.email.includes("@") && !UserObj.email.includes(".")) {
    alert("Enter a valid email address");
    return;
  } else if (UserObj.email.includes("@") && UserObj.email.includes(".")) {

    if (UserObj.password === "") {
      alert("Please provide a password");
      console.log("no password")
      return;
    } else if (UserObj.password.length < 8 || UserObj.password.length > 15) {
      alert("Password must be between 8 and 15 characters");
      return;
    } else {
      alert("You have Successfully made an account");
      console.log("successful password")

      localStorage[username.value] = JSON.stringify(UserObj)
    }
  };

}


function store() {

  UserObj.email = document.getElementById("email").value;
  UserObj.username = document.getElementById("username").value;
  UserObj.phone = document.getElementById("phone").value;
  UserObj.password = document.getElementById("password").value;
  UserObj.topScore = 0;


}

// LOGIN PAGE
function check() {
  // entered data from the login-form
  let LoginName = document.getElementById('LoginName').value;
  let LoginPassword = document.getElementById('LoginPassword').value;
  let LoginPhone = document.getElementById('LoginPhone').value;
  let LoginEmail = document.getElementById('LoginEmail').value;



  // Retrieve user object from local storage

  let storedUserObj = JSON.parse(localStorage[UserObj.username]);

  if (LoginName === "" ||
    LoginPhone === "" ||
    LoginEmail === "") {
    alert('complete all fieleds')
    return;
  }
  else if
    (localStorage[LoginName] === undefined || (localStorage[LoginName] === "")) {
    alert(`Create an email or username before attempting to log in`);
    return;
  }
  else { console.log('correct username') }
  // Check if entered data matches stored data
  if (LoginPhone !== undefined &&
    LoginEmail !== undefined &&
    LoginPassword !== undefined) {
    console.log('correct Phone number')
    console.log('Correct your Email')
    console.log('correct Password')
    console.log('LOGGED IN')
    sessionStorage.loggedInUser = LoginEmail;
    alert('Successfully Logged in')
  }
  else {
    // display incorrect message     
    alert(`Details incorrect, please try again`);
    return;
  }
}
function Logout() {
  sessionStorage.removeItem('loggedInUser');
  alert("Logged out")
}
