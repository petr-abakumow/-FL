console.log('Привет, мир!');

const popupOpenCloseButton = document.querySelector('.menu-mobile-icon');
const popupOpenedImage = document.querySelector('.menu-mobile-icon__image');
const popupClosedImage = document.querySelector('.popup-close-icon');
const popup = document.querySelector('.popup-menu');


popupOpenCloseButton.addEventListener('click', () => {
    if (popup.classList.contains('display-flex') === false) {
        popup.classList.add('display-flex');
        popupOpenedImage.classList.add('display-none');
        popupClosedImage.classList.add('display-flex');
    } else {
        popup.classList.remove('display-flex');
        popupOpenedImage.classList.remove('display-none');
        popupClosedImage.classList.remove('display-flex');
    }
})

