function openModal() {
  const modal = document.getElementById("my-modal");
  if (modal) {
    modal.style.visibility = "visible";
  }
}
const openModalButton = document.getElementById("open-modal-button");
openModalButton.addEventListener("click", openModal);

const cancelButton = document.getElementById("cancel-button");
cancelButton.addEventListener("click", closeModal);

function closeModal() {
  const modal = document.getElementById("my-modal");
  if (modal) {
    modal.style.visibility = "hidden";
  }
}
