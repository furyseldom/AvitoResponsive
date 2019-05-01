    $(document).ready(function () {
        var blueLink = $(".blue-link");
        var greyLink = $(".grey-link");
        var blackLink = $(".black-link")
        var footerLink = $(".footer-link");
        /*Код для синих ссылок в навбарах наверху*/
        $(blueLink).css('color', '#0091d9');
        $(blueLink).mouseover(function () {
            $(this).css('color', 'red');
        });

        $(blueLink).mouseout(function () {
            $(this).css('color', '#0091d9');
        });
        /*Конец*/  
        /*Серые ссылки*/
        $(greyLink).css('color', '#a1a1a1');
        $(greyLink).mouseover(function () {
            $(this).css('color', 'red');
        });

        $(greyLink).mouseout(function () {
            $(this).css('color', '#a1a1a1');
        });
        /*Конец*/
        
        /*Чёрные ссылки*/
        $(blackLink).css('color', '#000');
        $(blackLink).mouseover(function () {
            $(this).css('color', 'red');
        });
        $(blackLink).mouseout(function () {
            $(this).css('color', '#000');
        });
          /*Конец*/
        
        $(footerLink).css('color', '#858585');
           $(footerLink).mouseover(function () {
            $(this).css('color', 'red');
        });
        $(footerLink).mouseout(function () {
            $(this).css('color', '#858585');
        });
    });
      
