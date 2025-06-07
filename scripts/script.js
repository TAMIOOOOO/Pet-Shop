fetch("../html/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header-placeholder").innerHTML = data;

    const hamburger = document.querySelector(".hamburger");
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector(".hamburger-closing");
    const hamburgerFullScreen = document.querySelector(".hamburger-full-screen")
    const userSide = document.querySelector(".user-second")

    hamburger?.addEventListener("click", () => {
      sidebar.classList.add("open");
    });

    closeBtn?.addEventListener("click", () => {
      sidebar.classList.remove("open");
    });

    hamburgerFullScreen?.addEventListener("click", () => {
      userSide.classList.toggle("open");
    });

    userSide?.addEventListener("mouseleave", () => {
      userSide.classList.remove("open");
    });

  });