// query the nav bar
let navone = document.querySelector('nav');
// query the text
let textone = document.querySelector('text');

// set the last scroll
let lastScroll = 0;

// event listener to the window
window.addEventListener('scroll', function () {
    // set a current scroll
    let currentScroll = window.scrollY;
    // compare current scroll to last scroll
        // then compare to greater than zero
    if (currentScroll - lastScroll > 0) {
        // Navbar background
        navone.classList.add('dissapearing');
        // Text background
        textone.classList.add('dissapearing');
        // test scroll down
        console.log("You are Scrolling Down");
    } else {
        navone.classList.remove('dissapearing');
        textone.classList.remove('dissapearing');
    }
    lastScroll = currentScroll;
});