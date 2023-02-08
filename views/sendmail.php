<?php

define('SITE_KEY', '6Lc0vfkjAAAAABMrAfGgBk58qArgpYUNulBwgJ0e');
define('SECRET_KEY', '6Lc0vfkjAAAAAAp8vb-vkQkxrcp3FDm4Z_18GQMy');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $to             = 'essam.soft@gmail.com';
    $the_name 		= $_POST['name'];
    $the_email 		= $_POST['email'];
    $the_message 	= $_POST['message'];
    $_lang       	= $_POST['lang'];

    $token          = $_POST['g-recaptcha-response'];

    $subject = "new message - octavey" ;
    $header .= 'From: '. $the_name .' <info@octavey.com>' . "\r\n";
    $header .= 'Reply-To: '. $the_name .' <'. $the_email . "> \r\n" ;
    $header .= 'MIME-Version: 1.0' . " \r\n";
    $header .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $header .= "X-Mailer: PHP/".phpversion();

    if( empty($the_name) or empty($the_email) or  empty($the_message)  ) {
        echo json_encode( array('status' => "error" , 'message' => "يرجى ملئ الحقول الفارغة") );
        die();
    }

    if (!filter_var($the_email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode( array('status' => "error" , 'message' => "البريد الالكتروني غير صحيح!") );
        die();
    }

    $message1 = nl2br($the_message);

    $message = "<table style='text-align: right;width: 100%;font-size: 18px;direction: rtl;'><tr><td>";
    $message .= "
    الاسم : $the_name  <br>
    الرسالة: $message1 <br /></td></tr>";

    $message .= "</table>";

    $url = "https://www.google.com/recaptcha/api/siteverify";
    $data = [
        'secret' => SECRET_KEY,
        'response' => $token,
    ];

    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        )
    );

    $context  = stream_context_create($options);
    $response = file_get_contents($url, false, $context);

    $res = json_decode($response, true);

 
    if($res['success'] == true) {
        mail($to, $subject, $message, $header);
        echo json_encode( array('status' => "success" ,'message' => "تم ارسال رسالتك بنجاح") );
        die();
    }else{
        echo json_encode( array('status' => "error" , 'message' => "عذراً لم يتم ارسال رسالتك!") );
        die();
    }

}else{ echo":)"; }


?>
