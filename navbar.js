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

// The 2 NavBars

// query the words 

// set css class to opacity 0
// when scroll up to opacity 1 

let your_name = document.querySelector('.you');

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
        // also change the .you class
            // make it appear
        your_name.classList.add('on_scroll_up');
    } 
    // NOW make the words dissapear
    lastScroll = currentScroll;
});


