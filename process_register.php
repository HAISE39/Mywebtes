<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST['username']);
    $email = htmlspecialchars($_POST['email']);
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    // Validasi password
    if ($password !== $confirm_password) {
        echo "Passwords do not match!";
        exit;
    }

    // Hash password (aman)
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    // Kirim email ke aurcusojapan@gmail.com
    $to = "aurcusojapan@gmail.com";
    $subject = "New Registration: $username";
    $message = "Username: $username\nEmail: $email\nPassword (hashed): $hashed_password";
    $headers = "From: noreply@yourdomain.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Registration successful! Data sent to email.";
    } else {
        echo "Error sending email.";
    }
}
?>