// PSUEDO CODE

// Query the Nav Bar

// Upon scroll DOWN set opacity to zero
// just toggle the class
// in css give the extra class that sets it to zero


// Upon scroll UP set opacity to one
// just toggle the class
// in css give the extra class that sets it to one


let navbar = document.querySelector('.the_nav');

console.log(navbar);

window.addEventListener('scroll', function () {
    // set the window scroll to y
    if (window.scrollY >= 20) {
        navbar.classList.add('dissapear');
        console.log("You are Scrolling Down");
    } else if (window.scrollY ) {
        navbar.classList.remove('dissapear');
    }
});