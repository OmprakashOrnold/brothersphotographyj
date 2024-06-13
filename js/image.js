const crousalImage = [
 "https://zenfolio.creatorcdn.com/39a5f814-91f3-423e-a808-d8db771af4d9/0/1/0/X3XL/0-0-0/9600834b-3a53-40e6-b3f4-f444e66c47a8/1/1/SID02.jpg?fjkss=exp=1723442400~hmac=73870060fd92feb7294c5d8cc212050dfbcdb581226f089a019d089862c356a2",
  "https://zenfolio.creatorcdn.com/39a5f814-91f3-423e-a808-d8db771af4d9/0/1/0/X3XL/0-0-0/4d0ba965-d111-4314-8e67-bf895fc7036a/1/1/SID01.jpg?fjkss=exp=1723442400~hmac=73870060fd92feb7294c5d8cc212050dfbcdb581226f089a019d089862c356a2",
 "https://zenfolio.creatorcdn.com/39a5f814-91f3-423e-a808-d8db771af4d9/0/1/0/X3XL/0-0-0/f1a035ce-5616-48b8-ab61-fea6b412f67d/1/1/SID03.jpg?fjkss=exp=1723442400~hmac=73870060fd92feb7294c5d8cc212050dfbcdb581226f089a019d089862c356a2",
 "https://zenfolio.creatorcdn.com/39a5f814-91f3-423e-a808-d8db771af4d9/0/1/0/X3XL/0-0-0/7eb5c472-5eed-4733-af4c-f912970777fd/1/1/SID04.jpg?fjkss=exp=1723442400~hmac=73870060fd92feb7294c5d8cc212050dfbcdb581226f089a019d089862c356a2",
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
