var form = document.getElementById('add-form');
var inputNumbers = document.querySelectorAll('input.number');
var selects = document.querySelectorAll('select');
var title = document.getElementById('title')

// damaged checkbox and textarea variables
var damagedCheckbox = document.getElementById('damaged');
var damageDetails = document.getElementById('damage-details');
var damageDetailsContainer = document.getElementById('damage-details-container');

// select brand variables
var brandSelect = document.getElementById('brand');

// select color
var colorSelect = document.getElementById('color');

// First we reset the form to default
form.reset();

// Form validation on submit
form.onsubmit = function(e){
    e.preventDefault();

    // remove error messages and clear input/select fields
    clearFields();

    // validate the form
    if(formIsValid()){
        alert('Form submitted!');
    }
}

// show/hide the damage details container based on the damaged checkbox
damagedCheckbox.onchange = function(){
    if(this.checked){
        damageDetailsContainer.style.display = 'block';
    } else {
        damageDetailsContainer.style.display = 'none';
    }
}

// show corresponding image based on the selected brand
brandSelect.onchange = function(){
    var brand = this.value;
    var images = document.querySelectorAll('.brand-image-holder img');

    // first we hide all images
    images.forEach(image => {
        image.style.display = 'none';
    });

    // show image only if the brand different than 'no', which is the default value of the select
    if(brand !== 'no'){
        document.querySelectorAll('.'+brand)[0].style.display = 'block';
    }
}

// change color of the selected-color span corresponding to the selected color
colorSelect.onchange = function(){
    var color = this.value;
    var selectedColorSpan = document.querySelectorAll('.selected-color')[0];

    if(color !== 'no'){
        selectedColorSpan.style.backgroundColor = color;
        selectedColorSpan.style.borderWidth = '1px';
    } else {
        selectedColorSpan.style.backgroundColor = 'transparent';
        selectedColorSpan.style.borderWidth = '0px';
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
        } else {
            if(isNaN(input.value)){
                allValid = false;
                createPTag('Please enter a valid number!', input);
            }
        }
    });

    // check each select to have other value than the default 'no'
    selects.forEach(select => {
        if(select.value === 'no'){
            allValid = false;
            createPTag('Select an option!', select);
        }
    });

    // if the damaged checkbox is checked, add validation on the details field
    if(damagedCheckbox.checked && damageDetails.value === ''){
        allValid = false;
        createPTag('Add crash details!', damageDetails);
    }

    // return the flag
    return allValid;
}

function createPTag(text, element){
    // create a p tag element
    var p = document.createElement('p');

    // set the class to text-error
    // this will give it the error styling
    p.className = 'text-error';

    // add the text to the innerHTML
    p.innerHTML = text;

    // append the p tag after the input/select field
    element.parentNode.insertBefore(p, element.nextSibling);

    // add error class to the input/select field
    //element.className = 'error-field'
}

function clearFields() {

    // remove all the error messages p tags
    var errorP = document.querySelectorAll('.text-error');
    errorP.forEach(p => {
        p.parentNode.removeChild(p);
    });

    // remove error classes from input/select tags
    var errorFields = document.querySelectorAll('.error-field');

    errorFields.forEach(field => {
        field.className = '';
    });
}
