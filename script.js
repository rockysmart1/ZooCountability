document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("button").addEventListener("click", () => {
    if (document.getElementById("button").innerText === "HI") {
      document.getElementById("button").innerText="BYE";
    } else {
      document.getElementById("button").innerText="HI";
    }
  });
});