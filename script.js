document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("loginButton");
  const logoutButton = document.getElementById("logoutButton");
  const usernameInput = document.getElementById("username");
  const userList = document.getElementById("userList");

  loginButton.addEventListener("click", function () {
    const username = usernameInput.value.trim();
    if (username === "") {
      alert("Please enter a username");
      return;
    }

    const currentTime = new Date();
    const timeString = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    const listItem = document.createElement("li");
    listItem.textContent = `${username} - ${timeString}`;
    userList.appendChild(listItem);

    localStorage.setItem("loggedInUser", username);
    usernameInput.style.display = "none";
    loginButton.style.display = "none";
    logoutButton.style.display = "inline-block";
  });

  logoutButton.addEventListener("click", function () {
    localStorage.removeItem("loggedInUser");
    location.reload();
  });

  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    const currentTime = new Date();
    const timeString = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    const listItem = document.createElement("li");
    listItem.textContent = `${loggedInUser} - ${timeString}`;
    userList.appendChild(listItem);

    usernameInput.style.display = "none";
    loginButton.style.display = "none";
    logoutButton.style.display = "inline-block";
  }
});
