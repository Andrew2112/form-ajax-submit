function checkParams() {
    let name = $('#name').val();
    let email = $('#email').val();
    if(name != '' && email != '' ) {
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
        success: function (res) {
            if (res=='yes'){
                $('.answer'). text('Данные приняты').fadeOut(3500);
                $('form').trigger('reset');
                $('.submit').attr('disabled', 'disabled');
            }else if(res=='no'){
                $('.answer'). text('Логин занят');
            }

        },
        error: function () {
            alert("Ошибка");
        }
    });
    return false;


    });
});