<?php
include("db.php");

$usuario = $_POST["usuario"];
$clave = $_POST["clave"];

$sql = "SELECT * FROM `usuarios` WHERE usuario = '$usuario'";

$result = $conn->query($sql);

if($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
        if($row["usuario"] == $usuario){
            if(password_verify($clave,$row["clave"])){
                session_start();
                $_SESSION["usuario"] = $usuario;
                header("Location: index.php");
            }
        }
    }
} else {
    echo "No existe el usuario! <br>";
    die();
}