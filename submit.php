<?php
    echo phpversion;
        $recepient = 'uberasura@mail.ru';
        
        $headers = 'From: Konstantin\r\n'.
                  'Reply-To: konstantinstepanyan99@mail.ru\r\n';
        
        $message = 'Имя: $firstName \n Фамилия: $lastName \n Телефон: $number';
        
        $firstName = trim($_POST["firstName"]);
        $lastName = trim($_POST["lastName"]);
        $agree = trim($_POST['agree']);
        $number = trim($_POST['number']);

  mail($recepient, 'заявка из PHP', $message, $headers);
?>
