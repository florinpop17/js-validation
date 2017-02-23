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
    } else {
        alert('something is wrong');
    }
}

function formIsValid() {

    // set a flag to true
    var allValid = true;

    // if the title is empty set the flag to false
    if(title.value === ''){
        allValid = false;
    }

    // check each input of type number, validate if it is number and if isn't empty
    inputNumbers.forEach(input => {
        if(input.value === ''){
            allValid = false;
        }
    });

    // check each select to have other value than the default 'no'
    selects.forEach(select => {
        if(select.value === 'no'){
            allValid = false;
        }
    });
    return allValid;
}
