import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

gallery.addEventListener("click", handleOpenGalleryItem);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}" onclick="return false;">
  <img class="gallery__image" src="${preview}"" alt="${description}"/>
</a>`;
    })
    .join("");
}

function handleOpenGalleryItem(e) {
  const target = e.target;

  if (target.tagName !== "IMG") {
    return;
  }

  let gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });

  gallery.on("error.simplelightbox", function (e) {
    console.log("No image found, go to the next/prev");
  });
}

console.log(galleryItems);
