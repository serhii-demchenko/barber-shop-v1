(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("overlay-is-hidden");
	}
	refs.modal.addEventListener("click", ({ target }) => {
		target.getAttribute("data-modal-link") === "" && toggleModal();
	});
})();
