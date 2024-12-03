// JavaScript untuk menangani klik pada tombol hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixednav = header.offsetTop;

  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

//google maps
function initMap() {
  // Lokasi Nunmafo
  const lokasiNunmafo = { lat: -10.0784848, lng: 124.080846 };

  // Inisialisasi peta
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: lokasiNunmafo,
  });

  // Tambahkan marker ke lokasi
  new google.maps.Marker({
    position: lokasiNunmafo,
    map: map,
    title: "Nunmafo, Kupang",
  });
}

// scrol untuk card struktur organisasi
const scrollContainer = document.getElementById("scrollContainer");
const scrollLeft = document.getElementById("scrollLeft");
const scrollRight = document.getElementById("scrollRight");

// Scroll ke kiri
scrollLeft.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: -200, // Geser 200px ke kiri
    behavior: "smooth", // Scroll animasi
  });
});

// Scroll ke kanan
scrollRight.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: 200, // Geser 200px ke kanan
    behavior: "smooth", // Scroll animasi
  });
});
