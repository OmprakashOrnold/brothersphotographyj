const imageUrls =[
  "https://zenfolio.creatorcdn.com/5b852109-633c-456f-a158-81568697c58a/0/1/0/X2XL/0-0-0/fb4e2ab4-2e6c-4efc-9aa0-699d276f65d1/1/1/1.jpg?fjkss=exp=1729168200~hmac=3039ad11ab1fb1e84a193e3fa7b0c351eafe4fba37421e5c94ea0309316bf8d6",
  "https://zenfolio.creatorcdn.com/5b852109-633c-456f-a158-81568697c58a/0/1/0/X2XL/0-0-0/4b14078d-9973-498e-bee0-985aa660b49b/1/1/2.jpg?fjkss=exp=1729168200~hmac=3039ad11ab1fb1e84a193e3fa7b0c351eafe4fba37421e5c94ea0309316bf8d6",
  "https://zenfolio.creatorcdn.com/5b852109-633c-456f-a158-81568697c58a/0/1/0/X2XL/0-0-0/032da74d-3865-4163-b882-316f638f2ce0/1/1/3.jpg?fjkss=exp=1729168200~hmac=3039ad11ab1fb1e84a193e3fa7b0c351eafe4fba37421e5c94ea0309316bf8d6",
  "https://zenfolio.creatorcdn.com/5b852109-633c-456f-a158-81568697c58a/0/1/0/X2XL/0-0-0/dee43c91-dd77-4e72-a0d4-3f3a321ca287/1/1/4.jpg?fjkss=exp=1729168200~hmac=3039ad11ab1fb1e84a193e3fa7b0c351eafe4fba37421e5c94ea0309316bf8d6",
  "https://zenfolio.creatorcdn.com/5b852109-633c-456f-a158-81568697c58a/0/1/0/X2XL/0-0-0/1f68abc2-c7c8-4568-8d58-91269557f591/1/1/5.jpg?fjkss=exp=1729168200~hmac=3039ad11ab1fb1e84a193e3fa7b0c351eafe4fba37421e5c94ea0309316bf8d6",
  "https://zenfolio.creatorcdn.com/5b852109-633c-456f-a158-81568697c58a/0/1/0/X2XL/0-0-0/f325e1f5-53e9-45e0-9cb8-c2ab8a411519/1/1/6.jpg?fjkss=exp=1729168200~hmac=3039ad11ab1fb1e84a193e3fa7b0c351eafe4fba37421e5c94ea0309316bf8d6",
  "https://zenfolio.creatorcdn.com/5b852109-633c-456f-a158-81568697c58a/0/1/0/X2XL/0-0-0/4d20c855-2190-4af0-b98d-e0b491ad731b/1/1/7.jpg?fjkss=exp=1729168200~hmac=3039ad11ab1fb1e84a193e3fa7b0c351eafe4fba37421e5c94ea0309316bf8d6",
  "https://zenfolio.creatorcdn.com/5b852109-633c-456f-a158-81568697c58a/0/1/0/X2XL/0-0-0/b0c9fe28-d7bf-4d29-a8a8-cdb3555cdd8a/1/1/8.jpg?fjkss=exp=1729168200~hmac=3039ad11ab1fb1e84a193e3fa7b0c351eafe4fba37421e5c94ea0309316bf8d6",
  "https://zenfolio.creatorcdn.com/5b852109-633c-456f-a158-81568697c58a/0/1/0/X2XL/0-0-0/3a12811a-9b81-4a29-ac63-c2c6152f6f6f/1/1/9.jpg?fjkss=exp=1729168200~hmac=3039ad11ab1fb1e84a193e3fa7b0c351eafe4fba37421e5c94ea0309316bf8d6"
];

const slideshow = document.getElementById("slideshow");

imageUrls.forEach((url, index) => {
  const img = document.createElement("img");
  img.src = url;
  img.classList.add(index === 0 ? "active" : "inactive");
  slideshow.appendChild(img);
});

let current = 0;

function changeImage() {
  const images = document.querySelectorAll(".slideshow img");
  images[current].classList.remove("active");
  images[current].classList.add("inactive");
  current = (current + 1) % images.length;
  images[current].classList.add("active");
  images[current].classList.remove("inactive");
}

setInterval(changeImage, 3000);
