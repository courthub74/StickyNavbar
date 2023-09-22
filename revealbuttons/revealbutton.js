// query the button
let button_big = document.querySelector('.b_front');
// query the logo
let logo = document.getElementById('python');
// query the innerHTML spot
let descrip = document.querySelector('.description');
// add event listener
button_big.addEventListener('click', function () {
    // make the logo dissapear 
    logo.classList.add('dissapear');
    // add the inner HTML 
    descrip.classList.add('show');
    // add timer

    // change back to original state
});