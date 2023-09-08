// PSUEDO CODE

// Query the Nav Bar

// Upon scroll DOWN set opacity to zero
// just toggle the class
// in css give the extra class that sets it to zero


// Upon scroll UP set opacity to one
// just toggle the class
// in css give the extra class that sets it to one

// query the nav bar
let navbar = document.querySelector('.the_nav');

// set a last scroll
let lastScroll = 0;

console.log(navbar);

window.addEventListener('scroll', function () {
    // set a current scroll
    let currentScroll = window.scrollY; 
    // compare current scroll to last scroll
        // then compare to greater than zero
    if (currentScroll - lastScroll > 0) {
        navbar.classList.add('dissapear');
        console.log("You are Scrolling Down");
    } else {
        // scrolled up -- navbar show
        // navbar.classList.add("scroll-up");
        navbar.classList.remove("dissapear");
    }
    lastScroll = currentScroll;
});