    $(document).ready(function () {
        /*Код для синих ссылок в навбарах наверху*/
        $(".blue-link").css('color', '#0091d9');
        $(".blue-link").mouseover(function () {
            $(this).css('color', 'red');
        });

        $(".blue-link").mouseout(function () {
            $(this).css('color', '#0091d9');
        });
        /*Конец*/  
        /*Серые ссылки*/
        $(".grey-link").css('color', '#a1a1a1');
        $(".grey-link").mouseover(function () {
            $(this).css('color', 'red');
        });

        $(".grey-link").mouseout(function () {
            $(this).css('color', '#a1a1a1');
        });
        /*Конец*/
        
        /*Чёрные ссылки*/
        $(".black-link").css('color', '#000');
        $(".black-link").mouseover(function () {
            $(this).css('color', 'red');
        });
        $(".black-link").mouseout(function () {
            $(this).css('color', '#000');
        });
          /*Конец*/
        
        $(".footer-link").css('color', '#858585');
           $(".footer-link").mouseover(function () {
            $(this).css('color', 'red');
        });
        $(".footer-link").mouseout(function () {
            $(this).css('color', '#858585');
        });
    });
      