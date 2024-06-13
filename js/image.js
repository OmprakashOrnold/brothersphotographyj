const crousalImage = [
  "https://zenfolio.creatorcdn.com/a4e63763-b374-4d89-bd0e-99f7203da30b/0/1/0/X2XL/0-0-0/18201670-cc60-47bd-bc44-7e1bb0ac6005/1/1/27.jpg?fjkss=exp=1720024200~hmac=11382815ded447c211f556aaffcf81e35cbdd049d4c82c6fcc2042ede97badb7",
  
  "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1486224920312-8BTPT9FKBINDZ6KR7BNP/HD_DC_SBJR-114.jpg?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1486224581777-VS1L3RYSKWZ5JIL1AI5C/RS_0025A.JPG?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1486224613955-MAXD4YS5OZSCWOGUQ6VH/Brij+holi%2C+Mumbai+A7s.jpg?format=2500w",
  "https://zenfolio.creatorcdn.com/cb2303e7-3d21-4600-b216-d39b6ec9ef0d/0/1/0/X3XL/0-0-0/3575a530-f0e7-44b8-8815-1dad0fa2dcbb/1/1/SID03449.jpg?fjkss=exp=1720882800~hmac=c5b103b515c37fd12eeddc1836fffd6e9db9cc64e4a7b01725985688ae88c304&quot"

];


const homeImages = [
  "https://iili.io/JrO5JIt.jpg",
  "https://iili.io/JrORtEJ.jpg",
  "https://iili.io/JrO59pI.jpg",
  "https://iili.io/JrORykN.jpg"  
];

const slideshowContainer = document.querySelector(".slideshow");

// Loop through each URL in the array
slideshowHomeImages.forEach((imageUrl, index) => {
  // Create an image element for each URL
  const imgElement = document.createElement("img");
  imgElement.src = imageUrl;
  imgElement.alt = `Image ${index + 1}`; // Provide a meaningful alt text
  imgElement.classList.add("carousel-image"); // Add any necessary classes

  // Append the image element to the container
  carouselContainer.appendChild(imgElement);
});
