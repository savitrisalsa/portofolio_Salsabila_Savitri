<?php
$host = "localhost";
$user = "root";
$pass = ""; // kosong jika default Laragon/XAMPP
$db   = "portfolio_db";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>