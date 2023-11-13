import { galleryItems } from './gallery-items.js';

document.addEventListener('DOMContentLoaded', function () {
  
    const gallery = document.querySelector('.gallery');
  console.log(galleryItems);
    // Function to create and render gallery items
    function renderGallery() {
      galleryItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('gallery__item');
  
        const link = document.createElement('a');
        link.classList.add('gallery__link');
        link.href = item.preview;
  
        const img = document.createElement('img');
        img.classList.add('gallery__image');
        img.src = item.original;
        img.alt = 'Image description';
        img.setAttribute('data-source', item.preview);
  
        link.appendChild(img);
        listItem.appendChild(link);
        gallery.appendChild(listItem);
      });
    }
  
    renderGallery();
  
    // Event delegation for opening the modal
    gallery.addEventListener('click', function (event) {
      event.preventDefault();
      if (event.target.nodeName === 'IMG') {
        const source = event.target.dataset.source;
        openModal(source);
      }
    });
  
    // Function to open the modal
    function openModal(source) {
      const instance = basicLightbox.create(`
        <img src="${source}" width="800" height="600">
      `);
  
      instance.show();
    };
  });
  