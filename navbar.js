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

// query the top-nav
let top_navbar = document.querySelector('.the_top_nav');
// query the top logo
let top_logo = document.getElementById('courdevs_top_logo');
// query the menu burger
let menu_burger = document.getElementById('top_hamburger');
// query the job description
let job_description = document.querySelector('.you');
// on home screen make it dissapear
// on up scroll make it appear

// set a last scroll
let lastScroll = 0;


// The 2 NavBars

// query the words 

// set css class to opacity 0
// when scroll up to opacity 1 

// Write a function that makes the
    // navbar dissapear after reappearing on scroll up
        // and sitting idle for 5 seconds
// function out () {
//     console.log("It's been 5 seconds since your scroll");
//     top_navbar.classList.add('dissapear');
//     menu_burger.classList.add('dissapear');
// };

// function out_reverse () {
//     console.log("You have reversed the out function");
//     top_navbar.classList.remove('dissapear');
//     menu_burger.classList.remove('dissapear');
// };

// Perform a setInterval when calling the function
    // and store it in a variable
// setInterval(out, 5000);

// NOW the issue is to restart the process
    // after you clear the setInterval at the top
        // of the page

// Let's use the boolean method used in a timer
    // where you hit the button to stop time and
        // resume time

// FIRST start to be currentScroll = 0;

window.addEventListener('scroll', function () {
    // set a current scroll
    let currentScroll = window.scrollY; 
    // compare current scroll to last scroll
        // then compare to greater than zero
    if (currentScroll - lastScroll > 0) {
        // Navbar background
        top_navbar.classList.add('dissapear');
        // Navbar Logo
        // top_logo.classList.add('dissapear');
        // Menu Burger
        menu_burger.classList.add('dissapear');
        // Job Description
        // job_description.classList.add('appear');
        console.log("You are Scrolling Down");
        // START THE timeounav interval again
    } else {
        // scrolled up -- navbar show
        top_navbar.classList.remove('dissapear');
        menu_burger.classList.remove('dissapear');
        job_description.classList.add('appear');
        // Time the Navbar to dissapear again after
            // 5 Seconds
        setInterval(out, 5000);
        function out () {
            console.log("It's been 5 seconds since your scroll");
            top_navbar.classList.add('dissapear');
            menu_burger.classList.add('dissapear');
        };
        // also change the .you class
            // make it appear
        // This is at top of the page
        if (currentScroll == 0) {
            job_description.classList.remove('appear');
            // terminate the out Interval
            
            // reverse out function
            function out_reverse () {
                console.log("You have reversed the out function");
                top_navbar.classList.remove('dissapear');
                menu_burger.classList.remove('dissapear');
            };
            out_reverse();
        }
    } 
    lastScroll = currentScroll;
});

// ADD another window event listener to set opacity
    // back to zero when scroll is equal to zero 


// Use Intersection Observer to make the floating navbar job description dissapear at
    // when the home page job description appears of the screen

