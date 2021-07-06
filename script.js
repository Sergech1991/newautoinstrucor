'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const phoneButton = document.querySelector('.phone__button');
  const modal = document.querySelector('.modal');
  const closeBtn = document.querySelector('.modal__close-btn');
  const infoButton = document.querySelectorAll('.info__button');


  function openModal() {
    modal.classList.add('modal__opened');
  }

  infoButton.forEach(item => {
    item.addEventListener('click', () => openModal());
  });

  //отмена отправки формы
  function submitForm(evt) {
    evt.preventDefault();
  }

  function closeModal() {
    modal.classList.remove('modal__opened');
  }

  //закрытие модального окна кликом на оверлей
  modal.addEventListener('click', (evt) => {
    if (evt.target === modal) {
        closeModal();
      }
  });

  //закрытие модального окна на Esc
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' && modal.classList.contains('modal__opened')) {
        closeModal();
    }
  });



  phoneButton.addEventListener('click', () => openModal());
  closeBtn.addEventListener('click', () => closeModal());







});
