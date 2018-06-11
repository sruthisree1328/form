function addDetails() {
    console.log('Add button clicked');
    if (validateFirstName()) {
        if (validateFullName()) {
            if (validateDesignation()) {
                if (validateemployee_code()) {
                    if (validatebloodgroup()) {
                        if (validatereason()) {
                            if (validateDateofEmployment()) {
                                if(validateemailId()){
                                    if(validateemployee_phnum()){
                                        if(validateemergency_phnum()){
                                            postData();
                                        }
                                        else{
                                            displayErrorMessageForemergency_phnum();
                                        }
                                    }
                                   else{
                                       displayErrorMessageForemployee_phnum();
                                   }
                                }
                                else{
                                    displayErrorMessageForemailId();
                                }  
                            }
                            else {
                                displayErrorMessageForDateofEmployment();
                            }
                        }
                        else {
                            displayErrorMessageForreason();
                        }
                    }
                    else {
                        displayErrorMessageForbloodgroup();
                    }
                }
                else {
                    displayErrorMessageForemployee_code();
                }
            }
            else {
                displayErrorMessageForDesignation();
            }
        }
        else {
            displayErrorMessageForFullName();
        }
    } else {
        displayErrorMessageForFirstName();
    }

}

function displayErrorMessageForFirstName() {
    $('#errForFirstName').show();
}

function displayErrorMessageForFullName() {
    $('#errForFullName').show();
}
function displayErrorMessageForDesignation() {
    $('#errForDesignation').show();
}
function displayErrorMessageForemployee_code() {
    $('#errForemployee_code').show();
}
function displayErrorMessageForbloodgroup() {
    $('#errForbloodgroup').show();
}
function displayErrorMessageForreason() {
    $('#errForreason').show();
}
function displayErrorMessageForDateofEmployment() {
    $('#errForDateofEmployment').show();
}
function displayErrorMessageForemailId(){
    $('#errForemailId').show();
}
function displayErrorMessageForemployee_phnum(){
    $('#errForemployee_phnum').show();
}
function displayErrorMessageForemergency_phnum(){
    $('#errForemergency_phnum').show();
}

function validateFirstName() {
    const firstName = $('#firstName').val();
    if (firstName === '') {
        return false;
    }
    return true;
}

function validateFullName() {
    const fullName = $('#fullName').val();
    if (fullName === '') {
        return false;
    }
    return true;
}

function validateDesignation() {
    const Designation = $('#Designation').val();
    if (Designation === '') {
        return false;
    }
    return true;
}

function validateemployee_code() {
    const employee_code = $('#employee_code').val();
    if (employee_code === '' || employee_code === /^[a-zA-Z]+$/) {
        return false;
    }
    return true;
}

function validatebloodgroup() {
    const bloodgroup = $('#bloodgroup').val();
    if (bloodgroup === '') {
        return false;
    }
    return true;
}

function validatereason() {
    if (typeof($('input[name=reason]:checked').val())=== "undefined") {
        return false;
    }
    return true;
}

function validateDateofEmployment() {
    const DateofEmployment = $('#DateofEmployment').val();
    if (DateofEmployment === '') {
        return false;
    }
    return true;
}

function validateemailId(){
    const emailId=$('#emailId').val();
    if (emailId === '') {
        return false;
    }
    return true;
}

function validateemployee_phnum(){
    const employee_phnum=$('#employee_phnum').val();
    if (employee_phnum === '') {
        return false;
    }
    return true;
}

function validateemergency_phnum(){
    const emergency_phnum=$('#emergency_phnum').val();
    if (emergency_phnum === '') {
        return false;
    }
    return true;
}


function postData() {
    const data = {
        firstName: $('#firstName').val(),
        fullName: $('#fullName').val(),
        Designation: $('#Designation').val(),
        employee_code: $('#employee_code').val(),
        bloodgroup: $('#bloodgroup').val(),
        reason: $('#reason').val(),
        DateofEmployment: $('#DateofEmployment').val(),
        emailId:$('#emailId').val(),
        employee_phnum:$('#employee_phnum').val(),
        emergency_phnum:$('#emergency_phnum').val()
    };
    $.ajax({
        type: "POST",
        url: 'https://form-ee403.firebaseio.com/form.json',
        data: JSON.stringify(data),
        success: onPostSuccess,
    });
}

const onPostSuccess = (data) => {
    console.log('Posting to firebase success');
    console.log(data);
}

$('document').ready(() => {
    $('.span-for-errors').hide();
});