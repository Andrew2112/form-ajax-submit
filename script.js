function checkParams() {
    let name = $('#name').val();
    let email = $('#email').val();
    let password = $('#password').val();
    if(name != '' && email != '' && password !='' ) {
        $('.submit').removeAttr('disabled');
    } else {
        $('.submit').attr('disabled', 'disabled');
    }
}
$(document).ready(function () {

    $('form').submit(function () {
        let data = $(this).serialize();


    $.ajax({
        url: 'send.php',
        type: 'POST',
        data: data,
        beforeSend: function () {
            $('.loader').fadeIn();
        },
        success: function (res) {
            $('.loader').fadeOut('slow', function () {
                if (res=='yes'){
                $('.answer'). text('Данные приняты').fadeOut(3500);
                $('form').trigger('reset');
                $('.submit').attr('disabled', 'disabled');
            }else if(res=='no'){
                $('.answer'). text('Логин занят');
            }
            });


        },
        error: function () {
            alert("Ошибка");
        }
    });
    return false;


    });
});