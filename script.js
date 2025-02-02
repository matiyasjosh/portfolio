function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress");

  skillBars.forEach((bar) => {
    const targetWidth = bar.dataset.targetWidth; // Get target width from data attribute
    bar.style.transition = "width 1.5s ease-in-out";
    bar.style.width = targetWidth;
  });
}

const skillsSection = document.querySelector(".skills");
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    animateSkillBars();
    observer.unobserve(skillsSection);
  }
});

observer.observe(skillsSection);

// the typing animation
new TypeIt("#simpleUsage", {
  speed: 100,
  deleteSpeed: 90,
  waitUntilVisible: true,
  loop: true,
})
  .type("Frontend Developer & UI/UX Enthusiast.")
  .pause(2500) // Pause before deleting
  .delete() // Delete the string
  .type("I am up to work on frontend projects!")
  .pause(2500) // Pause before deleting
  .delete() // Delete the string
  .go();

// for the scrollbar
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 50) {
//     document.body.classList.add("scrolled");
//   } else {
//     document.body.classList.remove("scrolled");
//   }
// });

// Scroll-based animation
function handleScrollAnimation() {
  const elements = document.querySelectorAll(".animate-on-scroll");
  const viewportHeight = window.innerHeight;

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const elementCenterY = rect.top + rect.height / 2;
    const progress = Math.max(
      0,
      Math.min(1, 1 - elementCenterY / viewportHeight)
    );

    // Calculate transformations
    const translateX = -100 * progress; // Move from 0 to -100%
    const translateY = 50 * progress; // Move down by 50% of viewport
    const scale = 1 - 0.2 * progress; // Scale down to 0.8

    element.style.transform = `
  translate(${translateX}%, ${translateY}%)
  scale(${scale})
`;

    // Adjust horizontal alignment
    if (progress > 0.5) {
      element.style.left = "0";
      element.style.right = "auto";
    } else {
      element.style.right = "0";
      element.style.left = "auto";
    }
  });
}

// Throttle scroll events
let isScrolling;
window.addEventListener("scroll", () => {
  window.cancelAnimationFrame(isScrolling);
  isScrolling = window.requestAnimationFrame(handleScrollAnimation);
});

// Initial check
handleScrollAnimation();

// fade in animation
document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.querySelector(".skills")
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    ) // Trigger when 10% of the element is visible
  
    observer.observe(skillsSection)
})
  

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".animate-on-scroll")
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    ) // Trigger when 10% of the element is visible
  
    sections.forEach((section) => {
      observer.observe(section)
    })
})  