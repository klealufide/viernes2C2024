<?php
include("functions.php");
$menu = getMenu();
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Biblioteca Aserri</title>
    <link rel="stylesheet" href="./css/styles.css">
    <script src="./js/jquery-3.7.1.slim.min.js"></script>
    <script src="./js/scriptv1.js"></script>
</head>

<body>
    <header>
        <h1>Biblioteca Aserri</h1>
        <nav>
            <ul>
                <?php foreach ($menu as $item) { ?>
                    <li><a href="<?php echo $item["url"] ?>"><?php echo $item["name"] ?></a></li>
                <?php } ?>
            </ul>
        </nav>
    </header>
    <main>
        <section>
            <img src="./images/image1.jpg" alt="Imagen principal">
        </section>
        <section class="main">
            <h2>Bienvenidos a la Biblioteca de Aserri</h2>
            <p>Descubre una gran coleccion de libros y recursos digitales</p>
        </section>
        <section class="main">
            <h2>Catalogo</h2>
            <p>Explora nuestro catalogo de libros y recursos disponibles para prestamo.</p>
        </section>
        <section class="services">
            <h2>Servicios</h2>
            <div class="service-container">
                <div class="service-box">
                    <img src="./images/servicio1.jpg" alt="Servicio 1">
                    <h3>Prestamo de Libros</h3>
                    <p>Accede a una amplia colección de libros disponibles para préstamo.</p>
                </div>
                <div class="service-box">
                    <img src="./images/servicio2.jpg" alt="Servicio 2">
                    <h3>Recursos Digitales</h3>
                    <p>Utiliza nuestros recursos digitales para tus necesidades educativas y de investigación.</p>
                </div>
                <div class="service-box">
                    <img src="./images/servicio3.jpg" alt="Servicio 3">
                    <h3>Eventos y Talleres</h3>
                    <p>Participa en eventos y talleres organizados por la biblioteca.</p>
                </div>
            </div>
        </section>
        <section class="main2">
            <h2 id="sub">Precios</h2>
            <table>
                <tr>
                    <th>Cantidad de libros</th>
                    <th>Precio</th>
                </tr>
                <tr>
                    <td>1 - 3</td>
                    <td>Gratis</td>
                </tr>
                <tr>
                    <td>4 - 6</td>
                    <td>100 CRC</td>
                </tr>
                <tr>
                    <td>6 y más</td>
                    <td>500 CRC</td>
                </tr>
            </table>
        </section>
        <section>
            <h2>Contacto</h2>
            <p>Para más información, puedes contactarnos a través de nuestro formulario en línea.</p>
            <form>
                <label>Nombre:</label>
                <input type="text">
                <br>
                <label>Correo electrónico:</label>
                <input type="email">
                <br>
                <label>Mensaje:</label>
                <textarea></textarea>
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