const openModalButton = document.querySelector(".open-modal");
const closeModalButton = document.querySelector(".close-modal");
const fade = document.querySelector("#fade");
const modal = document.querySelector("#modal");

const toggleModal = () => {
  [modal, fade].forEach((e) => {
    e.classList.toggle("hide");
  });
};

[openModalButton, closeModalButton, fade].forEach((e) => {
  e.addEventListener('click', () => toggleModal());
});
