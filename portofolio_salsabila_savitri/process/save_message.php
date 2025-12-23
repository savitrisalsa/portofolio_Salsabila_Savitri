<?php
include "../config/db.php";

$name    = $_POST['name'];
$email   = $_POST['email'];
$phone   = $_POST['phone'];
$message = $_POST['message'];

$query = "INSERT INTO messages (name, email, phone, message)
          VALUES ('$name', '$email', '$phone', '$message')";

if (mysqli_query($conn, $query)) {
    echo "<script>
            alert('Pesan berhasil dikirim!');
            window.location='../index.php';
          </script>";
} else {
    echo "Gagal menyimpan pesan";
}
?>
