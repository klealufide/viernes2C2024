<?php 
session_start();

?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Biblioteca Aserri</title>
    <link rel="stylesheet" href="./css/styles.css">\
    <script src="./js/script.js"></script>
</head>

<body>
    <header>
        <h1>Biblioteca Aserri</h1>
        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Prestamo</a></li>
                <li><a href="#">Catalogo</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="contacto.php">Contacto</a></li>
                <li><a href="#">Inicio sesion</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section>
            <h2>Contacto</h2>
            <p>Para más información, puedes contactarnos a través de nuestro formulario en línea.</p>
            <?php
                if(isset($_SESSION["nombre"])){
                    echo "Muchas gracias por contactarnos ".$_SESSION["nombre"];
                    session_destroy();
                }
            ?>
            <form method="post" action="procesar_contacto.php">
                <label>Nombre:</label>
                <input type="text" name="nombre">
                <br>
                <label>Correo electrónico:</label>
                <input type="email" name="email">
                <br>
                <label>Mensaje:</label>
                <textarea name="mensaje"></textarea>
                <br>
                <button type="submit">Enviar</button>
            </form>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Biblioteca Aserrí. Todos los derechos reservados.</p>
    </footer>
</body>

</html>
