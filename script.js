// Loader disappear
window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
});

// Cursor follow
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Section reveal on scroll
const revealSections = document.querySelectorAll(".section");

const revealOnScroll = () => {
  revealSections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("reveal");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
