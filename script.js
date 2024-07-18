const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function toggleNav() {
  const nav = document.getElementById("myNav");
  if (nav.style.width === "100%") {
    closeNav();
    document.getElementById("btn").style.transition = "0.5s";
    document.getElementById("btn").style.color = "black";
  } else {
    openNav();
    document.getElementById("btn").style.transition = "0.5s";
    document.getElementById("btn").style.color = "white";
  }
}

///----- swiper -----///
