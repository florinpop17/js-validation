var form = document.getElementById('add-form');
var inputs = document.querySelectorAll('input[type="text"]');
var selects = document.querySelectorAll('select');
var damagedCheckbox = document.getElementById('damaged');

// First we reset the form to default
form.reset();

// Form validation on submit
form.onsubmit = function(e){
    e.preventDefault();

    if(formIsValid()){
        alert('All good!');
    } else {
        alert('something is wrong');
    }
}

function formIsValid() {
    var allValid = true;
    inputs.forEach(input => {
        if(input.value === ''){
            allValid = false;
        }
    });
    selects.forEach(select => {
        if(select.value === 'no'){
            allValid = false;
        }
    });
    return allValid;
}
