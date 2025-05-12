fetch("../html/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header-placeholder").innerHTML = data;

    // Optional: re-bind sidebar events after loading
    const hamburger = document.querySelector(".hamburger");
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector(".hamburger-closing");

    hamburger?.addEventListener("click", () => {
      sidebar.classList.add("open");
    });

    closeBtn?.addEventListener("click", () => {
      sidebar.classList.remove("open");
    });
  });