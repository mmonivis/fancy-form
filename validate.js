// Set up a doc ready so nothing happens too early

$(document).ready(function(){
    // New jQuery method... submit
    $('.sign-up-form').submit(function(event){
        event.preventDefault();
        console.log('User submitted the form!');
        $('input').each(function(){
            var currentInputTagName = $(this).attr('name');
            console.log(currentInputTagName);
            // target the corresponding error div for THIS input tag
            var errorDivClassName = "." + currentInputTagName + '-error';
            console.log(errorDivClassName);
            // input tags have .val()
            // everything else has .html
            if($(this).val() == ''){
                // console.log("User did not enter enough information")
                $(errorDivClassName).html('Field cannot be empty.')
            }
        });
    });
});