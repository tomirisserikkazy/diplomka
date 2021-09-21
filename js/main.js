$(document).ready(() => {
    $('#fourth-products').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        dotsClass: "my-dots",
        arrows: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('#how-do-we-collect-tea-video, #how-png').mouseover(function () {
        $('#how-png').css('display', 'none');
    }).mouseout(function () {
        $('#how-png').css('display', 'block');
    });

    $('.open-modal').click(() => {
        $('#pop-up').css('display', 'flex');
        $('#pop-up-box').css('display', 'block')
    });

    $('#close-img1 , #pop-up').click((e) => {
        if (e.target.id === 'pop-up' || e.target.id === 'close-img1') {
            $('#pop-up').hide();
        }
    })

    let popSent = $('#pop-up-box-sent');
    popSent.hide();

    $('#pop-up-btn').click(() => {
        let select = $('#select')

        let gram = $('#gram')
        let name = $('#name')
        let number = $('#numb')

        let selectE = $('#select-error')
        let gramE = $('#gram-error')
        let nameE = $('#name-error')
        let numberE = $('#number-error')

        selectE.hide();
        gramE.hide();
        nameE.hide();
        numberE.hide();


        let hasError = false;

        if (!select.val()) {
            selectE.css('display', 'block');
            selectE.show();
            hasError = true;
            select.css('border-color', 'red');
        } else {
            select.css('border-color', 'rgb(143, 188, 98)');
        }

        if (!gram.val()) {
            gramE.css('display', 'block')
            gramE.show();
            hasError = true;
            gram.css('border-color', 'red');
        } else {
            gram.css('border-color', 'rgb(143, 188, 98)');
        }

        if (!name.val()) {
            nameE.css('display', 'block');
            nameE.show();
            hasError = true;
            name.css('border-color', 'red');
        } else {
            name.css('border-color', 'rgb(143, 188, 98)');
        }

        if (!number.val()) {
            numberE.css('display', 'block');
            numberE.show();
            hasError = true;
            number.css('border-color', 'red');
        } else {
            number.css('border-color', 'rgb(143, 188, 98)');
        }

        $('#close-img2 , #pop-up').click((e) => {
            if (e.target.id === 'pop-up' || e.target.id === 'close-img2') {
                $('#pop-up').hide();
            }
        })

        if (!hasError) {
            $('#pop-up-box').hide();
            popSent.show();

            // $.ajax({
            //     type: 'post',
            //     url: 'mail.php',
            //     data: '$order=' + select.val() + '&gram' + gram.val() + '&name' + name.val() + '&number' + number.val(),
            //     success: () => {
            //         $('#pop-up-box').hide();
            //         popSent.show();
            //     }, error: () => {
            //         $('#pop-up').hide();
            //         alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.');
            //     }
            // });
        }

    })


    $('#discount-btn').click(() => {

        let email = $('#discount-email')
        let emailE = $('#discount-emailE')

        emailE.hide();

        let hasError = false;

        if (!email.val()) {
            emailE.css('display', 'block')
            emailE.show();
            hasError = true;
            email.css('border-color', 'red');
        } else {
            email.css('border-color', 'rgb(143, 188, 98)');
        }


        if (!hasError) {

            $('#discount-btn').hide();
            email.hide();
            $('#discount-success').show();

            // $.ajax({
            //     type: 'post',
            //     url: 'discount.php',
            //     data: '$email=' + email.val(),
            //     success: () => {
            //         $('#discount-btn').hide();
            //         email.hide();
            //         $('#discount-success').show();
            //     }, error: () => {
            //         alert('Ошибка. Промокод не отправился. Свяжитесь, пожалуйста, по номеру телефона.');
            //     }
            // });
        }
    });


    $('#burger').click(() => {
        $('#burger-menu').css('display', 'flex');
    })

    $('#burger-menu > #burger-menu-container > img').click(() => {
        $('#burger-menu').css('display', 'none');
    })

    console.log($('#how-do-we-collect-tea').attr('class', 'none-png'));
    let howPng = $('#how-png');
    $('#how-do-we-collect-tea.none-png').removeChild(howPng);


})