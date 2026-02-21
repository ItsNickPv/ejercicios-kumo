fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    const toggle = document.getElementById("modeToggle");
    const icon = document.getElementById("modeIcon");

    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      icon.src = "../imgs/dark.png";
    }

    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        icon.src = "../imgs/dark.png";
        localStorage.setItem("theme", "dark");
      } else {
        icon.src = "../imgs/light.png";
        localStorage.setItem("theme", "light");
      }
    });
  });