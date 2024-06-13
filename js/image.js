const crousalImage = [
 "https://zenfolio.creatorcdn.com/39a5f814-91f3-423e-a808-d8db771af4d9/0/1/0/X3XL/0-0-0/9600834b-3a53-40e6-b3f4-f444e66c47a8/1/1/SID02.jpg?fjkss=exp=1723442400~hmac=73870060fd92feb7294c5d8cc212050dfbcdb581226f089a019d089862c356a2",
  "https://zenfolio.creatorcdn.com/39a5f814-91f3-423e-a808-d8db771af4d9/0/1/0/X3XL/0-0-0/4d0ba965-d111-4314-8e67-bf895fc7036a/1/1/SID01.jpg?fjkss=exp=1723442400~hmac=73870060fd92feb7294c5d8cc212050dfbcdb581226f089a019d089862c356a2",
 "https://zenfolio.creatorcdn.com/39a5f814-91f3-423e-a808-d8db771af4d9/0/1/0/X3XL/0-0-0/f1a035ce-5616-48b8-ab61-fea6b412f67d/1/1/SID03.jpg?fjkss=exp=1723442400~hmac=73870060fd92feb7294c5d8cc212050dfbcdb581226f089a019d089862c356a2",
 "https://zenfolio.creatorcdn.com/39a5f814-91f3-423e-a808-d8db771af4d9/0/1/0/X3XL/0-0-0/7eb5c472-5eed-4733-af4c-f912970777fd/1/1/SID04.jpg?fjkss=exp=1723442400~hmac=73870060fd92feb7294c5d8cc212050dfbcdb581226f089a019d089862c356a2",
  "https://zenfolio.creatorcdn.com/39a5f814-91f3-423e-a808-d8db771af4d9/0/1/0/X3XL/0-0-0/4052f7dc-607e-412f-9713-95777f2f99b4/1/1/SID07.jpg?fjkss=exp=1723442400~hmac=73870060fd92feb7294c5d8cc212050dfbcdb581226f089a019d089862c356a2",
  "https://zenfolio.creatorcdn.com/39a5f814-91f3-423e-a808-d8db771af4d9/0/1/0/X3XL/0-0-0/8955926b-f5da-47a1-ab2b-742fc0183c69/1/1/SID05.jpg?fjkss=exp=1723442400~hmac=73870060fd92feb7294c5d8cc212050dfbcdb581226f089a019d089862c356a2",
"https://zenfolio.creatorcdn.com/39a5f814-91f3-423e-a808-d8db771af4d9/0/1/0/X3XL/0-0-0/ff4d60b5-8abe-4b0e-8138-5561509b6e3d/1/1/SID08.jpg?fjkss=exp=1723442400~hmac=73870060fd92feb7294c5d8cc212050dfbcdb581226f089a019d089862c356a2",
"https://zenfolio.creatorcdn.com/39a5f814-91f3-423e-a808-d8db771af4d9/0/1/0/X3XL/0-0-0/385c2569-fbd3-43a9-ad40-8512e99017cc/1/1/SID010.jpg?fjkss=exp=1723442400~hmac=73870060fd92feb7294c5d8cc212050dfbcdb581226f089a019d089862c356a2",
"https://zenfolio.creatorcdn.com/39a5f814-91f3-423e-a808-d8db771af4d9/0/1/0/X3XL/0-0-0/b0006765-37c5-41dc-bf72-19c99d9b2162/1/1/SID09.jpg?fjkss=exp=1723442400~hmac=73870060fd92feb7294c5d8cc212050dfbcdb581226f089a019d089862c356a2",








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
