<?php 
$archivo = fopen("contacto.txt","w");
fwrite($archivo,"Nombre : ".$_POST["nombre"]."\n");
fwrite($archivo,"Email : ".$_POST["email"]."\n");
fwrite($archivo,"Mensaje : ".$_POST["mensaje"]);
fclose($archivo);

session_start();
$_SESSION["nombre"] = $_POST["nombre"];

header("Location: contacto.php");