    // Menu opener hamburger
    $(function(){
	
        $('.menuBurger').on('click', function(){
            
            $('.header-wrapper').slideToggle(300, function(){
                
                if($(this).css('display') === 'none'){
                    $(this).removeAttr('style');
            }
            
        });
        
     });
        
    });

    // (() => {
    //     const refs = {
    //       openModalBtn: document.querySelector('[data-modal-open]'),
    //       closeModalBtn: document.querySelector('[data-modal-close]'),
    //       modal: document.querySelector('[data-modal]'),
    //     };
      
    //     refs.openModalBtn.addEventListener('click', toggleModal);
    //     refs.closeModalBtn.addEventListener('click', toggleModal);
      
    //     function toggleModal() {
    //       refs.modal.classList.toggle('is-hidden');
    //     }
    //   })();
    