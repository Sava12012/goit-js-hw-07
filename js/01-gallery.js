// Завдання 1 - галерея зображень
// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. 
// Подивися демо відео роботи галереї.
// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.Використовуй CDN сервіс jsdelivr і 
// додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям.Використовуй готову 
// розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data - атрибуті source на елементі < img >,
// і вказуватися в href посилання.Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

// Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач 
// буде перенаправлений на іншу сторінку.Заборони цю поведінку за замовчуванням.
// Закриття з клавіатури ( не обовязково )
// Додай закриття модального вікна після натискання клавіші Escape.Зроби так, щоб прослуховування 
// клавіатури було тільки доти, доки відкрите модальне вікно.Бібліотекаи basicLightbox містить метод 
// для програмного закриття модального вікна.

import { galleryItems } from './gallery-items.js';
// Change code below this line

const paletteContainer = document.querySelector('.gallery');
const cardsMarkUp = createGalleryMarkup(galleryItems);
let instance;
let onCliskClose;

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkUp);
// console.log(createGalleryMarkup(galleryItems));

paletteContainer.addEventListener('click', onPaletteContainerClick );

function createGalleryMarkup(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `
          <div class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </div>
        `;
      })
      .join('');
     
}
function onPaletteContainerClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    instance = basicLightbox.create(
        ` <img src="${evt.target.dataset.source}"/>`
    );
    instance.show(onCliskClose);
  // console.log(modalWindow.show(onCliskClose));
  window.addEventListener('keydown', onEscapeClose);
}
function onEscapeClose(event) {
  // console.log(event.code);
  if (event.code === "Escape") {
    instance.close();
  };
};
