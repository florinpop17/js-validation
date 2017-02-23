var form = document.getElementById('add-form');
var inputNumbers = document.querySelectorAll('input.number');
var selects = document.querySelectorAll('select');
var title = document.getElementById('title')
var damaged = document.getElementById('damaged');

// First we reset the form to default
form.reset();

// Form validation on submit
form.onsubmit = function(e){
    e.preventDefault();

    // validate the form
    if(formIsValid()){
        alert('All good!');
    }
}

function formIsValid() {

    // set a flag to true
    var allValid = true;

    // if the title is empty set the flag to false
    if(title.value === ''){
        allValid = false;

        // Create an error message
        createPTag('Title is required!', title);
    }

    // check each input of type number, validate if it is number and if isn't empty
    inputNumbers.forEach(input => {
        if(input.value === ''){
            allValid = false;
            createPTag('Field is required!', input);
        }

        if(isNaN(input.value)){
            allValie = false;
            createPTag('Please enter a number!' input);
        }
    });

    // check each select to have other value than the default 'no'
    selects.forEach(select => {
        if(select.value === 'no'){
            allValid = false;
            createPTag('Select a valid option!', select);
        }
    });

    // return the flag
    return allValid;
}

function createPTag(text, parent){
    // create a p tag element
    var p = document.createElement('p');

    // set the class to text-error
    // this will give it the error styling
    p.className = 'text-error';

    // add the text to the innerHTML
    p.innerHTML = text;

    // append the p tag after the input/select field
    parent.parentNode.insertBefore(p, parent.nextSibling);

    // add error class to the input/select field
    parent.className = 'error-field'
}
