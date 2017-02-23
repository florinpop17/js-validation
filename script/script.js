var form = document.getElementById('add-form');

// First we reset the form to default
form.reset();

// Form validation on submit
form.onsubmit = function(e){
    e.preventDefault();
}
