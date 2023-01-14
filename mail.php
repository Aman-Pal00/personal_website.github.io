<?php
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$subject = $_POST['subject'];
$to = "aman5135070@gmail.com";
$txt ="name:".$name ."\r\nemail:".$email."\r\nsubject:".$subject "\r\message:".$message;
$headers ="from:amanpal5135@gmail.com";
if ($email! = NULL) {
    mail($to,$subject,$txt,$headers);
}
else{
    echo "fail";
}

header("Location:index.html");
?>