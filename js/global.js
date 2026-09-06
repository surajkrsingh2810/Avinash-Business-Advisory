/* =====================================================
   MOBILE NAVBAR
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.querySelector(".nav-menu");

    if (!menuToggle || !navMenu) {
        return;
    }


    /* ===============================
       OPEN / CLOSE MENU
    =============================== */

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });


    /* ===============================
       CLOSE MENU WHEN LINK IS CLICKED
    =============================== */

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });


    /* ===============================
       CLOSE MENU WHEN CLICKING OUTSIDE
    =============================== */

    document.addEventListener("click", function (event) {

        if (
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navMenu.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

});