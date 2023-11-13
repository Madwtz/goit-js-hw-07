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
        link.href = item.original;
  
        const img = document.createElement('img');
        img.classList.add('gallery__image');
        img.src = item.preview;
        img.alt = item.alt;
  
        link.appendChild(img);
        listItem.appendChild(link);
        gallery.appendChild(listItem);
      });
    }
  
    renderGallery();

    gallery.addEventListener('click', function (event) {
      event.preventDefault();
      if (event.target.nodeName === 'IMG') {
        const source = event.target.dataset.source;
        openModal(source);
      }
    });
  
    // Function to open the modal
      const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });
  
  
    // Initialize SimpleLightbox
  });
  


