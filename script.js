// @ts-nocheck

/* =========================================
   LAGOS AUTOHUB - WEBSITE JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton && navMenu) {

    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

}


/* Close menu after clicking a navigation link */

const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

    });

});


/* =========================================
   CAR FILTER
========================================= */

function filterCars() {

    const brandElement =
        document.getElementById("brandFilter");

    const typeElement =
        document.getElementById("typeFilter");

    const priceElement =
        document.getElementById("priceFilter");

    if (!brandElement || !typeElement || !priceElement) {
        return;
    }

    const selectedBrand = brandElement.value;
    const selectedType = typeElement.value;
    const selectedPrice = priceElement.value;

    const cars = document.querySelectorAll(".car-card");

    let visibleCars = 0;


    cars.forEach(function (car) {

        const carBrand = car.getAttribute("data-brand");
        const carType = car.getAttribute("data-type");
        const carPrice =
            Number(car.getAttribute("data-price"));


        /* Check brand */

        const brandMatches =
            selectedBrand === "all" ||
            carBrand === selectedBrand;


        /* Check type */

        const typeMatches =
            selectedType === "all" ||
            carType === selectedType;


        /* Check price */

        let priceMatches = true;


        if (selectedPrice === "under20") {

            priceMatches = carPrice < 20;

        }


        if (selectedPrice === "20to40") {

            priceMatches =
                carPrice >= 20 &&
                carPrice <= 40;

        }


        if (selectedPrice === "over40") {

            priceMatches = carPrice > 40;

        }


        /* Show or hide car */

        if (
            brandMatches &&
            typeMatches &&
            priceMatches
        ) {

            car.style.display = "";

            visibleCars++;

        } else {

            car.style.display = "none";

        }

    });


    /* No cars message */

    const noCars =
        document.getElementById("noCars");

    if (noCars) {

        if (visibleCars === 0) {

            noCars.style.display = "block";

        } else {

            noCars.style.display = "none";

        }

    }

}


/* =========================================
   AUTOMATIC FILTER
========================================= */

const filterSelects =
    document.querySelectorAll(".filters select");

filterSelects.forEach(function (select) {

    select.addEventListener(
        "change",
        filterCars
    );

});


/* =========================================
   HEART / FAVORITE BUTTON
========================================= */

const heartButtons =
    document.querySelectorAll(".heart-button");

heartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.classList.toggle("active");


        if (button.classList.contains("active")) {

            button.textContent = "♥";

        } else {

            button.textContent = "♡";

        }

    });

});


/* =========================================
   CAR DETAILS MODAL
========================================= */

function showCarDetails(
    title,
    year,
    price,
    condition,
    specs,
    image
) {

    const modal =
        document.getElementById("carModal");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalYear =
        document.getElementById("modalYear");

    const modalPrice =
        document.getElementById("modalPrice");

    const modalCondition =
        document.getElementById("modalCondition");

    const modalSpecs =
        document.getElementById("modalSpecs");

    const modalImage =
        document.getElementById("modalImage");

    const modalWhatsapp =
        document.getElementById("modalWhatsapp");


    if (!modal) {
        return;
    }


    /* Add car information */

    if (modalTitle) {
        modalTitle.textContent = title;
    }

    if (modalYear) {
        modalYear.textContent =
            "Year: " + year;
    }

    if (modalPrice) {
        modalPrice.textContent = price;
    }

    if (modalCondition) {
        modalCondition.textContent =
            condition;
    }

    if (modalSpecs) {
        modalSpecs.textContent =
            specs;
    }

    if (modalImage) {
        modalImage.src = image;
        modalImage.alt = title;
    }


    /* WhatsApp message */

    const whatsappMessage =
        "Hello Lagos AutoHub!" +
        "\n\n" +
        "I am interested in: " +
        title +
        "\nYear: " +
        year +
        "\nPrice: " +
        price +
        "\n\nPlease provide more information.";


    if (modalWhatsapp) {

        modalWhatsapp.href =
            "https://wa.me/2348012345678?text=" +
            encodeURIComponent(
                whatsappMessage
            );

    }


    /* Open modal */

    modal.classList.add("show");

    document.body.style.overflow =
        "hidden";

}


/* =========================================
   CLOSE CAR MODAL
========================================= */

function closeModal() {

    const modal =
        document.getElementById("carModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("show");

    document.body.style.overflow =
        "auto";

}


/* =========================================
   CLOSE MODAL BY CLICKING OUTSIDE
========================================= */

const carModal =
    document.getElementById("carModal");

if (carModal) {

    carModal.addEventListener(
        "click",
        function (event) {

            if (event.target === carModal) {

                closeModal();

            }

        }
    );

}


/* =========================================
   CLOSE MODAL WITH ESC KEY
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const interest =
                document.getElementById("interest").value;

            const message =
                document.getElementById("message").value.trim();


            /* Create WhatsApp message */

            const whatsappMessage =
                "Hello Lagos AutoHub!" +
                "\n\n" +
                "Name: " +
                name +
                "\nPhone: " +
                phone +
                "\nInterested in: " +
                interest +
                "\nMessage: " +
                message;


            /* Open WhatsApp */

            const whatsappURL =
                "https://wa.me/2348012345678?text=" +
                encodeURIComponent(
                    whatsappMessage
                );


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}


/* =========================================
   INITIALIZE WEBSITE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        filterCars();

    }
);