<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "syamrajr333@gmail.com";
  $subject = "New message from Optimist";
  $headers = "From: $email";

  $body = "Name: $name\nEmail: $email\nMessage:\n$message";

  if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully.";
  } else {
    echo "Failed to send message.";
  }
}
?>
