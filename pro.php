<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'your_email@gmail.com'; // Replace with your email address
    $subject = 'Message from ' . $name;
    $body = 'From: ' . $email . "\n\n" . 'Message: ' . $message;

    $headers = 'From: ' . $email;

    if (mail($to, $subject, $body, $headers)) {
        echo '<script>alert("Email sent successfully!");</script>';
    } else {
        echo '<script>alert("Failed to send email.");</script>';
    }
}
?>
