document.getElementById('employeeForm').addEventListener('submit', function(event){
    // Prevent from submission
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('errorMessages').innerHTML = '';

    // Get from values
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('email').value;
    var position = document.getElementById('position').value;
    var salary = document.getElementById('salary').value;
    var gender = document.getElementById('gender').value;
    var age = document.getElementById('age').value;

    // Initialise an array to store error messages
    var errorMessages = [];

    // Name validation
    if (name === '') {
        errorMessages.push('Name is required');
    }

    if (surname === '') {
        errorMessages.push('Surname is required');
    }
    if (email === '') {
        errorMessages.push('Email is required');
    }

    // Position validation
    if(position === ''){
        errorMessages.push('Position is required');
    }

    // Salary validation
    if (salary === '' || salary <= 0){
        errorMessages.push('Salary must be a positive number.');
    }

    if (gender === '') {
        errorMessages.push('Gender is required');
    }

    if (age === '') {
        errorMessages.push('Age is required');
    }
    // Display error messages
    if ( errorMessages.length > 0){
        var errorHtml = '<ul>';
            for (var i = 0; i < errorMessages.length; i++) {
                errorHtml += '<li>' + errorMessages[i] + '<li>';
            }
            errorHtml += '<ul>';
            document.getElementById('errorMessages').innerHTML = errorHtml;
    } else {
        // Add employee to the table if no errors
        var table = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
        var newRow = table.insertRow();

        // Insert other data
        newRow.insertCell(0).innerText = name;
        newRow.insertCell(1).innerText = surname;
        newRow.insertCell(2).innerText = email;
        newRow.insertCell(3).innerText = position;
        newRow.insertCell(4).innerText = salary;
        newRow.insertCell(5).innerText = gender;
        newRow.insertCell(6).innerText = age;

        document.getElementById('deleteAll').addEventListener('click', function(){
            var tablebody = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
            tablebody.innerHTML = ''; 

            
        });
        // Reset the form
        document.getElementById('employeeForm').reset();
    }
});