// query the button
let button_big = document.getElementById('python_button');
// query the logo
let logo = document.getElementById('python');
// query the innerHTML spot
let descrip = document.getElementById('py_description');
// add event listener
button_big.addEventListener('click', function () {
    // make the logo dissapear 
    logo.classList.add('dissapear');
    // add the inner HTML 
    descrip.classList.add('show');
    // add timer
    setTimeout(back, 2000);
    function back() {
        console.log("Test Print");
        // change back to original state by removing
            // the added classes
        logo.classList.remove('dissapear');
        descrip.classList.remove('show');
    }
});

// JavaScript Button
// query by ID
let javascript = document.getElementById('js_button');
// query the logo
let js_logo = document.getElementById('javascript');
// query the innerHTML spot
let js_descrip = document.getElementById('js_description');
// add event listener
js_button.addEventListener('click', function () {
    // make the logo dissapear
    js_logo.classList.add('dissapear');
    // add the inner HTML
    js_descrip.classList.add('show');
    // add timer
    setTimeout(js_back, 2000);
    function js_back() {
        console.log("JS Test Print");
        // change back to original state by removing
            // the added classes
        js_logo.classList.remove('dissapear');
        js_descrip.classList.remove('show');
    }
});
