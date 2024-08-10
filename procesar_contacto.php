<?php

switch ($_POST["accion"]) {
    case 'add':
        $archivo = fopen("contacto.txt", "w");
        fwrite($archivo, "Nombre : " . $_POST["nombre"] . "\n");
        fwrite($archivo, "Email : " . $_POST["email"] . "\n");
        fwrite($archivo, "Mensaje : " . $_POST["mensaje"]);
        fclose($archivo);
        echo "00";
    break;
    default:
        echo "99";
        break;
}
