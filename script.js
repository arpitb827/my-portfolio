document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio website loaded successfully!");
});

// Example: Smooth Scroll
// document.querySelectorAll("nav ul li a").forEach(anchor => {
//     anchor.addEventListener("click", function(e) {
//         e.preventDefault();
//         const targetSection = document.querySelector(this.getAttribute("href"));
//         targetSection.scrollIntoView({ behavior: "smooth" });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar ul li a");
    const hireMeButton = document.querySelector(".cta-button");

    // Hide all sections except the "About" section by default
    sections.forEach((section) => {
        section.style.display = "none";
    });
    document.getElementById("about").style.display = "block"; // Show About section initially

    // Function to show the correct section
    function showSection(targetId) {
        sections.forEach(section => {
            section.style.display = section.id === targetId ? "block" : "none";
        });

        // Smooth scrolling to the section
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    }

    // Event listener for navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            showSection(this.getAttribute("href").substring(1));
        });
    });

    // Fix for "Hire Me" button
    hireMeButton.addEventListener("click", function (event) {
        event.preventDefault();
        showSection("contact"); // Show Contact section when "Hire Me" is clicked
    });
});




// document.addEventListener("DOMContentLoaded", function () {
//     const sections = document.querySelectorAll("section");
//     const navLinks = document.querySelectorAll("nav ul li a");

//     // Hide all sections except the first one
//     sections.forEach((section, index) => {
//         if (index !== 0) section.style.display = "none";
//     });

//     navLinks.forEach(link => {
//         link.addEventListener("click", function(event) {
//             event.preventDefault();
//             const targetId = this.getAttribute("href").substring(1);

//             sections.forEach(section => {
//                 if (section.id === targetId) {
//                     section.style.display = "block";
//                 } else {
//                     section.style.display = "none";
//                 }
//             });
//         });
//     });
// });


// window.addEventListener("scroll", function () {
//     let elements = document.querySelectorAll(".fade-in");
//     elements.forEach((el) => {
//         let position = el.getBoundingClientRect().top;
//         let screenHeight = window.innerHeight;
//         if (position < screenHeight) {
//             el.style.opacity = 1;
//             el.style.transform = "translateY(0)";
//         }
//     });
// });

// const testimonials = document.querySelectorAll(".testimonial");
// let index = 0;

// function showTestimonial() {
//     testimonials.forEach(t => t.style.display = "none");
//     testimonials[index].style.display = "block";
//     index = (index + 1) % testimonials.length;
// }

// setInterval(showTestimonial, 4000);
// showTestimonial();
