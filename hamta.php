<?php
session_start();

define("DB_SERVER", "localhost");
define("DB_EMAIL", "root");
define("DB_PASSWORD", "");
define("DB_NAME", "jsonmuffin");
$result = null;
$dbh = new PDO('mysql:dbname=' . DB_NAME . ';host=' . DB_SERVER . ';charset=utf8', DB_EMAIL, DB_PASSWORD);



 $sql = "SELECT * FROM muffins";


$stmt = $dbh->prepare($sql);
$stmt->execute();

$produkter["muffins"] = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($produkter);


?>
