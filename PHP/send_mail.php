<?php

    require 'PHPMailer/PHPMailerAutoload.php';
    
    //sendmail('chanubandara5@gmail.com','testing subject','<h1>huuuuuuuu</h1>');

    function sendmail($reciver,$subject,$content){
        $mail = new PHPMailer;
        $mail->isSMTP(); //comment this line when hosting
        $mail->Host='smtp.gmail.com';
        $mail->Port=587;
        $mail->SMTPAuth=true;
        $mail->SMTPSecure='tls';

        $mail->Username='lucidinsight8@gmail.com';
        $mail->Password='Lucidinsight123';

        $mail->setFrom('lucidinsight8@gmail.com','LUCID');
        $mail->addAddress($reciver);
        $mail->addReplyTo('lucidinsight8@gmail.com');

        $mail->isHTML(true);
        $mail->Subject=$subject;
        $mail->Body=$content;
        if(!$mail->send()){
            echo "Message could not be sent";
        }
    }


?>