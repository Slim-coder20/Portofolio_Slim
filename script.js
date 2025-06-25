const typed = new Typed(".multiple", {
  strings: ["Développeur Web Full-Stack", "Web designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// traitement du menu-burger responsive max-width 768px avec un temps d'affichage via le setTimeout //
const menuBurger = document.getElementById("menu-burger");
const navigation = document.querySelector(".navigation");

let menuTimeout;

menuBurger.addEventListener("click", () => {
  navigation.classList.toggle("active");

  // si le menu vient de s'ouvrir on lance le timeout //
  if (navigation.classList.contains("active")) {
    clearTimeout(menuTimeout);
    menuTimeout = setTimeout(() => {
      navigation.classList.remove("active");
    }, 2000);
  } else {
    clearTimeout(menuTimeout);
  }
});
