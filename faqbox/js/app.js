const gettoggles = document.querySelectorAll('.faq-toggle');
// console.log(gettoggles);

gettoggles.forEach(gettoggle => {
    // console.log(gettoggles);

    gettoggle.addEventListener('click', () => {
        // console.log('hay');
        gettoggle.parentNode.classList.toggle('active');
    })
})