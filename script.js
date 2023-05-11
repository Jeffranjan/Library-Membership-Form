function validateForm() {
  var studentId = document.forms["membershipForm"]["studentId"].value;
  var password = document.forms["membershipForm"]["password"].value;

  // check if student ID is empty or contains non-alphanumeric characters
  if (
    studentId == null ||
    studentId == "" ||
    !/^[a-zA-Z0-9]+$/.test(studentId)
  ) {
    alert(
      "Please enter a valid student ID (only alphanumeric characters are allowed)."
    );
    return false;
  }

  // check if password is at least 6 characters long
  if (password.length < 6) {
    alert("Password should be at least 6 characters long.");
    return false;
  }

  // if all validations pass, return true to submit the form
  return true;
}
