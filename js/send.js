$(document).ready(function () {
    $("#phone").mask("+7 (999) 999-99-99");
    
    $("form").submit(function () {
        $.ajax({
            type: "POST",
            url: "submit.php",
            data: $(this).serialize(),
        }).done(function () {
            $(this).find("input").val("");
          
            $("form").trigger("reset");
        });
        return false;
    });
});
