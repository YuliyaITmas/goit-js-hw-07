import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// function makeGalleryCardsMarkup(gallery) {
//   return gallery
//     .map(({ preview, original, description }) => {
//       return `
// <a class="gallery__item" href="${original}">
//   <img 
//   class="gallery__image" 
//   src="${preview}" 
//   alt="${description}" />
// </a>`;
//     })
//     .join("");
// }


function makeGalleryCardsMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
<li><a class="gallery__item" href="${original}">
  <img 
  class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a></li>`;
    })
    .join("");
}


const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = makeGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);


let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    scrollZoom: false,
  });





