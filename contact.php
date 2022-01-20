<?php

if (isset($_POST["name"]) and isset($_POST["email"]) and isset($_POST["message"])) 
{
    $name = $_POST['name'];
    $email_src = $_POST['email'];
    $message = $_POST['message'];

    $email_subject = "ANG-SAM SOFTWARE";
    $email_txt = "From: ".$name."\nEmail: ".$email_src."\nMessage: ".$message;
    
    $email_dst = ""; //redact

    $headers = "From: ".$email_src;

    $secret_key = ""; //redact
    $response_key = $_POST['g-recaptcha-response'];
    $ip = $_SERVER['REMOTE_ADDR'];

    $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secret_key&response=$response_key&remoteip=$ip";

    $response = file_get_contents($url);
    $response = json_decode($response, true);

    if($response['success'] and $response['score'] >= 0.5 and $response['action'] == "submit")
    {
        mail($email_dst, $email_subject, $email_txt, $headers);
    }
    else
    {
        echo "CAPTCHA failed. Please try again.";
    }
    

}
        
?>
