var form = document.getElementById('add-form');
var inputNumbers = document.querySelectorAll('input.number');
var selects = document.querySelectorAll('select');
var title = document.getElementById('title')
var damagedCheckbox = document.getElementById('damaged');
var damageDetails = document.getElementById('damageDetails');
var damageDetailsContainer = document.getElementById('damage-details-container');

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
    if(damagedCheckbox.checked){

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
    element.className = 'error-field'
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
