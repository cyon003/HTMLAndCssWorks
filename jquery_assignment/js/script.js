$(document).ready(function () {

    function showError(input, message) {
      input.addClass("input-error");
      input.next(".error-text").text(message);
    }
  
    function clearError(input) {
      input.removeClass("input-error");
      input.next(".error-text").text("");
    }
  
    $("#submitBtn").click(function () {
  
      let valid = true;
  
      const username = $("#username");
      const email = $("#email");
      const password = $("#password");
      const confirmPassword = $("#confirmPassword");
  
      // Clear previous errors
      $(".error-text").text("");
      $("input, select").removeClass("input-error");
  
      // Empty field validation
      [username, email, password, confirmPassword].forEach(field => {
        if (field.val().trim() === "") {
          showError(field, "this filed must not be empty");
          valid = false;
        }
      });
  
      // Topic validation
      if ($(".topic:checked").length === 0) {
        $("#topicError").text("At least one topic must be selected");
        valid = false;
      }
  
      // Gender validation
      if ($("#gender").val() === "--") {
        $("#genderError").text("please choose your gender");
        valid = false;
      }
  
      // Confirm password match check
      if (
        password.val().trim() !== "" &&
        confirmPassword.val().trim() !== "" &&
        password.val() !== confirmPassword.val()
      ) {
        showError(confirmPassword, "confirmed password mismatched the password");
        valid = false;
      }
  
      if (valid) {
        alert("Form submitted successfully!");
      }
  
    });
  });
  