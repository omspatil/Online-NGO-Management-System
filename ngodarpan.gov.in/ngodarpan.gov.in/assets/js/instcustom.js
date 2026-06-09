$(document).ready(function () {
    // Show the modal when the Sign Up tab is clicked
    $('.inst_signupModal').click(function () {
        $('#signupModal').modal('show');
    });

    // Enable the Proceed button only when the checkbox is checked
    $('#main_checkbox').change(function () {
        if ($(this).is(':checked')) {
            $('#proceedButton').prop('disabled', false);
        } else {
            $('#proceedButton').prop('disabled', true);
        }
    });
});