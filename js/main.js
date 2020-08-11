(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
		modalMenu: document.querySelector("[data-modal-menu]"),
		bodyNoScroll: document.querySelector("[data-no-scroll]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("overlay-is-hidden");
		refs.modalMenu.classList.toggle("mobile-menu-animation");
		refs.bodyNoScroll.classList.toggle("no-scroll");
	}
	refs.modal.addEventListener("click", ({ target }) => {
		target.getAttribute("data-modal-link") === "" && toggleModal();
	});
})();
