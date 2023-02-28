import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryMarkup);
gallery.addEventListener("click", handleClickOnGalleryItems);

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї
function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg" onclick="return false;">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    <style>
  img { 
    -webkit-box-shadow: 0px 0px 11px 0px rgba(99,91,99,1);
    -moz-box-shadow: 0px 0px 11px 0px rgba(99,91,99,1);
    box-shadow: 0px 0px 11px 0px rgba(99,91,99,1);
   }
</style>
  </a>
</div>`;
    })
    .join("");
}

// Відкриття модального вікна по кліку на елементі галереї
function handleClickOnGalleryItems(e) {
  let target = e.target;

  if (target.tagName !== "IMG") {
    return;
  }

  // Викоростання бібліотеки "basicLightbox"
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`
  );

  // Закриття модального вікна за доп клавіши "Esc"
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });

  instance.show();
}

console.log(galleryItems);
