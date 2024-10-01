document.addEventListener("DOMContentLoaded", function () {
  fetch("partials/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    })
    .catch((error) => console.error("Error loading header:", error));
});

// export * as headerMs from "/js/header.js";

// import "/js/header";
