// Set up a doc ready so nothing happens too early

$(document).ready(function(){
    // New jQuery method... submit
    $('.sign-up-form').submit(function(event){
        event.preventDefault();
        console.log('User submitted the form!');
        $('input').each(function(){
            var currentInputClassName = $(this).attr('class');
            console.log(currentInputClassName);
            // target the corresponding error div for THIS input tag
            var errorDivClassName = "." + currentInputClassName + '-error';
            console.log(errorDivClassName);
            // input tags have .val()
            // everything else has .html
            if($(this).val() == ''){
                // console.log("User did not enter enough information")
                $(errorDivClassName).html('Field cannot be empty.')
            }
        });

        // console.log($('password').val());
        var password = $('.password').val();
        var password2 = $('.password-conf').val();
        if(password !== password2){
            $('.password-error').html('Your passwords do not match.')
        }
        // Force user to have a number in the password
        // Keep track of numberFound as a boolean
        var numberFound = false;
        for(let i = 0; i < password.length; i++){
            if(isNaN(Number(password[i]))){
                // this is not a number
            }else{
                // this is a number
                numberFound = true;
            }
        }
        if(!numberFound){
            $('.conf-password-error').html('Your password must contain a number.')
        }
    });
});