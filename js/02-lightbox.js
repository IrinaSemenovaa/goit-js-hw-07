import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}" onclick="return false;">
  <img class="gallery__image" src="${preview}"" alt="${description}"/>
</a>`;
    })
    .join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
