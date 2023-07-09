document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("input");
    var submitButton = document.getElementById("submit");
    var userList = document.getElementById("userList");
  
    submitButton.addEventListener("click", function(event) {
      event.preventDefault();
      var userInput = input.value;
  
      if (userInput) {
        var listItem = document.createElement("li");
        listItem.textContent = userInput;
        userList.appendChild(listItem);
        input.value = "";
      }
    });
  });
  